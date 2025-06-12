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
