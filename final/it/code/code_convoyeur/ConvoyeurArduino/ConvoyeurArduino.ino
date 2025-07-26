// Inclusion des bibliothèques
#include <Wire.h>
#include <Adafruit_TCS34725.h>
#include <LiquidCrystal_I2C.h>
#include <math.h>

// Déclaration des objets ca^teurs couleurs et écran LCD
Adafruit_TCS34725 sensor = Adafruit_TCS34725(TCS34725_INTEGRATIONTIME_154MS, TCS34725_GAIN_4X);
LiquidCrystal_I2C lcd (0x27, 16, 2);

// Déclaration de nos variables
// Cas des diodes laser et des photorésistances
// Premier couple LDR + Laser
const int laserPin1 = 2, ldrPin1 = A0;

//Deuxième couple LDR + Laser
const int laserPin2 = 3, ldrPin2 = A1;
// Déclaration de la variable contenant le seuil pour détecter la présence du laser ou pas
const int seuil = 300;

// Cas du moteur
const int motor_IN1 = 8;
const int motor_IN2 = 9;
const int motor_EN = 10; // Pour le controle de la vitesse par PWM

// Déclaration et réglage des variables de vitesse et de temps du moteur pour atteindre les zones
// 1 (première détection)
const int vitesse1 = 100, time1 = 2000;
// 2 (deuxième détection)
const int vitesse2 = 50, time2 = 2000;
// 3 (fin du tapis)
const int vitesse3 = 150, time3 = 1500;

// Déclaration des broches du RGB LED
const int redpin = 4, greenpin = 5, bluepin = 6;
bool commonAnode = true;
byte gammatable[256]; 

// Cas du capteur ultrason
int trigPin = 11;
int echoPin = 12;

// Cas de validation du traitement de déchet ou état du système
bool dechetOK = false;

void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600);

  Wire.begin();

  // Configuration et initialisation de l'écran LCD
  lcd.init(); 
  lcd.backlight();
  lcd.setCursor(0, 0);
  lcd.print("Initialisation ... ");

  // Configuration des broches
  // Diode de détection pièce
  pinMode(laserPin1, OUTPUT);
  digitalWrite(laserPin1, HIGH);

  // Diode pour détecter l'approche dans la zone du capteur
  pinMode(laserPin2, OUTPUT);
  digitalWrite(laserPin2, HIGH);

  // Configuration du moteur
  pinMode(motor_IN1, OUTPUT);
  pinMode(motor_IN2, OUTPUT);
  pinMode(motor_EN, OUTPUT);

  // Configuration des broches du RGB
  pinMode(redpin, OUTPUT);
  pinMode(greenpin, OUTPUT);
  pinMode(bluepin, OUTPUT);

  // Configuration du capteur ultrason
  pinMode(trigPin, OUTPUT);
  pinMode(echoPin, INPUT);

  // Tableau gamma pour LED RGB
  for (int i = 0; i < 256; i++) {
    float x = i / 255.0;
    x = pow(x, 2.5) * 255;

    if (commonAnode) {
      gammatable[i] = 255 - x;
    } else {
      gammatable[i] = x;
    }
    
  }

  // Initialisation ou vérification de la connexion au niveau du capteur de couleur
  if (sensor.begin()) {
    lcd.clear();
    lcd.setCursor(0, 0);
    lcd.print("Sensor en marche.");
  }
  else {
    lcd.clear();
    lcd.setCursor(0, 0);
    lcd.print("Sensor non connecté. Veuillez vérifier les connexions.");
    while (1);
  }

  lcd.setCursor(0, 0);
  lcd.print("Systeme PRET! ON");
  delay(2000);
  lcd.clear();
}


void loop() {
  // put your main code here, to run repeatedly:
  // Lecture au niveau du couple 1
  int detect = analogRead(ldrPin1);
  
  // Seuil détecté
  if (detect < seuil && !dechetOK)
  {
    lcd.setCursor(0, 0);
    lcd.print("Dechet detecte   ");

    // Boucle pour attendre que le tapis atteigne la zone du capteur de couleur et donc avance vers le capteur couleur
    while (analogRead(ldrPin2) > seuil)
    {
      // Tapis mis en marche grace à son moteur pour atteindre la zone de détection de couleur
      demarrerTapis(vitesse1, time1);
      delay(70);
    }

    // Tapis ralenti afin de faciliter la détection par le capteur de couleur et s'arrêter pour une détection
    demarrerTapis(vitesse2, time2);
    arreterTapis();

    // Détecter la couleur du dechet
    String color = detecterCouleur();

    // Affichage sur un écran LCD de la couleur du déchet
    lcd.setCursor(0, 1);
    lcd.print("Couleur: ");
    lcd.print(color);
    lcd.print("    ");

    // Fonction pour envoyer les informations de la couleur à l'ESP8266
    envoyerCouleur(color);
    delay(3000); // Temps pour la détection et l'envoi de la couleur 

    // Confirmation de déchet traité
    dechetOK = true;

    while (mesurerDistance() > 6)
    {
      // Dechet convoyé vers la fin du convoyeur
      demarrerTapis(vitesse3, 50);
      
    }

    // Arrêter le tapis
    arreterTapis();
  }

  else if (detect >= seuil && dechetOK)
  {
    dechetOK = false; // Confirmation de l'abscence de déchet
    lcd.setCursor(0, 0);
    lcd.print("Aucun dechet     ");
  }

}

// Fonctions pour la gestion des moteurs
// Celle ci permet de le mettre en marche à une vitesse donnée pendant une durée
void demarrerTapis(int vitesse, int time) 
{
  // Alimenter les bornes du moteur
  digitalWrite(motor_IN1, HIGH);
  digitalWrite(motor_IN2, LOW);

  // Réglage de la vitesse
  analogWrite(motor_EN, vitesse);

  digitalWrite(7, HIGH);

  delay(time);
}

// Celle ci pour l'arrêter
void arreterTapis() 
{
  digitalWrite(motor_IN1, LOW);
  digitalWrite(motor_IN2, LOW);
  analogWrite(motor_EN, 0);
}

// Fonction pour la détection de couleur par le capteur TCS34725
String detecterCouleur() 
{
  // 
  sensor.setInterrupt(false);
  delay(100);

  uint16_t r, g, b, c, colorTemp, lux;

  // Lecture des valeurs brutes du capteur
  sensor.getRawData(&r, &g, &b, &c);

  // 
  sensor.setInterrupt(true);

  // Calculs des paramètres
  colorTemp = sensor.calculateColorTemperature(r, g, b);
  lux = sensor.calculateLux(r, g, b);


  if (c > r && c > g && c > b && lux > 500) {
    return "AUCUNE COULEUR";
  }
  else if (r > g && r > b && r < c && lux > 10 && lux < 100) {
    afficherCouleur(r, g, b);
    return "ROUGE";
  }
  else if (g > r && g > b && g < c && lux > 200 && lux < 300) {
    afficherCouleur(r, g, b);
    return "VERT";
  }
  else if (b > r && b > g && b < c && lux > 100 && lux < 200) {
    afficherCouleur(r, g, b);
    return "BLEU";
  }
  else if (r > 600 && r < 850 && g > 450 && g < 630 && b > 300 && b < 440 && lux > 300 && lux < 420 && abs(r - g) < 250) {
    afficherCouleur(r, g, b);
    return "JAUNE";
  }
  else {
    return "AUCUNE COULEUR";
  }

}

// Affichage sur la led RGB
void afficherCouleur(uint16_t r, uint16_t g, uint16_t b) {
  // 
  analogWrite(redpin, gammatable[min(r, 255)]);
  analogWrite(greenpin, gammatable[min(g, 255)]);
  analogWrite(bluepin, gammatable[min(b, 255)]);
}

// Implémentation de la fonction utilisée pour l'envoi d'infos à l'ESP8266
void envoyerCouleur(String color) 
{
  if (color == "AUCUNE COULEUR") {}

  else if (color == "ROUGE") {
    Serial.println("3");
  }

  else if (color == "BLEU") {
    Serial.println("1");
  }

  else if (color == "VERT") {
    Serial.println("0");
  }

  else if (color == "JAUNE") {
    Serial.println("2");
  }

  else { }
}

// Fonction de mesure du capteur ultrason
float mesurerDistance() {
  
  // Mesure de la distance
  digitalWrite(trigPin, LOW);
  delayMicroseconds(2);
  digitalWrite(trigPin, HIGH);
  delayMicroseconds(10);
  digitalWrite(trigPin, LOW);
  long duration = pulseIn(echoPin, HIGH);
  delay(10);
  return duration * 0.034 / 2.0;
}

