#include <Wire.h>
#include <Adafruit_TCS34725.h>
#include <LiquidCrystal_I2C.h>

// Déclaration des objets
Adafruit_TCS34725 sensor = Adafruit_TCS34725(TCS34725_INTEGRATIONTIME_154MS, TCS34725_GAIN_4X);
LiquidCrystal_I2C lcd (0x27, 16, 2);

// Déclaration de nos variables
// Cas de la diode laser et de la photorésistance
const int laserPin = 2;
const int ldrPin = A0;
const int seuil = 300;
// Cas des moteurs
// Moteur 1
const int motorA_IN1 = 8;
const int motorA_IN2 = 9;
const int motorA_EN = 10; // PWM
// Moteur 2 
const int motorB_IN3 = 11;
const int motorB_IN4 = 12;
const int motorB_EN = 5;  // PWM

// Cas de validation du traitement de déchet
bool dechetOK = false;

// Déclaration des fonctions implémentées
void detecterEtEnvoyerCouleur();
void demarrerConvoyeur(int vitesse);
void arreterConvoyeur();

// Fonction de configuration pour une meilleure marche du système
void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600);

  Wire.begin();

  // Configuration LCD
  lcd.init();
  lcd.backlight();

  // Configuration Diode laser
  pinMode(laserPin, OUTPUT);
  digitalWrite(laserPin, HIGH);

  // Configuration des moteurs
  pinMode(motorA_IN1, OUTPUT);
  pinMode(motorA_IN2, OUTPUT);
  pinMode(motorA_EN, OUTPUT);

  pinMode(motorB_IN3, OUTPUT);
  pinMode(motorB_IN4, OUTPUT);
  pinMode(motorB_EN, OUTPUT);
 
  // Vérification de la connexion au niveau du capteur de couleur
  if (sensor.begin()) {
    lcd.setCursor(0, 0);
    lcd.print("Sensor en marche.");
  }
  else {
    lcd.setCursor(0, 0);
    lcd.print("Sensor non connecté. Veuillez vérifier les connexions.");
    while (1);
  }

  lcd.setCursor(0, 0);
  lcd.print("Systeme PRET! ON");
  delay(2000);
}

void loop() {
  // put your main code here, to run repeatedly:
  int detect = analogRead(ldrPin);
  if (detect < seuil && !dechetOK) {
    lcd.setCursor(0, 0);
    lcd.print("Dechet detecte!");

    // Moteurs du convoyeur en marche
    demarrerConvoyeur(180); // Mettre en marche le convoyeur
    delay(2000); // Temps pour atteindre la zone de détection de couleur

    // Moteurs du convoyeur à l'arrêt
    arreterConvoyeur(); // Mise à l'arrêt du convoyeur

    // Fonction pour la détection et l'envoi d'info sur la couleur du déchet
    detecterEtEnvoyerCouleur(); 

    delay(5000);
    
    // Confirmation de déchet traité
    dechetOK = true;
  }
  else if (detect >= seuil && dechetOK) {
    dechetOK = false; // Confirmation de l'abscence de déchet
    lcd.setCursor(0, 0);
    lcd.println("Aucun dechet detecte!");
  }
}

void demarrerConvoyeur(int vitesse) {
  // Moteur A
  digitalWrite(motorA_IN1, HIGH);
  digitalWrite(motorA_IN2, LOW);
  analogWrite(motorA_EN, vitesse);

  // Moteur B
  digitalWrite(motorB_IN3, HIGH);
  digitalWrite(motorB_IN4, LOW);
  analogWrite(motorB_EN, vitesse);
}

void arreterConvoyeur() {
  analogWrite(motorA_EN, 0);
  analogWrite(motorB_EN, 0);
}

void detecterEtEnvoyerCouleur() {
  uint16_t r, g, b, c, colorTemp, lux;

  // Lecture des valeurs brutes du capteur
  sensor.getRawData(&r, &g, &b, &c);

  // Calculs des paramètres
  colorTemp = sensor.calculateColorTemperature(r, g, b);
  lux = sensor.calculateLux(r, g, b);

  // Détection et traitement
  lcd.setCursor(0, 1);
  lcd.print("                "); // Efface l'ancienne ligne
  lcd.setCursor(0, 1);

  if (c > r && c > g && c > b && lux > 500) {
    lcd.print("AUCUNE COULEUR");
  }
  else if (r > g && r > b && r < c && lux > 10 && lux < 100) {
    lcd.print("Couleur: ROUGE");
    Serial.println("3");
  }
  else if (g > r && g > b && g < c && lux > 200 && lux < 300) {
    lcd.print("Couleur: VERT ");
    Serial.println("0");
  }
  else if (b > r && b > g && b < c && lux > 100 && lux < 200) {
    lcd.print("Couleur: BLEU ");
    Serial.println("1");
  }
  else if (r > 600 && r < 850 && g > 450 && g < 630 && b > 300 && b < 440 && lux > 300 && lux < 420 && abs(r - g) < 250) {
    lcd.print("Couleur: JAUNE");
    Serial.println("2");
  }
  else {
    lcd.print("Couleur: INCONNUE");
  }
}

