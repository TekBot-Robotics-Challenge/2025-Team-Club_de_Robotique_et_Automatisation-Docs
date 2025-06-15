  # INTRODUCTION GENERALE

Dans le cadre de notre participation au concours national TRC25, partie mécanique, notre groupe a été mobilisé pour relever un défi technique centré sur les compétences fondamentales en Conception Assistée par Ordinateur (CAO) à l’aide du logiciel SolidWorks. Cette épreuve, de niveau débutant, visait à évaluer à la fois notre rigueur dans la modélisation 3D de pièces mécaniques simples et notre capacité à réaliser un assemblage fonctionnel répondant à des exigences précises en termes de géométrie, de matériaux et de comportement mécanique.
Le test s’est articulé en deux volets complémentaires. La première partie portait sur la modélisation de pièces mécaniques unitaires, à partir de croquis 2D, en tenant compte de paramètres techniques stricts (dimensions normalisées, matériaux imposés, densité connue). L’objectif principal était d’atteindre une masse de pièce calculée dans une tolérance de ±5 %, ce qui implique une maîtrise fine des outils de création de volumes, d’esquisses contraintes et de gestion des propriétés physiques dans SolidWorks.
La seconde partie de l’épreuve nous a confrontés à la reconstruction complète d’un assemblage mécanique – une pince – à partir d’un jeu de pièces fourni. Ce travail nous a permis de démontrer nos aptitudes en assemblage paramétrique, en particulier à travers l’application des contraintes de positionnement (coïncidence, parallélisme, symétrie), et l’exploitation du référentiel absolu. Le calcul des coordonnées du centre de masse, en fonction des positions extrêmes du mécanisme, a servi d’indicateur de précision et de justesse de l’assemblage final.
Au-delà de l’aspect technique, ce projet a renforcé notre esprit d’équipe, notre capacité à collaborer efficacement en répartissant les tâches de manière optimale, et notre aptitude à produire une documentation rigoureuse, claire et structurée. Ce rapport retrace l’ensemble de notre démarche, les outils utilisés, les résultats obtenus et les enseignements que nous avons tirés de cette expérience dans le cadre du TRC25.


# I. PREMIÈRE PIÈCE

## 1. Présentation générale de la pièce 1

- **Nom de la pièce** : Pièce 1  
- **Date de création** : 07/06/2025  
- **Échelle** : 1:1  

## 2. Caractéristiques techniques de la pièce 1

- **Système d’unité** : MMGS (millimètre, gramme, seconde)  
- **Précision décimale** : 2 (toutes les dimensions doivent être exprimées avec deux chiffres après la virgule)  
- **Tolérance** : ± 5% (marge d’erreur)  
- **Matériau et densité** : acier AISI 1020 ; **Densité** : 0,0079 g/mm³  
- **Remarque générale** : Tous les trous sont débouchants sauf indication contraire.
## 3. Représentation graphique de la pièce 1
<p align="center">
  <img src="./Images/150.png" alt="Image 1" width="600">
</p> 

## 4. Processus de réalisation de la pièce 1
Avant de commencer la conception de la **pièce 1**, nous allions d’abord faire une étude préliminaire afin de la réaliser en moins de temps et en utilisant moins de fonctions.  
Avant de vous présenter notre gamme de réalisation, nous allions d’abord vous présenter le logiciel que nous voulions utiliser pour bien réaliser cette pièce.  
En effet, nous aurons à manipuler **SolidWorks**, un logiciel de conception assistée par ordinateur (CAO) en 3D, utilisé pour modéliser des pièces et des assemblages mécaniques. Son interface se présente comme suit :
<p align="center">
  <img src="./Images/1.png" alt="Image 1" width="600">
</p> 

## 5. Réalisation de la pièce 1


### 1ère Étape : Configuration des paramètres initiaux du dessin (système d’unité et matériau)

#### Configuration du système d’unité

- Regarder tout en bas à droite de l’interface de **SOLIDWORKS**.  
- Une zone affiche : **MMGS**, **IPS**, ou autre.  
- Cliquer dessus → un petit menu apparaît → choisir **MMGS**.  

Ainsi, la configuration du système d’unité est faite.
<p align="center">
  <img src="./Images/2.png" alt="Image 1" width="600">
</p> 
<p align="center">
  <img src="./Images/3.png" alt="Image 1" width="600">
</p> 


#### Mettre le matériau sur acier AISI 1020

- Se diriger vers la pièce dans l’arbre de création situé à gauche de l’interface.  
- Faire un clic droit sur la pièce, puis sélectionner **Matériau**.  
- Cliquer sur **Éditer le matériau**.  
- Dans la fenêtre qui s’ouvre, parcourir la liste des matériaux prédéfinis.  
- Cliquer sur la flèche à côté de **Acier** pour dérouler la catégorie.  
- Sélectionner **AISI 1020**.  
- Cliquer sur **Appliquer**, puis sur **Fermer** pour valider le choix.  

Ainsi, la configuration du matériau est faite.

<p align="center">
  <img src="./Images/4.png" alt="Image 1" width="600">
</p> 
<p align="center">
  <img src="./Images/5.png" alt="Image 1" width="600">
</p> 
<p align="center">
<p align="center">
  <img src="./Images/7.png" alt="Image 1" width="600">
</p> 

### 2ème Étape : Réaliser l’extrusion
#### Réalisation de l’esquisse à extruder

- Dans l’arbre de création à gauche, on voit les trois plans standards :  
  - Plan de face  
  - Plan de dessus  
  - Plan de droite  
- Cliquer sur **Plan de face** pour le sélectionner.  
- Cliquer sur l’icône **Esquisse** dans la barre d’outils (ou clic droit > **Esquisse**).  
- Le plan bascule automatiquement en vue normale (si ce n’est pas le cas, appuyer sur **Ctrl + 8**).  
<p align="center">
  <img src="./Images/9.png" alt="Image 1" width="600">
</p>
#### Tracer les cercles

- Sélectionner l’outil cercle (dans la barre d’outils d’esquisse, cliquer sur l’icône cercle).  
- Tracer le premier cercle :  
  - Cliquer une première fois pour définir le centre du cercle (cliquer sur l’origine du repère).  
  - Déplacer la souris et cliquer une deuxième fois pour définir le périmètre du cercle.  
- Définir la dimension :  
  - Cliquer sur l’outil cote intelligente (icône en forme de cote).  
  - Cliquer sur le cercle pour sélectionner son diamètre.  
  - Saisir la valeur **100 mm** et valider.
    <p align="center">
  <img src="./Images/10.png" alt="Image 1" width="600">
</p>
<p align="center">
  <img src="./Images/11.png" alt="Image 1" width="600">
</p>
<p align="center">
  <img src="./Images/12.png" alt="Image 1" width="600">
</p>
<p align="center">
  <img src="./Images/13.png" alt="Image 1" width="600">
</p>
<p align="center">
  <img src="./Images/14.png" alt="Image 1" width="600">
</p>
<p align="center">
  <img src="./Images/15.png" alt="Image 1" width="600">
</p>
 <p align="center">
  <img src="./Images/16.png" alt="Image 1" width="600">
</p>
- Tracer un deuxième cercle de diamètre **50 mm**, distant du premier de **150 mm** (coter la distance entre les centres des deux cercles avec la fonction cotation).  

- Tracer deux cercles concentriques à chacun des cercles tracés auparavant :  
  - Un cercle de diamètre **150 mm** concentrique au cercle de 100 mm.  
  - Un cercle de diamètre **80 mm** concentrique au cercle de 50 mm.
   
<p align="center">
  <img src="./Images/17.png" alt="Image 1" width="600">
</p>
<p align="center">
  <img src="./Images/18.png" alt="Image 1" width="600">
</p>
<p align="center">
  <img src="./Images/19.png" alt="Image 1" width="600">
</p>
<p align="center">
  <img src="./Images/20.png" alt="Image 1" width="600">
</p>
### 3ème Étape : Raccordement des cercles par un arc de 3 points

- Dans la barre d’outils, cliquer sur **Esquisse > Arc > Arc de 3 points**.  
- Cliquer une première fois pour placer le point de départ de l’arc.  
- Cliquer une deuxième fois pour le point d’arrivée.  
- Déplacer la souris et cliquer une troisième fois pour définir la courbure de l’arc.  
- Coter l’arc avec un rayon de **75 mm**.  

#### Rendre tangent l’arc aux cercles

- Maintenir la touche **Ctrl**.  
- Cliquer sur le cercle puis sur l’arc.  
- Dans le menu à gauche, choisir **Tangente**, puis cliquer sur **OK**.

<p align="center">
  <img src="./Images/23.png" alt="Image 1" width="600">
</p>
<p align="center">
  <img src="./Images/24.png" alt="Image 1" width="600">
</p>
<p align="center">
  <img src="./Images/25.png" alt="Image 1" width="600">
</p>

### Correction de l’erreur de désalignement

- Cliquer sur le premier cercle (son centre).  
- Maintenir **Ctrl** et cliquer sur le second cercle (centre aussi).  
- Une boîte **Ajouter une relation** apparaît à gauche ou en haut.  
- Choisir **Horizontal**, puis cliquer sur **OK**.
<p align="center">
  <img src="./Images/26.png" alt="Image 1" width="600">
</p>
<p align="center">
  <img src="./Images/27.png" alt="Image 1" width="600">
</p>
<p align="center">
  <img src="./Images/28.png" alt="Image 1" width="600">
</p>

### Symétrie du premier arc

- Dans la barre d’outils, cliquer sur **Esquisse > Ligne > Ligne de construction**.  
- Tracer deux lignes de construction formant un repère se joignant au centre du repère.  
- Prendre la fonction **Symétrie** dans la barre d’outils.  
- Dans **Entité à symétriser**, sélectionner l’arc créé.  
- Dans **Symétrie par rapport à**, cliquer sur la ligne de construction suivant l’axe X.

<p align="center">
  <img src="./Images/29.png" alt="Image 1" width="600">
</p>
<p align="center">
  <img src="./Images/30.png" alt="Image 1" width="600">
</p>
<p align="center">
  <img src="./Images/31.png" alt="Image 1" width="600">
</p>
<p align="center">
  <img src="./Images/32.png" alt="Image 1" width="600">
</p>


### Ouverture sur les deux petits cercles

- Utiliser les fonctions **Ligne**, **Décalage** et **Ajuster** dans l’esquisse pour délimiter l’ouverture.

#### Décalage

- Prendre la fonction **Décalage**.  
- Décaler de **10 mm** de façon bidirectionnelle (des deux côtés simultanément).
<p align="center">
  <img src="./Images/33.png" alt="Image 1" width="600">
</p>
#### Ajustement
<p align="center">
  <img src="./Images/36.png" alt="Image 1" width="600">
</p>
<p align="center">
  <img src="./Images/37.png" alt="Image 1" width="600">
</p>

- Utiliser la fonction **Ajuster** (fonctionnant comme une gomme) pour supprimer les débordements et obtenir l’ouverture souhaitée.



### Symétrie de la partie gauche

- Procéder à la symétrie de la partie située du côté gauche des deux grands cercles concentriques (utiliser la fonction **Symétrie** dans l’esquisse).

 <p align="center">
  <img src="./Images/39.png" alt="Image 1" width="600">
</p>

### Ajustement final de l’arc du grand cercle

- Ajuster l’arc du grand cercle se trouvant entre les deux arcs de raccordement pour pouvoir réaliser l’extrusion en une seule fonction, sans séparer l’esquisse.

</p>
<p align="center">
  <img src="./Images/40.png" alt="Image 1" width="600">
</p>
 

### Extrusion de l’esquisse

- Cliquer sur la fonction **Extrusion** dans la barre d’outils.  
- Mettre la hauteur d’extrusion à **20 mm** (modifier la valeur par défaut de 10 mm).  
- Valider pour obtenir la pièce extrudée.
</p>
<p align="center">
  <img src="./Images/41.png" alt="Image 1" width="600">
</p>

</p>
<p align="center">
  <img src="./Images/42.png" alt="Image 1" width="600">
</p>
### 4ème Étape : Enlèvement de matière

- Sélectionner la face en bleu comme plan (clic droit dessus, puis choisir l’icône correspondante).  
- Dessiner un cercle sur cette face, concentrique aux grands cercles.  
- Coter ce cercle avec un diamètre de **135,6 mm**.  
- Appliquer la fonction **Enlèvement de matière** sur une profondeur de **10 mm**.  
- Valider.

<p align="center">
  <img src="./Images/44.png" alt="Image 1" width="600">
</p>
<p align="center">
  <img src="./Images/45.png" alt="Image 1" width="600">
</p>

<p align="center">
  <img src="./Images/46.png" alt="Image 1" width="600">
</p>
<p align="center">
  <img src="./Images/47.png" alt="Image 1" width="600">
</p>



### 5ème Étape : Évaluation de la masse

- Aller dans la fonction **Évaluer** dans la barre d’outils.  
- Cliquer sur **Propriétés de masse**.  
- La masse obtenue pour la pièce 1 est **2850.16g**.

## II. DEUXIÈME PIÈCE

### 1. Présentation générale de la pièce 2

- **Nom de la pièce** : Pièce 2  
- **Date de création** : 07/06/2025  
- **Échelle** : 1/1  

---

### 2. Caractéristiques techniques de la pièce 2

- **Système d’unité** : MMGS (millimètre, gramme, seconde)  
- **Décimale** : 2 (toutes les dimensions doivent être exprimées avec deux chiffres après la virgule)  
- **Tolérance** : ± 5 %  
- **Matériau** : Aluminium Alliage 1060  
- **Densité** : 0,0027 g/mm³  
- **Remarque** : Tous les trous sont débouchants sauf indication contraire  

---

### 3. Représentation graphique de la pièce 2

- Vues : **Face**, **droite en coupe**, et **isométrique** (selon notre considération)



### 4. Processus de réalisation de la pièce 2

Avant de commencer cette pièce, une étude approfondie de la gamme de réalisation a été menée. Résumé des opérations :

- Bossage de la forme principale sur une hauteur de **10 mm**
- Bossage des **deux cylindres creux** sur une hauteur de **30 mm**
- Bossage de la partie cylindrique centrale sur **15 mm**
- Enlèvement de matière sur une profondeur de **5 mm**

---

#### 1ère Étape : Réalisation de la première extrusion

**Création de l’esquisse** :

- Plan utilisé : **Plan de face**
- Tracer les cercles de diamètres **20 mm**, **38 mm**, **34 mm**, **64 mm**  
- Coter les cercles au fur et à mesure  
- Coter la distance entre les centres des grands cercles : **75 mm**  
- Tracer deux arcs reliant les cercles de **64 mm** et **38 mm** de diamètre  
- Utiliser la fonction **Arc par 3 points**
<p align="center">
  <img src="./Images/53.png" alt="Image 1" width="600">
</p>
<p align="center">
  <img src="./Images/54.png" alt="Image 1" width="600">
</p>
</p>
<p align="center">
  <img src="./Images/55.png" alt="Image 1" width="600">
</p>
</p>
<p align="center">
  <img src="./Images/56.png" alt="Image 1" width="600">
</p>
</p>
<p align="center">
  <img src="./Images/56.png" alt="Image 1" width="600">
</p>
</p>
<p align="center">
  <img src="./Images/57.png" alt="Image 1" width="600">
</p>
</p>
<p align="center">
  <img src="./Images/58.png" alt="Image 1" width="600">
</p>
**Alignement et tangence** :

- Sélectionner les deux centres → **Relation verticale**  
- Rendre les arcs **tangents** aux cercles
  </p>
<p align="center">
  <img src="./Images/59.png" alt="Image 1" width="600">
</p>
</p>
<p align="center">
  <img src="./Images/60.png" alt="Image 1" width="600">
</p>
</p>
<p align="center">
  <img src="./Images/61.png" alt="Image 1" width="600">
</p>
</p>
<p align="center">
  <img src="./Images/62.png" alt="Image 1" width="600">
</p>
</p>
<p align="center">
  <img src="./Images/63.png" alt="Image 1" width="600">
</p>
</p>
<p align="center">
  <img src="./Images/64.png" alt="Image 1" width="600">
</p>


**Extrusion** :

- Cliquer sur la fonction **Extruder**  
- Sélectionner la zone entre les deux arcs  
- **Direction** : Plan milieu  
- **Épaisseur** : 10 mm  
- Valider
</p>
<p align="center">
  <img src="./Images/65.png" alt="Image 1" width="600">
</p>
</p>
<p align="center">
  <img src="./Images/66.png" alt="Image 1" width="600">
</p>
</p>
<p align="center">
  <img src="./Images/67.png" alt="Image 1" width="600">
</p>


#### 2ème Étape : Réalisation de la deuxième extrusion

- Refaire apparaître l’esquisse de la première extrusion  
- Sélectionner les **quatre cercles** des cylindres creux  
- Cliquer sur **Extrusion**  
- **Direction** : Plan milieu  
- **Épaisseur** : 30 mm  
- Valider


</p>
<p align="center">
  <img src="./Images/68.png" alt="Image 1" width="600">
</p>
</p>
<p align="center">
  <img src="./Images/69.png" alt="Image 1" width="600">
</p>
</p>
<p align="center">
  <img src="./Images/70.png" alt="Image 1" width="600">
</p>
</p>
<p align="center">
  <img src="./Images/71.png" alt="Image 1" width="600">
</p>


#### 3ème Étape : Troisième extrusion

**Préparation de l’esquisse** :

- Sélectionner la face bleue comme plan d’esquisse  
- Tracer deux cercles concentriques (conversion + décalage)  
  - Convertir le petit cercle de **34 mm**  
  - Le décaler de **4,5 mm**
</p>
<p align="center">
  <img src="./Images/71.png" alt="Image 1" width="600">
</p>
</p>
<p align="center">
  <img src="./Images/72.png" alt="Image 1" width="600">
</p>

**Extrusion** :

- Sélectionner la zone entre les deux cercles  
- **Hauteur d’extrusion** : 15 mm  
- Valider

</p>
<p align="center">
  <img src="./Images/76.png" alt="Image 1" width="600">
</p>
</p>
<p align="center">
  <img src="./Images/77.png" alt="Image 1" width="600">
</p>


#### 4ème Étape : Enlèvement de matière

**Création de l’esquisse** :

- Sélectionner la face bleue de la dernière extrusion  
- Convertir le contour extérieur  
- Faire un **décalage de 6 mm**
</p>
<p align="center">
  <img src="./Images/79.png" alt="Image 1" width="600">
</p>
</p>
<p align="center">
  <img src="./Images/80.png" alt="Image 1" width="600">
</p>
</p>
<p align="center">
  <img src="./Images/81.png" alt="Image 1" width="600">
</p>
</p>
<p align="center">
  <img src="./Images/82.png" alt="Image 1" width="600">
</p>

**Application de l’enlèvement de matière** :

- Cliquer sur **Enlèvement de matière**  
- Sélectionner la zone entre les deux cercles  
- **Profondeur** : 5 mm  
- Valider

</p>
<p align="center">
  <img src="./Images/83.png" alt="Image 1" width="600">
</p>
</p>
<p align="center">
  <img src="./Images/84.png" alt="Image 1" width="600">
</p>



#### 5ème Étape : Configuration du matériau et évaluation de la masse

**Définition du matériau** :

- Clic droit sur la pièce > **Éditer le matériau**  
- Choisir **Aluminium Alliage 1060**
- Aller dans le menu **Évaluer** > **Propriétés de masse**  
- Résultat obtenu : 
</p>
<p align="center">
  <img src="./Images/88.png" alt="Image 1" width="600">
</p>
<p align="center">
  <img src="./Images/89.png" alt="Image 1" width="600">
</p>
<p align="center">
  <img src="./Images/90.png" alt="Image 1" width="600">
</p>
**Évaluation de la masse** :

- Aller dans le menu **Évaluer** > **Propriétés de masse**  
- Résultat obtenu : 
</p>
<p align="center">
  <img src="./Images/86.png" alt="Image 1" width="600">
</p>
</p>
<p align="center">
  <img src="./Images/87.png" alt="Image 1" width="600">
</p>
 La masse obtenue pour la pièce 1 est **290.80 g**.

## III. TROISIÈME PIÈCE

### 1. Présentation générale de la pièce 3

- **Nom de la pièce** : Pièce 3  
- **Date de création** : 07/06/2025  
- **Échelle** : 1/1  

---

### 2. Caractéristiques techniques de la pièce 3

- **Système d’unité** : MMGS (millimètre, gramme, seconde)  
- **Décimale** : 2 (toutes les dimensions doivent être exprimées avec deux chiffres après la virgule)  
- **Tolérance** : ± 5 %  
- **Matériau** : Acier AISI 1020  
- **Densité** : 0,0079 g/mm³  
- **Remarque** : Tous les trous sont débouchants sauf indication contraire  

---

### 3. Représentation graphique de la pièce 3

Selon notre analyse, la pièce présente les vues suivantes :

- **Vue de face**  
- **Vue de droite**  
- **Vue de dessous**  
- **Vue isométrique**

---

### 4. Processus de réalisation de la pièce 3

L'objectif est de réaliser cette pièce **rapidement** avec un **nombre minimal de fonctions** hors esquisses. Après analyse, nous avons identifié que **deux fonctions principales** suffisent :

- **Extrusion** de la base rose sur une hauteur de **100 mm**  
- **Enlèvement de matière** pour créer un évidement de **60 mm x 10 mm**

---

#### 1ère Étape : Réalisation de l'extrusion

**Préparation de l'esquisse** :

- Plan utilisé : **Plan de face**  
- Tracer le contour de l’esquisse et la **coter entièrement**  
- Appliquer un **décalage** de l’esquisse de **10 mm** vers l’extérieur
<p align="center">
  <img src="./Images/93.png" alt="Image 1" width="600">
</p>
<p align="center">
  <img src="./Images/94.png" alt="Image 1" width="600">
</p>
<p align="center">
  <img src="./Images/95.png" alt="Image 1" width="600">
</p>
<p align="center">
  <img src="./Images/96.png" alt="Image 1" width="600">
</p>

**Extrusion** :

- Aller dans la fonction **Extrusion**  
- Appliquer l'extrusion à **100 mm**  
- Choisir **Plan milieu** comme direction  
- Valider l'opération
<p align="center">
  <img src="./Images/98.png" alt="Image 1" width="600">
</p>
<p align="center">
  <img src="./Images/99.png" alt="Image 1" width="600">
</p>
<p align="center">
  <img src="./Images/100.png" alt="Image 1" width="600">
</p>
#### 2ème Étape : Enlèvement de matière

**Préparation de l'esquisse** :

- Sélectionner la **face bleue** comme plan d'esquisse  
- Dessiner l’évidement à enlever (dimensions : **60 mm x 10 mm**)  

**Application de la fonction** :

- Aller dans la fonction **Enlèvement de matière**  
- Sélectionner l’esquisse précédente  
- Valider l’opération
<p align="center">
  <img src="./Images/101.png" alt="Image 1" width="600">
</p>
<p align="center">
  <img src="./Images/102.png" alt="Image 1" width="600">
</p>
<p align="center">
  <img src="./Images/103.png" alt="Image 1" width="600">
</p>
<p align="center">
  <img src="./Images/104.png" alt="Image 1" width="600">
</p>
<p align="center">
  <img src="./Images/105.png" alt="Image 1" width="600">

#### 3ème Étape : Configuration du matériau et évaluation de la masse

**Définition du matériau** :

- Clic droit sur la pièce > **Éditer le matériau**  
- Sélectionner **Acier AISI 1020**
</p>
<p align="center">
  <img src="./Images/106.png" alt="Image 1" width="600">
</p>
**Évaluation de la masse** :

- Aller dans l’onglet **Évaluer** > **Propriétés de masse**  
- **Résultat** : **1633.25g**


## IV. QUATRIÈME PIÈCE

### 1. Présentation générale de la pièce 4

- **Nom de la pièce** : Pièce 4  
- **Date de création** : 07/06/2025  
- **Échelle** : 1/1  

---

### 2. Caractéristiques techniques

- **Système d’unité** : MMGS (millimètre, gramme, seconde)  
- **Décimale** : 2 (toutes les dimensions doivent être exprimées avec deux chiffres après la virgule)  
- **Tolérance** : ± 5 %  
- **Matériau** : Aluminium Alliage 1060  
- **Densité** : 0,0027 g/mm³  
- **Remarque** : Tous les trous sont débouchants sauf indication contraire  

---

### 3. Représentation graphique de la pièce 4

La pièce présente les vues suivantes :

- **Vue de face**  
- **Vue de gauche**  
- **Vue de dessous**  
- **Vue isométrique**

---

### 4. Processus de réalisation de la pièce 4

L'objectif est de réaliser cette pièce en un **temps record** en utilisant un **nombre minimal de fonctions**. Nous avons utilisé **quatre fonctions principales** :

- **Bossage** de la base rouge (50 mm)  
- **Bossage** de la zone grise (10 mm)  
- **Bossage** du cylindre jaune (5 mm)  
- **Congé** de rayon 2 mm  
- **Enlèvement de matière** de la zone verte  

---

#### Étape 1 : Configuration des paramètres initiaux

**Système d’unité :**

- En bas à droite de l'interface SolidWorks, cliquer sur l’indicateur (ex. : IPS, MMGS, etc.)
- Sélectionner **MMGS**

**Matériau :**

- Clic droit sur la pièce dans l’arbre de création  
- Sélectionner **Matériau > Éditer le matériau**  
- Choisir **Alliage d'aluminium > Alliage 1060**

---

#### Étape 2 : Première extrusion (base rouge)

- Sélectionner le **plan de face**  
- Créer une **esquisse** avec la **fonction ligne**  
- Appliquer la **cotation intelligente**  
- Aller dans **Fonctions > Base extrudée**  
- Définir la **profondeur à 50 mm**

---<p align="center">
  <img src="./Images/110.png" alt="Image 1" width="600">
</p>
<p align="center">
  <img src="./Images/111.png" alt="Image 1" width="600">
</p>
<p align="center">
  <img src="./Images/112.png" alt="Image 1" width="600">
</p>

#### Étape 3 : Deuxième extrusion (zone grise)

- Sélectionner la **face supérieure** comme plan d’esquisse  
- Tracer la **forme à extruder**  
- Aller dans **Fonctions > Base extrudée**  
- Définir la **profondeur à 10 mm**

<p align="center">
  <img src="./Images/115.png" alt="Image 1" width="600">
</p>
<p align="center">
  <img src="./Images/116.png" alt="Image 1" width="600">
</p>
<p align="center">
  <img src="./Images/117.png" alt="Image 1" width="600">
</p>
#### Étape 4 : Troisième extrusion (cylindre jaune)

- Sélectionner la **face supérieure** comme plan d’esquisse  
- Utiliser l’outil **Cercle** pour dessiner un cercle centré à l’origine  
- Appliquer la **cotation intelligente**  
- Aller dans **Fonctions > Base extrudée**  
- Définir la **hauteur à 5 mm**

<p align="center">
  <img src="./Images/118.png" alt="Image 1" width="600">
</p>
<p align="center">
  <img src="./Images/119.png" alt="Image 1" width="600">
</p>
<p align="center">
  <img src="./Images/120.png" alt="Image 1" width="600">
</p>
p align="center">
  <img src="./Images/121.png" alt="Image 1" width="600">
</p>
p align="center">
  <img src="./Images/122.png" alt="Image 1" width="600">

#### Étape 5 : Congé

- Aller dans **Fonctions > Congé**  
- Sélectionner **l’arête de base du cylindre**  
- Définir le **rayon à 2 mm**  
- Appliquer
</p>
p align="center">
  <img src="./Images/123.png" alt="Image 1" width="600">
</p>
</p>
p align="center">
  <img src="./Images/124.png" alt="Image 1" width="600">
</p>

#### Étape 6 : Enlèvement de matière

**Création de l’esquisse :**

- Sélectionner une **face plane** (zone bleue)  
- Utiliser l’outil **Rectangle > Rectangle par coin**  
- Appliquer la **cotation intelligente**  
- Si une erreur se produit à l’ajout de la cote 30 mm :  
  - Accéder à l’**esquisse via l’arbre de création**  
  - Clic droit > **Modifier l’esquisse**  
  - Corriger les contraintes en utilisant **colinéarité**

**Enlèvement de matière :**

- Aller dans **Fonctions > Enlèvement de matière par extrusion**  
- Définir la **profondeur jusqu’à la surface du congé**

</p>
p align="center">
  <img src="./Images/125.png" alt="Image 1" width="600">
</p>
</p>
p align="center">
  <img src="./Images/126.png" alt="Image 1" width="600">
</p>
</p>
p align="center">
  <img src="./Images/125.png" alt="Image 1" width="600">
</p>
</p>
p align="center">
  <img src="./Images/126.png" alt="Image 1" width="600">
</p>
</p>
p align="center">
  <img src="./Images/127.png" alt="Image 1" width="600">
</p>
</p>
p align="center">
  <img src="./Images/128.png" alt="Image 1" width="600">
</p>
</p>
p align="center">
  <img src="./Images/129.png" alt="Image 1" width="600">
</p>
</p>
p align="center">
  <img src="./Images/130.png" alt="Image 1" width="600">
</p>
</p>
p align="center">
  <img src="./Images/131.png" alt="Image 1" width="600">
</p>
</p>
p align="center">
  <img src="./Images/132.png" alt="Image 1" width="600">
</p>
</p>
p align="center">
  <img src="./Images/133.png" alt="Image 1" width="600">
</p>
</p>
p align="center">
  <img src="./Images/134.png" alt="Image 1" width="600">
</p>

</p>
p align="center">
  <img src="./Images/139.png" alt="Image 1" width="600">
</p>
</p>
p align="center">
  <img src="./Images/140.png" alt="Image 1" width="600">
</p>
</p>
p align="center">
  <img src="./Images/141.png" alt="Image 1" width="600">
</p>
</p>
p align="center">
  <img src="./Images/142.png" alt="Image 1" width="600">
</p>
</p>
p align="center">
  <img src="./Images/143.png" alt="Image 1" width="600">
</p>
</p>
p align="center">
  <img src="./Images/144.png" alt="Image 1" width="600">
</p>
</p>
p align="center">
  <img src="./Images/145.png" alt="Image 1" width="600">
</p>
</p>
p align="center">
  <img src="./Images/146.png" alt="Image 1" width="600">
</p>
</p>
p align="center">
  <img src="./Images/147.png" alt="Image 1" width="600">
</p>
</p>
p align="center">
  <img src="./Images/148.png" alt="Image 1" width="600">
</p>
</p>
p align="center">
  <img src="./Images/149.png" alt="Image 1" width="600">
</p>

#### Étape 7 : Évaluation de la masse

- Aller dans l’onglet **Évaluer**  
- Cliquer sur **Propriétés de masse**  
- La masse est calculée automatiquement par SolidWorks
- **Résultat** : **297.29g**



## V. ASSEMBLAGE

### 1. Présentation générale de l’assemblage

- **Nom de l’assemblage** : Pince  
- **Date de création** : 07/06/2025  
- **Échelle** : 1/1  

---

### 2. Caractéristiques techniques

- **Système d’unité** : MMGS (millimètre, gramme, seconde)  
- **Décimale** : 2 (toutes les dimensions doivent être exprimées avec deux chiffres après la virgule)  

---

### 3. Représentation graphique

Les mises en page montrent clairement chaque pièce composant l’assemblage.  
On dispose d’une **nomenclature** indiquant le nombre de chaque pièce présente.  
Les vues disponibles sont :  
- Vue de face  
- Vue de droite  
- Vue de dessus  
- Plusieurs coupes  
- Vue isométrique  

---

### 4. Processus de réalisation

#### Étape 1 : Importation des fichiers

- Ouvrir le fichier **assemblage pince.SLDASM** depuis le dossier **TEKBOT ASSEMBLAGE 1**  
- Déposer le fichier dans la fenêtre d’assemblage SolidWorks  
- Ajouter les pièces nécessaires via **Assemblage > Insérer des composants**  
- Cliquer sur **Parcourir** et sélectionner chaque pièce pour les insérer :  
  - Axe de Biellette
    </p>
  - Axe porte mâchoire
    <p align="center">
  <img src="./Images/z3.png" alt="Image 1" width="600">
</p>
  - Circlips  
  - Biellette  
  - Mâchoire droite  
  <p align="center">
  <img src="./Images/z5.png" alt="Image 1" width="600">
</p>
  - Mâchoire gauche  
  - Porte mâchoire  
  - Vis CHC M16*16 
  <p align="center">
  <img src="./Images/z10.png" alt="Image 1" width="600">
</p>
  - Vis CHC M5*25  
<p align="center">
  <img src="./Images/z11.png" alt="Image 1" width="600">
</p>
#### Étape 2 : Contraintes d’assemblage

- Rendre coaxial le trou de la Biellette avec le trou de l’Embout de vérin  
- Rendre coïncidente la face dessus de la Biellette avec la face dessous de l’Embout de vérin  
- Appliquer les mêmes contraintes pour la deuxième Biellette  
- Rendre coaxial l’axe de Biellette avec le trou de la Biellette  
- Rendre coïncidente la face dessus de la Biellette avec la surface d’appui de l’axe  
- Répéter pour le deuxième axe de Biellette  
- Rendre coaxial le circlips avec l’axe de Biellette  
- Rendre coïncidente la face dessus du circlips avec la gorge de l’axe  
- Corriger toute erreur de contraintes (ex. : axe mal positionné) en supprimant les contraintes incorrectes  
- Multiplier les composants nécessaires (axes de Biellette, circlips, etc.) via sélection + glisser avec Ctrl  
- Appliquer contraintes similaires pour tous les composants multipliés  
- Faire la symétrie de l’ensemble (axe de Biellette, circlips, Biellette) par rapport au plan de dessus  
- Contraindre les trous et faces du porte mâchoire avec l’axe de Biellette et les autres pièces associées  
- Positionner correctement les mâchoires droite et gauche avec leurs portes mâchoires respectifs  
- Appliquer contraintes de coïncidence et coaxialité sur toutes les pièces et vis CHC  
- Corriger les positions des pièces et vis pour assurer un montage réaliste et fonctionnel  
<p align="center">
  <img src="./Images/z12.png" alt="Image 1" width="600">
</p>
---

#### Étape 3 : Évaluation finale

- Vérifier l’assemblage complet dans différentes positions (maximale et minimale)  
- Utiliser l’outil **Évaluer > Propriétés de masse** pour calculer la masse totale de l’assemblage  

---

**Remarque :**  
Le montage a nécessité plusieurs corrections de contraintes et de positionnement afin d’assurer un assemblage fonctionnel et sans interférences.

---
#### Étape 3 : Évaluation finale

- Vérifier l’assemblage complet dans différentes positions (maximale et minimale)  
- **Position minimale des coordonnées :**  
  - X = -29.15 mm  
  - Y = 0.16 mm  
  - Z = 19.86 mm  
- Utiliser l’outil **Évaluer > Propriétés de masse** pour calculer la masse totale de l’assemblage  
#### Étape 3 : Évaluation finale

- Vérifier l’assemblage complet dans différentes positions (maximale et minimale)  

- **Position minimale des coordonnées :**  
  - X = -29.15 mm  
  - Y = 0.16 mm  
  - Z = 19.86 mm  

- **Position maximale des coordonnées :**  
  - X = -25.78 mm  
  - Y = 0.66 mm  
  - Z = 19.86 mm  

- Utiliser l’outil **Évaluer > Propriétés de masse** pour calculer la masse totale de l’assemblage  

---
## Video de démonstration
- https://vimeo.com/1093497038?share=copy
---

## Conclusion
La présente documentation retrace de manière structurée l’ensemble des travaux réalisés dans le cadre de **la partie mécanique du test de présélection du Tekbot Robotics Challenge 2025**.
Elle met en évidence les compétences mobilisées :
- en **modélisation 3D**,
- en **assemblage de pièces mécaniques**,
- ainsi qu’en **vérification des propriétés physiques** à travers l’utilisation du logiciel **SolidWorks**.
La maîtrise des outils de **CAO**, la compréhension des **contraintes géométriques et matérielles**, ainsi que la capacité à respecter les **tolérances imposées** ont été essentielles pour valider les différentes étapes du test.
> L’assemblage final, centré sur **une pince mécanique**, a également permis d’aborder des notions importantes telles que l’**application de contraintes d’assemblage** et le **calcul du centre de gravité**.

Ce travail marque une étape **préparatoire essentielle** à la suite du projet, qui consistera à **concevoir un robot complet destiné à la collecte des déchets en milieu urbain**.  
Il constitue non seulement une **preuve de compétence technique**, mais aussi une **base solide pour le développement futur de solutions robotiques innovantes**.


