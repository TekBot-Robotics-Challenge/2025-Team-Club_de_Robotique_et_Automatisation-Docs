##  1. Objectifs de ce test

Ce test vise à développer et valider plusieurs compétences techniques et pratiques essentielles dans le domaine des systèmes embarqués et de la détection de mouvement. Plus précisément, il s’agit de :

-  Identifier et comprendre le fonctionnement d’un capteur inertiel combiné (**MPU6050**) intégrant un accéléromètre et un gyroscope, et savoir exploiter ses données pour mesurer l’orientation et les mouvements dans l’espace.  
-  Mettre en œuvre la communication **I2C** entre le capteur et le microcontrôleur **ATmega328P**, en maîtrisant l’échange de données numériques via ce protocole standardisé.  
-  Programmer un microcontrôleur **Arduino** pour lire les données brutes du capteur, appliquer un traitement logiciel (filtrage, calibration) et calculer les angles d’orientation (**yaw, pitch, roll**).  
-  Développer une logique de détection de direction capable d’interpréter les variations d’angles et d’accélération pour déterminer les mouvements de la main dans les six directions principales (**haut, bas, gauche, droite, avant, arrière**).  
-  Assurer l’affichage en temps réel des résultats sur un écran **LCD I2C**, permettant une visualisation claire et intuitive des mouvements détectés.  
-  Comprendre l’importance de la **calibration** et du **filtrage** pour améliorer la précision et la fiabilité des mesures issues du capteur inertiel.  
-  Acquérir une démarche méthodique de **test et validation**, en vérifiant le bon fonctionnement du système dans des conditions réelles d’utilisation.

---

##  2. Comprendre les orientations : roulis, tangage et lacet

Pour décrire précisément comment un objet (comme ta main équipée du capteur MPU6050) s’oriente et se déplace dans l’espace, on utilise trois angles fondamentaux appelés **roulis (roll)**, **tangage (pitch)** et **lacet (yaw)**.  
Ces trois mouvements correspondent à des rotations autour de trois axes perpendiculaires, et permettent de définir la position et l’orientation d’un objet dans un espace à trois dimensions.

---

###  a) Le roulis (Roll)

C’est la rotation autour de l’axe longitudinal, c’est-à-dire un mouvement d’inclinaison latérale, comme si ta main penchait vers la droite ou la gauche.

**Démonstration pratique :**  
Imagine que tu tiens ta main devant toi et que tu la fais basculer sur le côté, comme si tu voulais verser un verre d’eau. Ce mouvement est un roulis.

**Importance dans notre système :**  
Le roulis permet de détecter si la main s’incline sur la gauche ou la droite, ce qui est essentiel pour comprendre les mouvements latéraux.

---

###  b) Le tangage (Pitch)

C’est la rotation autour de l’axe transversal, correspondant à un mouvement de bascule avant-arrière.

**Démonstration pratique :**  
Imagine que tu fais un signe de tête pour dire « oui », en penchant ta main vers l’avant ou l’arrière. Ce mouvement est un tangage.

**Importance dans notre système :**  
Le tangage permet de détecter si la main se penche vers l’avant ou vers l’arrière, ce qui correspond aux mouvements de translation avant/arrière.

---

###  c) Le lacet (Yaw)

C’est la rotation autour de l’axe vertical, c’est-à-dire un mouvement de rotation horizontale, comme si ta main tournait sur elle-même à plat.

**Démonstration pratique :**  
Imagine que tu tournes ta main vers la gauche ou la droite sans la pencher, juste en la faisant pivoter sur elle-même. Ce mouvement est un lacet.

**Importance dans notre système :**  
Le lacet permet de détecter les rotations horizontales, ce qui est crucial pour comprendre les mouvements de rotation autour de l’axe vertical.

---

##  3. Pourquoi ces angles sont-ils importants dans notre système ?

Le **MPU6050** mesure ces trois rotations grâce à son **gyroscope**, et les angles correspondants (**roll, pitch, yaw**) sont calculés pour déterminer précisément l’orientation de la main dans l’espace.  
En combinant ces données avec celles de l’**accéléromètre** (qui mesure les accélérations linéaires), le système peut détecter non seulement la **position**, mais aussi le **mouvement** et la **direction** de la main.

Cette compréhension des trois axes de rotation est essentielle pour :

- Interpréter correctement les gestes (**lever**, **baisser**, **tourner la main**).
- Détecter les directions de mouvement (**haut**, **bas**, **gauche**, **droite**, **avant**, **arrière**).
- Améliorer la précision des mesures en **filtrant** et **fusionnant** les données des capteurs.

## Choix du matériel pour ce test

Pour réaliser ce projet de détection d’orientation et de mouvement, le choix du matériel est crucial afin d’assurer un fonctionnement fiable, précis et adapté à une intégration finale. Nous avons opté pour des composants permettant à la fois simplicité, compacité et performance.

### Microcontrôleur : ATmega328P seul

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

#### Avantages de l’écran LCD I2C

- *Câblage simplifié* : Utilise seulement 4 fils (VCC, GND, SDA, SCL) pour la communication et l’alimentation.
- *Compatibilité I2C* : Partage le bus I2C avec le MPU6050, réduisant le nombre de connexions nécessaires.
- *Affichage clair et lisible* : Permet de visualiser directement la direction détectée sans matériel supplémentaire.

---
