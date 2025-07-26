#include <SoftwareSerial.h>
#include <ESP8266WiFi.h>
#include <WiFiClientSecure.h>
#include <ESP8266HTTPClient.h>

// SoftSerial: RX = D5 (GPIO14), TX = D6 (GPIO12)
SoftwareSerial softSerial(14, 12); // RX, TX

const char* ssid = "Name"; // Nom de votre wifi
const char* password = "Password"; // Mot de passe

const String firebaseHost = "https://teckbot-3d020-default-rtdb.firebaseio.com";

int compteurVert = 0;
int compteurBleu = 0;
int compteurJaune = 0;
int compteurRouge = 0;

void setup() {
  Serial.begin(9600);       // Pour debug
  softSerial.begin(9600);   // Pour recevoir de l'Arduino

  WiFi.begin(ssid, password);
  Serial.print("Connexion au WiFi...");
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println("\nWiFi connecté !");
}

void loop() {
  if (softSerial.available()) {
    String data = softSerial.readStringUntil('\n');
    data.trim();
    Serial.println("Reçu : " + data);

    if (data == "0") {
      compteurVert++;
      updateFirebase("/dechets/vert.json", String(compteurVert));
    } else if (data == "1") {
      compteurBleu++;
      updateFirebase("/dechets/bleu.json", String(compteurBleu));
    } else if (data == "2") {
      compteurJaune++;
      updateFirebase("/dechets/jaune.json", String(compteurJaune));
    } else if (data == "3") {
      compteurRouge++;
      updateFirebase("/dechets/rouge.json", String(compteurRouge));
    } else {
      Serial.println("Type inconnu : " + data);
    }
  }
}

void updateFirebase(String path, String value) {
  if (WiFi.status() == WL_CONNECTED) {
    WiFiClientSecure client;
    client.setInsecure();

    HTTPClient http;
    String url = firebaseHost + path;

    http.begin(client, url);
    http.addHeader("Content-Type", "application/json");

    int httpResponseCode = http.PUT(value);

    Serial.print("Mise à jour ");
    Serial.print(path);
    Serial.print(" ➜ ");
    Serial.println(value);

    if (httpResponseCode > 0) {
      String response = http.getString();
      Serial.println("Réponse Firebase : " + response);
    } else {
      Serial.println("Erreur HTTP : " + String(httpResponseCode));
    }

    http.end();
  } else {
    Serial.println("Non connecté au WiFi");
  }
}
