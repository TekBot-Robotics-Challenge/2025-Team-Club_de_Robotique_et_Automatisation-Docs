#include <Wire.h>
#include <LiquidCrystal_I2C.h>
#include "I2Cdev.h"
#include "MPU6050_6Axis_MotionApps20.h"

// LCD I2C : adresse 0x27, 16 colonnes, 2 lignes
LiquidCrystal_I2C lcd(0x27, 16, 2);
MPU6050 mpu;

#define INTERRUPT_PIN 2
volatile bool mpuInterrupt = false;
void dmpDataReady() { mpuInterrupt = true; }

bool dmpReady = false;
uint8_t mpuIntStatus;
uint8_t devStatus;
uint16_t packetSize, fifoCount;
uint8_t fifoBuffer[64];

Quaternion q;
VectorFloat gravity;
float ypr[3];
VectorInt16 aa, aaReal;

float prevYaw = 0, prevPitch = 0, prevRoll = 0;
const float seuilAngle = 5.0;        // Seuil en degrés pour rotations
const int   seuilAccZ  = 600;        // À ajuster après calibration (ex. 500–1200)
// float zFilt       = 0;               // Valeur filtrée de l’accélération Z
// const float alpha = 0.2;             // Coef. filtre passe-bas (0<alpha<1)
float accZ_filtered = 0;
const float alpha = 0.3; // coefficient filtre passe-bas
String direction = "";

void setup() {
  Wire.begin();
  lcd.begin(16, 2);
  lcd.init();
  lcd.backlight();
  lcd.clear();
  lcd.setCursor(0,0);
  lcd.print("Init MPU6050...");
  delay(1000);
  Serial.begin(115200);
  mpu.initialize();
  pinMode(INTERRUPT_PIN, INPUT);

  // Offsets calibrés (à ajuster pour ton module)
  mpu.setXAccelOffset(874);
  mpu.setYAccelOffset(-853);
  mpu.setZAccelOffset(-21);
  mpu.setXGyroOffset(-59);
  mpu.setYGyroOffset(20);
  mpu.setZGyroOffset(-57);

  devStatus = mpu.dmpInitialize();
  if (devStatus == 0) {
    mpu.CalibrateAccel(6);
    mpu.CalibrateGyro(6);
    mpu.setDMPEnabled(true);
    attachInterrupt(digitalPinToInterrupt(INTERRUPT_PIN), dmpDataReady, RISING);
    mpuIntStatus = mpu.getIntStatus();
    dmpReady     = true;
    packetSize   = mpu.dmpGetFIFOPacketSize();
    lcd.clear();
    lcd.setCursor(0,0);
    lcd.print("MPU6050 pret!");
    delay(1000);
  } else {
    lcd.clear();
    lcd.setCursor(0,0);
    lcd.print("Erreur DMP:");
    lcd.print(devStatus);
    while (1);
  }
}

void loop() {
  if (!dmpReady) return;
  if (!mpuInterrupt && fifoCount < packetSize) return;

  mpuInterrupt = false;
  mpuIntStatus = mpu.getIntStatus();
  fifoCount    = mpu.getFIFOCount();

  // Gestion overflow FIFO
  if ((mpuIntStatus & 0x10) || fifoCount == 1024) {
    mpu.resetFIFO();
    lcd.clear();
    lcd.setCursor(0,0);
    lcd.print("Overflow FIFO!");
    return;
  }

  // Lecture du FIFO
  while (fifoCount < packetSize) fifoCount = mpu.getFIFOCount();
  mpu.getFIFOBytes(fifoBuffer, packetSize);
  fifoCount -= packetSize;

  // Calcul des angles
  mpu.dmpGetQuaternion(&q, fifoBuffer);
  mpu.dmpGetGravity(&gravity, &q);
  mpu.dmpGetYawPitchRoll(ypr, &q, &gravity);
  float yaw   = ypr[0] * 180/M_PI;
  float pitch = ypr[1] * 180/M_PI;
  float roll  = ypr[2] * 180/M_PI;

  // Calcul de l'accélération
  float acc = sqrt(pow(aaReal.x, 2) + pow(aaReal.y, 2) + pow(aaReal.z, 2));

  // Accélération linéaire
  mpu.dmpGetAccel(&aa, fifoBuffer);
  mpu.dmpGetLinearAccel(&aaReal, &aa, &gravity);

  // Filtrage passe-bas simple sur accZ
  accZ_filtered = alpha * aaReal.z + (1 - alpha) * accZ_filtered;
  detectDirection(yaw, pitch, roll, accZ_filtered);

  // Affichage LCD
  lcd.clear();
  lcd.setCursor(0,0);
  lcd.print("Dir: "); lcd.print(direction);
  Serial.print("  Dir="); Serial.println(direction);
  lcd.setCursor(1,0);
  lcd.print("a = "); 
  lcd.print(acc); 
  lcd.print("m/s^2");
  delay(500);
}

void detectDirection(float yaw, float pitch, float roll, float accZf) {
  float dPitch = pitch - prevPitch;
  float dRoll  = roll  - prevRoll;
  float dYaw   = yaw   - prevYaw;

  if (abs(accZf) > seuilAccZ) {
    direction = (accZf > 0) ? "Haut" : "Bas";
  }
  else if (abs(dPitch) > abs(dRoll) && abs(dPitch) > seuilAngle) {
    direction = (dPitch > 0) ? "Avant" : "Arriere";
  }
  else if (abs(dRoll) > seuilAngle) {
    direction = (dRoll > 0) ? "Droite" : "Gauche";
  }
  else if (abs(dYaw) > seuilAngle) {
    direction = (dYaw > 0) ? "Rot Droite" : "Rot Gauche";
  }
  else {
    direction = "Stable";
  }

  prevYaw   = yaw;
  prevPitch = pitch;
  prevRoll  = roll;
}


