# DOCUMENTATION TECHNIQUE DES TESTS EN ELECTRONIQUE
---

## 📚 Table des matières

- [DOCUMENTATION TECHNIQUE DES TESTS EN ELECTRONIQUE](#documentation-technique-des-tests-en-electronique)
  - [📚 Table des matières](#-table-des-matières)
  - [Test 1 : Gyroscope et accéléromètre](#test-1--gyroscope-et-accéléromètre)
    - [En quoi ce test relève d’une importance capitale](#en-quoi-ce-test-relève-dune-importance-capitale)
  - [1. Objectifs de ce test](#1-objectifs-de-ce-test)
  - [2. Comprendre les orientations : roulis, tangage et lacet](#2-comprendre-les-orientations--roulis-tangage-et-lacet)
    - [a) Le roulis (Roll)](#a-le-roulis-roll)
    - [b) Le tangage (Pitch)](#b-le-tangage-pitch)
    - [c) Le lacet (Yaw)](#c-le-lacet-yaw)
  - [3. Pourquoi ces angles sont-ils importants dans notre système ?](#3-pourquoi-ces-angles-sont-ils-importants-dans-notre-système-)
  - [Choix du matériel pour ce test](#choix-du-matériel-pour-ce-test)
    - [Microcontrôleur : ATmega328P seul](#microcontrôleur--atmega328p-seul)
      - [Composants nécessaires pour faire fonctionner l’ATmega328P](#composants-nécessaires-pour-faire-fonctionner-latmega328p)
    - [Capteur inertiel : MPU6050](#capteur-inertiel--mpu6050)
      - [Pourquoi le MPU6050 ?](#pourquoi-le-mpu6050-)
    - [Affichage : écran LCD I2C 16x2](#affichage--écran-lcd-i2c-16x2)
      - [Avantages de l’écran LCD I2C](#avantages-de-lécran-lcd-i2c)
  - [5. Architecture et principe de fonctionnement](#5-architecture-et-principe-de-fonctionnement)
    - [Acquisition des données](#acquisition-des-données)
    - [Prétraitement des données](#prétraitement-des-données)
    - [Fusion et calcul des orientations](#fusion-et-calcul-des-orientations)
    - [Détection de la direction](#détection-de-la-direction)
    - [Affichage et retour utilisateur](#affichage-et-retour-utilisateur)
  - [6. Liste du matériel](#6-liste-du-matériel)
    - [Microcontrôleur](#microcontrôleur)
    - [Alimentation](#alimentation)
    - [Oscillateur](#oscillateur)
    - [Broche Reset](#broche-reset)
    - [Connexion pour la programmation](#connexion-pour-la-programmation)
    - [Test visuel du programme](#test-visuel-du-programme)
  - [7. Réalisation du circuit](#7-réalisation-du-circuit)
    - [A. Test du microcontrôleur ATmega328P](#a-test-du-microcontrôleur-atmega328p)
    - [B. Gravure du bootloader](#b-gravure-du-bootloader)
    - [C. Conception du schéma sous KiCad](#c-conception-du-schéma-sous-kicad)
  - [8. Schéma, composants et assemblage](#8-schéma-composants-et-assemblage)
    - [LISTE ET DESCRIPTION DES COMPOSANTS](#liste-et-description-des-composants)
    - [FONCTIONNEMENT GLOBAL](#fonctionnement-global)
    - [ALIMENTATION](#alimentation-1)
    - [PROTOCOLE DE COMMUNICATION UTILISÉ](#protocole-de-communication-utilisé)
    - [D. Soudure des composants](#d-soudure-des-composants)
    - [E. Programmation et test du circuit assemblé](#e-programmation-et-test-du-circuit-assemblé)
  - [Conclusion](#conclusion)


---
---

## Test 1 : Gyroscope et accéléromètre

S’orienter dans l’espace, savoir distinguer le haut, le bas, la gauche, la droite, l’avant et l’arrière, est une compétence naturelle chez l’être humain.  
Mais comment faire pour qu’un robot ou un système automatisé reproduise cette capacité ?

C’est là qu’interviennent les capteurs inertiels : des composants électroniques capables de « sentir » les mouvements et rotations d’un objet dans l’espace.  
Nous avons choisi d’explorer cette technologie avec un capteur **MPU6050**, un module combinant :

- un **accéléromètre 3 axes**, pour détecter les accélérations (y compris la gravité),
- un **gyroscope 3 axes**, pour mesurer les vitesses de rotation autour de ces 3 axes.

Ce capteur sera placé dans la paume d’une main et connecté à un microcontrôleur **ATméga328P**.  
À chaque geste : lever la main, la baisser, la tourner, les informations seront affichées en temps réel sur un **écran LCD**.

### En quoi ce test relève d’une importance capitale

Ce test constitue une immersion concrète dans les systèmes embarqués et la robotique, où les capteurs inertiels comme ceux que l’on retrouve dans les **drones**, **smartphones** ou **robots** sont essentiels pour mesurer la position, la vitesse et la stabilité du système.  
En combinant un accéléromètre (qui mesure les accélérations linéaires) et un gyroscope (qui mesure la vitesse de rotation), on peut reconstruire en temps réel la trajectoire et l’orientation d’un objet dans l’espace : c’est ce que l’on appelle la **fusion de données**, un processus indispensable dans les applications à 3D.

Grâce à la simplicité du module **MPU6050** (interface I2C standard) et la restitution des résultats sur un écran **LCD**, ce test offre une approche pédagogique efficace :  
il permet de visualiser directement comment un geste manuel se traduit en direction détectée, sans complexité inutile.

Ce compromis entre technique, accessibilité, et interactivité en fait un excellent point de départ pour quiconque souhaite comprendre la **détection de mouvement**, l’**électronique embarquée** et l’**orientation spatiale**, avant de creuser des solutions plus complexes (filtres avancés, modèles AHRS, etc.).

---
---

##  1. Objectifs de ce test

Ce test vise à développer et valider plusieurs compétences techniques et pratiques essentielles dans le domaine des systèmes embarqués et de la détection de mouvement. Plus précisément, il s’agit de :

-  Identifier et comprendre le fonctionnement d’un capteur inertiel combiné (**MPU6050**) intégrant un accéléromètre et un gyroscope, et savoir exploiter ses données pour mesurer l’orientation et les mouvements dans l’espace.  
-  Mettre en œuvre la communication **I2C** entre le capteur et le microcontrôleur **ATmega328P**, en maîtrisant l’échange de données numériques via ce protocole standardisé.  
-  Programmer un microcontrôleur **Arduino** pour lire les données brutes du capteur, appliquer un traitement logiciel (filtrage, calibration) et calculer les angles d’orientation (**yaw, pitch, roll**).  
-  Développer une logique de détection de direction capable d’interpréter les variations d’angles et d’accélération pour déterminer les mouvements de la main dans les six directions principales (**haut, bas, gauche, droite, avant, arrière**).  
-  Assurer l’affichage en temps réel des résultats sur un écran **LCD I2C**, permettant une visualisation claire et intuitive des mouvements détectés.  
-  Comprendre l’importance de la **calibration** et du **filtrage** pour améliorer la précision et la fiabilité des mesures issues du capteur inertiel.  
-  Acquérir une démarche méthodique de **test et validation**, en vérifiant le bon fonctionnement du système dans des conditions réelles d’utilisation.


<p align="center">
  <img src="./images/7.jpg" alt="Schéma" width="500">
</p>


---

##  2. Comprendre les orientations : roulis, tangage et lacet

Pour décrire précisément comment un objet (comme ta main équipée du capteur MPU6050) s’oriente et se déplace dans l’espace, on utilise trois angles fondamentaux appelés **roulis (roll)**, **tangage (pitch)** et **lacet (yaw)**.  
Ces trois mouvements correspondent à des rotations autour de trois axes perpendiculaires, et permettent de définir la position et l’orientation d’un objet dans un espace à trois dimensions.


###  a) Le roulis (Roll)

C’est la rotation autour de l’axe longitudinal, c’est-à-dire un mouvement d’inclinaison latérale, comme si ta main penchait vers la droite ou la gauche.

**Démonstration pratique :**  
Imagine que tu tiens ta main devant toi et que tu la fais basculer sur le côté, comme si tu voulais verser un verre d’eau. Ce mouvement est un roulis.

**Importance dans notre système :**  
Le roulis permet de détecter si la main s’incline sur la gauche ou la droite, ce qui est essentiel pour comprendre les mouvements latéraux.

<p align="center">
  <img src="./images/4.png" alt="Schéma" width="500">
</p>


###  b) Le tangage (Pitch)

C’est la rotation autour de l’axe transversal, correspondant à un mouvement de bascule avant-arrière.

**Démonstration pratique :**  
Imagine que tu fais un signe de tête pour dire « oui », en penchant ta main vers l’avant ou l’arrière. Ce mouvement est un tangage.

**Importance dans notre système :**  
Le tangage permet de détecter si la main se penche vers l’avant ou vers l’arrière, ce qui correspond aux mouvements de translation avant/arrière.

<p align="center">
  <img src="./images/5.png" alt="Schéma" width="500">
</p>


###  c) Le lacet (Yaw)

C’est la rotation autour de l’axe vertical, c’est-à-dire un mouvement de rotation horizontale, comme si ta main tournait sur elle-même à plat.

**Démonstration pratique :**  
Imagine que tu tournes ta main vers la gauche ou la droite sans la pencher, juste en la faisant pivoter sur elle-même. Ce mouvement est un lacet.

**Importance dans notre système :**  
Le lacet permet de détecter les rotations horizontales, ce qui est crucial pour comprendre les mouvements de rotation autour de l’axe vertical.

<p align="center">
  <img src="./images/6.png" alt="Schéma" width="500">
</p>


---

##  3. Pourquoi ces angles sont-ils importants dans notre système ?

Le **MPU6050** mesure ces trois rotations grâce à son **gyroscope**, et les angles correspondants (**roll, pitch, yaw**) sont calculés pour déterminer précisément l’orientation de la main dans l’espace.  
En combinant ces données avec celles de l’**accéléromètre** (qui mesure les accélérations linéaires), le système peut détecter non seulement la **position**, mais aussi le **mouvement** et la **direction** de la main.

Cette compréhension des trois axes de rotation est essentielle pour :

- Interpréter correctement les gestes (**lever**, **baisser**, **tourner la main**).
- Détecter les directions de mouvement (**haut**, **bas**, **gauche**, **droite**, **avant**, **arrière**).
- Améliorer la précision des mesures en **filtrant** et **fusionnant** les données des capteurs.

---

## Choix du matériel pour ce test

Pour réaliser ce projet de détection d’orientation et de mouvement, le choix du matériel est crucial afin d’assurer un fonctionnement fiable, précis et adapté à une intégration finale. Nous avons opté pour des composants permettant à la fois simplicité, compacité et performance.

### Microcontrôleur : ATmega328P seul

<p align="center">
  <img src="https://th.bing.com/th/id/OIP.VML3Sd1b9wHLA4DsfzLHJAHaFL?r=0&rs=1&pid=ImgDetMain" alt="Schéma" width="500">
</p>
<p align="center">
  <img src="https://www.sigmaelectronica.net/wp-content/uploads/2015/06/ATMEGA328.jpg" alt="Schéma" width="500">
</p>

Plutôt que d’utiliser une carte Arduino Uno complète, nous avons choisi d’employer le microcontrôleur ATmega328P en version « puce seule ». Cette approche présente plusieurs avantages :

- *Miniaturisation* : Le microcontrôleur seul occupe beaucoup moins de place, facilitant l’intégration dans un boîtier ou un montage personnalisé.
- *Coût réduit* : Le prix du microcontrôleur nu est nettement inférieur à celui d’une carte Arduino complète.
- *Personnalisation du circuit* : Cela permet de sélectionner précisément les composants périphériques nécessaires (oscillateur, alimentation, reset) et d’optimiser le montage.
- *Approche pédagogique* : Cette méthode offre une meilleure compréhension du fonctionnement matériel d’un système embarqué en réalisant soi-même le circuit minimal.

#### Composants nécessaires pour faire fonctionner l’ATmega328P

- Cristal oscillateur 16 MHz avec condensateurs pour fournir une horloge stable.
- Résistance pull-up sur la broche RESET pour éviter les réinitialisations intempestives.
- Alimentation 5 V régulée avec condensateurs de découplage.
- Convertisseur USB-série externe (comme un module FTDI) pour programmer le microcontrôleur via USB.
- Câblage soigné pour relier le microcontrôleur aux capteurs et à l’écran.

### Capteur inertiel : MPU6050

Le choix du capteur s’est porté sur le module MPU6050, qui combine un accéléromètre 3 axes et un gyroscope 3 axes dans un seul composant.

<p align="center">
  <img src="https://th.bing.com/th/id/OIP.DTgBipgvFa7rrY_VBkpqBgHaGI?w=221&h=183&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" alt="Schéma" width="500">
</p>

#### Pourquoi le MPU6050 ?

- *Mesure complète du mouvement* : Il fournit à la fois les accélérations linéaires et les vitesses angulaires, indispensables pour déterminer l’orientation dans l’espace.
- *Interface I2C* : La communication via un bus I2C standard simplifie le câblage et permet de connecter plusieurs périphériques sur les mêmes lignes SDA et SCL.
- *Intégration du DMP* : Le MPU6050 intègre un processeur de mouvement numérique (DMP) qui réalise la fusion des données pour fournir des angles d’orientation stables.
- *Compatibilité avec ATmega328P* : Fonctionne sous une alimentation de 3,3 V à 5 V, compatible avec le microcontrôleur utilisé.

> *NB : Particularités à prendre en compte*
>
> - Le module MPU6050 fonctionne généralement sous 3,3 V, mais la plupart des modules GY-521 intègrent un régulateur 3,3 V et des résistances pull-up compatibles 5 V, ce qui facilite l’utilisation avec un ATmega328P alimenté en 5 V.
> - Il faut veiller à connecter SDA (données) et SCL (horloge) aux broches A4 et A5 du microcontrôleur.
> - L’adresse I2C par défaut est 0x68, modifiable en connectant la broche AD0 à 3,3 V (adresse 0x69).

### Affichage : écran LCD I2C 16x2

Pour visualiser les résultats en temps réel, un écran LCD 16 colonnes x 2 lignes avec interface I2C a été choisi.

<p align="center">
  <img src="https://th.bing.com/th/id/OIP.pTanwRr2lLg5OuN96tVoOwAAAA?w=208&h=168&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" alt="Schéma" width="500">
</p>


#### Avantages de l’écran LCD I2C

- *Câblage simplifié* : Utilise seulement 4 fils (VCC, GND, SDA, SCL) pour la communication et l’alimentation.
- *Compatibilité I2C* : Partage le bus I2C avec le MPU6050, réduisant le nombre de connexions nécessaires.
- *Affichage clair et lisible* : Permet de visualiser directement la direction détectée sans matériel supplémentaire.

---

## 5. Architecture et principe de fonctionnement

Ce système utilise le capteur **MPU6050** pour détecter comment un objet (comme une main) bouge et s’oriente dans l’espace.  
Voici comment fonctionnera le système de notre test :


###  Acquisition des données

Le **MPU6050** contient deux capteurs importants :

- **Accéléromètre 3 axes** : il mesure les accélérations sur trois directions (**avant/arrière**, **gauche/droite**, **haut/bas**). Cela permet de savoir si la main accélère ou change d’inclinaison.
- **Gyroscope 3 axes** : il mesure la vitesse à laquelle la main tourne autour de ces trois axes.

Ces deux capteurs travaillent ensemble pour donner une image complète du mouvement.


###  Prétraitement des données

Les mesures brutes du capteur peuvent contenir du **bruit** (petites erreurs ou fluctuations). Pour améliorer la qualité :

- On applique un **filtre passe-bas** qui lisse les données de l’accéléromètre, en gardant les tendances importantes et en supprimant les petites perturbations.
- Le capteur utilise aussi une fonction appelée **DMP** (*Digital Motion Processor*) qui prépare les données et envoie une alerte (**interruption**) quand elles sont prêtes à être lues.  
  Cela permet au microcontrôleur de récupérer les données au bon moment, **sans perte d’information**.


###  Fusion et calcul des orientations

Le **DMP** du MPU6050 combine les données de l’accéléromètre et du gyroscope pour **calculer la position exacte** de la main dans l’espace.  
Il utilise une méthode mathématique appelée **quaternion** pour représenter l’orientation **sans ambiguïté**.

À partir de ces quaternions, on calcule trois angles simples à comprendre :

- **Roll (roulis)** : inclinaison gauche-droite.
- **Pitch (tangage)** : inclinaison avant-arrière.
- **Yaw (lacet)** : rotation sur place à gauche ou à droite.

Le système **corrige aussi l’accélération mesurée** pour enlever l’effet de la gravité, afin de détecter **uniquement les mouvements réels**.


###  Détection de la direction

Pour savoir dans **quelle direction la main se déplace**, le système :

- Surveille l’**accélération sur l’axe Z** pour détecter un mouvement vers le **haut** ou le **bas**.
- Analyse les variations des angles **roll**, **pitch** et **yaw** pour détecter les mouvements **avant/arrière**, **gauche/droite** et les **rotations**.
- Si **aucun mouvement significatif** n’est détecté, l’état est considéré comme étant **stable**.


###  Affichage et retour utilisateur

- La **direction détectée** est affichée en **temps réel** sur un écran **LCD I2C 16×2**, facile à lire et à comprendre.
- Les données peuvent aussi être envoyées sur un **moniteur série** (ordinateur) pour suivre les mesures, **calibrer le système** et améliorer la précision.

## 6. Liste du matériel

| Composants               | Spécifications principales                              | Rôle dans le test                                                              |
|--------------------------|----------------------------------------------------------|---------------------------------------------------------------------------------|
| **ATmega328P**           | Horloge 16 MHz, 32 kB Flash                              | Microcontrôleur principal, traitement des données et contrôle du système       |
| **MPU6050 (GY-521)**     | Interface I2C, DMP intégré, alimentation 3 V–5 V         | Capteur inertiel combinant accéléromètre et gyroscope MEMS                     |
| **Écran LCD 16×2 I²C**   | Adresse I2C 0x27 ou 0x3F                                  | Interface utilisateur pour affichage en temps réel des directions détectées     |
| **Module FTDI**          | Interface USB-TTL, 6 broches                              | Programmation du microcontrôleur et communication série pour debug             |
| **Veroboard ou PCB**     | 24×16 bandes, format Eurorack                             | Support mécanique pour montage et soudure des composants                        |
| **Fer à souder + étain** | Pointe fine 0,4 mm                                        | Assemblage des composants électroniques par soudure                            |
| **Multimètre**           | Mesure de continuité, tension, résistance                | Vérification des connexions et tests électriques                               |
| **Breadboard + Dupont**  | Montage sans soudure, prototypage rapide                 | Réalisation de prototypes et tests avant soudure définitive                    |


###  Microcontrôleur

- **ATmega328P – PU** (version en boîtier DIP28)


###  Alimentation

- **Régulateur 5V** (ex : AMS1117 ou module 7805)

  - **Régulateur AMS1117**  
  - **Régulateur 7805**

- **Source** : 7 à 12V  
- **Condensateurs de filtrage** :
  - 1 × 10 μF électrolytique (entre VCC et GND pour l’alimentation générale)
  - 2 × 100 nF céramique (entre VCC et GND, et AVCC et GND pour le découplage)


###  Oscillateur

- **Quartz 16 MHz**  
- 2 **condensateurs** de 22 pF


###  Broche Reset

- Résistance **10 kΩ** (entre RESET et +5V en pull-up)  
- **Bouton poussoir** pour forcer le RESET à GND


###  Connexion pour la programmation

- Une **carte Arduino UNO**  
- Un **convertisseur USB-TTL**


###  Test visuel du programme

- Une **LED** (pour le clignotement du test Blynk)  
- Une **résistance 220Ω – 330Ω** (en série avec la LED pour sa protection)

---

## 7. Réalisation du circuit

### A. Test du microcontrôleur ATmega328P

Avant d’intégrer l’**ATmega328P** à ton circuit définitif, il est conseillé de le tester sur une **breadboard** (plaque d’essai).

- **Montage minimal** :  
  Place le microcontrôleur sur la breadboard avec :
  - une alimentation **5 V**
  - un **cristal 16 MHz**
  - **deux condensateurs de 22 pF**
  - une **résistance de 10 kΩ** entre RESET et Vcc  
  Relie aussi les broches d’alimentation (**Vcc, GND, AVcc**).

- **Test de fonctionnement** :  
  Téléverse un code simple (ex. `blink LED`) pour vérifier que la puce fonctionne correctement.


### B. Gravure du bootloader

Le **bootloader** permet à l’ATmega328P d’être programmé comme un **Arduino classique**. Si tu utilises une puce neuve, il faut graver ce bootloader :

- Utilise une **carte Arduino** comme programmateur ou un **programmateur externe**.
- **Branchements** : Connecte les broches **MOSI**, **MISO**, **SCK**, **RESET**, **Vcc** et **GND** de l’Arduino à celles de l’ATmega328P.
- **Gravure** :
  - Dans l’**IDE Arduino**, sélectionne :  
    `Arduino as ISP`, puis `Burn Bootloader`.
  - Choisis le bon modèle selon ton montage :
    - `ATmega328 on a breadboard (8 MHz internal clock)` si tu utilises l’**oscillateur interne**
    - ou `Arduino Uno` si tu utilises un **cristal 16 MHz**


### C. Conception du schéma sous KiCad

Ce circuit a pour but de **mesurer les mouvements** à l’aide du capteur **MPU-6050** (accéléromètre et gyroscope).

- Ces mesures sont **traitées et formatées** par le **microcontrôleur ATmega328P**.
- Elles sont ensuite **affichées sur un écran LCD**.
- Tous les composants **communiquent via le protocole I2C**, ce qui permet une **réduction du nombre de connexions nécessaires**.

<p align="center">
  <img src="./images/3.png" alt="Schéma" width="500">
</p>

---

## 8. Schéma, composants et assemblage

Le schéma a été réalisé dans **KiCad**. 
Les composants ont été choisis depuis la **librairie KiCad officielle**.  
Les connexions sont nommées de façon explicite pour **faciliter la lecture**.


###  LISTE ET DESCRIPTION DES COMPOSANTS

- **ATmega328P**  
  C’est un microcontrôleur 8 bits (même que celui de l’Arduino Uno).  
  Il est utilisé ici pour l’acquisition, le traitement et la transmission de données.  
  Il fonctionne avec un quartz externe pour une meilleure précision d’horloge.

- **MPU-6050**  
  C’est un capteur inertiel 6 axes (accéléromètre, gyroscope) communiquant en I2C.  
  Il donne des mesures d’accélérations, de vitesse angulaire et de température.

- **LCD I2C**  
  Il s’agit d’un écran alphanumérique (2 lignes x 16 caractères).  
  Il est interfacé via un module I2C et affiche les valeurs acquises par le MPU-6050 pour surveillance en temps réel.

- **Quartz, condensateurs et résistance**  
  Le quartz génère l’horloge du microcontrôleur.  
  Les condensateurs C1 et C2 sont typiquement de **22 pF**, et la résistance de **1 kΩ**.

- **Bouton poussoir**  
  Il permet de **réinitialiser manuellement** le microcontrôleur.


###  FONCTIONNEMENT GLOBAL

À la mise sous tension :

- Le microcontrôleur **initialise** le capteur MPU-6050 via le **module I2C**.
- Il lit en boucle les **valeurs d’accélérations** et de **rotation**.
- Les données sont **traitées et converties** dans un format lisible.
- Les résultats sont envoyés à l’**écran LCD I2C** pour affichage.


###  ALIMENTATION

- Tous les composants sont alimentés en **+5V (VCC)**.
- Le MPU-6050 possède une broche **VLOGIC** pour s’adapter aux logiques de 3.3V ou 5V.
- Il peut être alimenté :
  - par un **adaptateur**
  - ou par une **batterie**

<p align="center">
  <img src="./images/8.jpg" alt="Schéma" width="500">
</p>


###  PROTOCOLE DE COMMUNICATION UTILISÉ

Les capteurs d’accélération et de déplacement doivent transmettre des données précises et lisibles.  
Les broches analogiques de communication I2C assurent cela :

- **SDA** : reçoit, traite et transmet les données des capteurs vers l’écran LCD.
- **SCL** : génère un signal d’horloge pour synchroniser l’envoi et la réception des données numériques.


###  D. Soudure des composants

- **Préparation** :
  - Préchauffer le fer à souder (300–350 °C)
  - Nettoyer la panne
  - Préparer les composants et le veroboard

- **Soudure des composants traversants (THT)** :
  - Placer chaque composant
  - Souder une patte, ajuster, puis souder les autres
  - Couper l’excédent

- **Soudure des composants SMD (si applicable)** :
  - Utiliser de la pâte à souder et du flux
  - Fixer un coin, puis souder les autres broches  
    *(drag soldering ou point par point)*

> **NB** :  
> Utiliser du fil à souder fin (0,38 mm recommandé),  
> éviter les ponts de soudure,  
> vérifier que chaque joint soit **brillant et conique**,  
> inspecter visuellement et corriger les défauts éventuels.


###  E. Programmation et test du circuit assemblé

- **Connexion du convertisseur USB-série** :  
  Brancher le module FTDI (ou équivalent) aux broches **RX**, **TX**, **Vcc**, **GND**  
  (et **DTR/RESET** si présent) de l’ATmega328P.

- **Téléversement du code** :  
  Utiliser l’**IDE Arduino** pour charger un programme de test (ex. `blink` ou lecture capteur).

- **Test fonctionnel** :  
  Vérifier le bon fonctionnement :
  - du **microcontrôleur**
  - de la **communication I2C** (MPU6050 + LCD)
  - de **l’alimentation**

---
---

##  Conclusion

Ce projet de détection d’orientation et de mouvement à l’aide du capteur **MPU6050** et du microcontrôleur **ATmega328P** constitue une introduction concrète aux **systèmes embarqués intelligents**. Il montre comment des données brutes issues de capteurs peuvent être filtrées, fusionnées, interprétées, puis affichées en temps réel pour donner un retour visuel clair à l’utilisateur.

Grâce à une architecture simple et accessible (protocole I2C, LCD I2C, filtrage logiciel, détection de gestes), ce projet démontre les bases essentielles pour comprendre :

- la communication capteur-microcontrôleur,
- le traitement des signaux inertiels,
- la visualisation de données embarquées.

Il peut servir de **base pédagogique** pour les débutants, mais également de **point de départ** pour des systèmes plus avancés comme les interfaces gestuelles, les dispositifs portables, les robots autonomes ou les systèmes d’assistance.

Enfin, cette réalisation met en avant l'importance d'une **documentation rigoureuse**, d'une **approche expérimentale** structurée et d'une **maîtrise progressive** des outils matériels et logiciels du monde embarqué.
