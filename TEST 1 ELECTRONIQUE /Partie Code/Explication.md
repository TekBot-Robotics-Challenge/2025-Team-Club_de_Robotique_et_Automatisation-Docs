# Explication détaillée du code MPU6050 + LCD I2C avec ATmega328P

Ce fichier a pour objectif d'expliquer en détail le fonctionnement d’un code utilisant un capteur **MPU6050** pour détecter l’orientation/mouvement, et afficher l’information sur un **écran LCD I2C**.

##  Bibliothèques utilisées

```cpp
#include <Wire.h>                          // Communication I2C
#include <LiquidCrystal_I2C.h>             // Gestion de l’écran LCD I2C
#include "I2Cdev.h"                        // Interface avec les capteurs I2C
#include "MPU6050_6Axis_MotionApps20.h"   // Accès au DMP du MPU6050
```

###  Pourquoi ces bibliothèques ?
- `Wire.h` : nécessaire pour utiliser les broches I2C (SDA/SCL).
- `LiquidCrystal_I2C.h` : gère l'affichage sur un écran 16x2 via I2C.
- `I2Cdev.h` et `MPU6050_6Axis_MotionApps20.h` : permettent de tirer parti du DMP (Digital Motion Processor) du MPU6050 pour calculer facilement l’orientation (Yaw, Pitch, Roll).

---

##  Initialisation des objets

```cpp
LiquidCrystal_I2C lcd(0x27, 16, 2);  // Adresse I2C de l'écran LCD
MPU6050 mpu;                         // Objet MPU6050
```

- L’adresse `0x27` est celle la plus commune pour les LCD I2C. Elle peut varier.
- Le MPU6050 est instancié sans paramètres supplémentaires.

---

##  Interruption

```cpp
#define INTERRUPT_PIN 2
volatile bool mpuInterrupt = false;
void dmpDataReady() { mpuInterrupt = true; }
```

- On utilise la broche 2 de l’ATmega328P pour recevoir les interruptions du MPU6050.
- `mpuInterrupt` est déclenché dès que de nouvelles données sont prêtes.

---

##  Variables globales pour la DMP

```cpp
bool dmpReady = false;
uint8_t mpuIntStatus;
uint8_t devStatus;
uint16_t packetSize, fifoCount;
uint8_t fifoBuffer[64];
```

- Ces variables permettent de gérer les paquets de données du DMP (contenus dans le FIFO).

```cpp
Quaternion q;
VectorFloat gravity;
float ypr[3];
VectorInt16 aa, aaReal;
```

- `q` : quaternion représentant l’orientation.
- `gravity` : vecteur gravité, calculé à partir de `q`.
- `ypr` : tableau contenant les angles Yaw (cap), Pitch (tangage), Roll (roulis).
- `aa` : accélération brute.
- `aaReal` : accélération linéaire, sans la gravité.

---

##  Seuils et filtres

```cpp
float prevYaw = 0, prevPitch = 0, prevRoll = 0;
const float seuilAngle = 5.0;
const int seuilAccZ = 600;
float accZ_filtered = 0;
const float alpha = 0.3;
String direction = "";
```

- `seuilAngle` : seuil minimum de variation pour considérer une rotation.
- `seuilAccZ` : utilisé pour détecter un mouvement vertical.
- `alpha` : coefficient du filtre passe-bas pour lisser les données Z.

---

##  Fonction `setup()` : initialisation

```cpp
Wire.begin();
lcd.begin(16, 2);
lcd.init();
lcd.backlight();
lcd.clear();
lcd.print("Init MPU6050...");
```

- Initialisation du bus I2C, de l’écran LCD, et affichage d’un message de démarrage.

```cpp
Serial.begin(115200);
mpu.initialize();
pinMode(INTERRUPT_PIN, INPUT);
```

- Communication série pour le debug.
- Initialisation du MPU6050.

```cpp
mpu.setXAccelOffset(...); // Offsets calibrés
```

- Correction matérielle des mesures.

```cpp
devStatus = mpu.dmpInitialize();
if (devStatus == 0) {
  mpu.CalibrateAccel(6);
  mpu.CalibrateGyro(6);
  mpu.setDMPEnabled(true);
  attachInterrupt(...);
  packetSize = mpu.dmpGetFIFOPacketSize();
  dmpReady = true;
```

- Si tout est bon, le DMP est activé.
- On attache l’interruption pour que le microcontrôleur soit prévenu dès qu’il y a de nouvelles données.

---

##  Fonction `loop()` : lecture en continu

```cpp
if (!dmpReady) return;
if (!mpuInterrupt && fifoCount < packetSize) return;
```

- On ne fait rien tant que le DMP n’est pas prêt ou s’il n’y a pas de nouvelles données.

```cpp
fifoCount = mpu.getFIFOCount();
if ((mpuIntStatus & 0x10) || fifoCount == 1024) {
  mpu.resetFIFO();
  lcd.print("Overflow FIFO!");
  return;
}
```

- On vérifie s’il y a un débordement (overflow) du buffer FIFO.

```cpp
mpu.getFIFOBytes(fifoBuffer, packetSize);
fifoCount -= packetSize;
```

- Lecture du paquet FIFO.

```cpp
mpu.dmpGetQuaternion(&q, fifoBuffer);
mpu.dmpGetGravity(&gravity, &q);
mpu.dmpGetYawPitchRoll(ypr, &q, &gravity);
```

- Récupération des angles YPR à partir des quaternions.

```cpp
mpu.dmpGetAccel(&aa, fifoBuffer);
mpu.dmpGetLinearAccel(&aaReal, &aa, &gravity);
accZ_filtered = alpha * aaReal.z + (1 - alpha) * accZ_filtered;
```

- Lecture de l’accélération réelle sans gravité, puis filtrage.

```cpp
detectDirection(yaw, pitch, roll, accZ_filtered);
```

- Détermination de la direction du mouvement selon les seuils.

```cpp
lcd.clear();
lcd.print("Dir: "); lcd.print(direction);
Serial.print("Dir="); Serial.println(direction);
```

- Affichage de la direction détectée.

---

##  Fonction `detectDirection(...)`

Cette fonction compare les valeurs actuelles avec les précédentes pour estimer la direction du mouvement.

```cpp
if (abs(accZf) > seuilAccZ) direction = (accZf > 0) ? "Haut" : "Bas";
else if (abs(dPitch) > abs(dRoll) && abs(dPitch) > seuilAngle) direction = (dPitch > 0) ? "Avant" : "Arriere";
else if (abs(dRoll) > seuilAngle) direction = (dRoll > 0) ? "Droite" : "Gauche";
else if (abs(dYaw) > seuilAngle) direction = (dYaw > 0) ? "Rot Droite" : "Rot Gauche";
else direction = "Stable";
```

- Cela permet de détecter **haut/bas**, **avant/arrière**, **droite/gauche**, ou une **rotation**.

---

## CONCLUSION

Ce code en C/C++ est structuré pour :
- Lire les données du capteur MPU6050 via son DMP (précision accrue)
- Déterminer la direction d’un mouvement ou une inclinaison
- Afficher le résultat sur un écran LCD I2C
- Utiliser des interruptions pour plus d’efficacité
- Proposer un système réactif, filtré et pédagogique

---


