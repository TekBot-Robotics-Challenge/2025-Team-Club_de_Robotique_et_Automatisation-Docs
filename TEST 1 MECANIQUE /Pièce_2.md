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
**Alignement et tangence** :

- Sélectionner les deux centres → **Relation verticale**  
- Rendre les arcs **tangents** aux cercles

**Extrusion** :

- Cliquer sur la fonction **Extruder**  
- Sélectionner la zone entre les deux arcs  
- **Direction** : Plan milieu  
- **Épaisseur** : 10 mm  
- Valider

---

#### 2ème Étape : Réalisation de la deuxième extrusion

- Refaire apparaître l’esquisse de la première extrusion  
- Sélectionner les **quatre cercles** des cylindres creux  
- Cliquer sur **Extrusion**  
- **Direction** : Plan milieu  
- **Épaisseur** : 30 mm  
- Valider

---

#### 3ème Étape : Troisième extrusion

**Préparation de l’esquisse** :

- Sélectionner la face bleue comme plan d’esquisse  
- Tracer deux cercles concentriques (conversion + décalage)  
  - Convertir le petit cercle de **34 mm**  
  - Le décaler de **4,5 mm**

**Extrusion** :

- Sélectionner la zone entre les deux cercles  
- **Hauteur d’extrusion** : 15 mm  
- Valider

---

#### 4ème Étape : Enlèvement de matière

**Création de l’esquisse** :

- Sélectionner la face bleue de la dernière extrusion  
- Convertir le contour extérieur  
- Faire un **décalage de 6 mm**

**Application de l’enlèvement de matière** :

- Cliquer sur **Enlèvement de matière**  
- Sélectionner la zone entre les deux cercles  
- **Profondeur** : 5 mm  
- Valider

---

#### 5ème Étape : Configuration du matériau et évaluation de la masse

**Définition du matériau** :

- Clic droit sur la pièce > **Éditer le matériau**  
- Choisir **Aluminium Alliage 1060**

**Évaluation de la masse** :

- Aller dans le menu **Évaluer** > **Propriétés de masse**  
- Résultat obtenu : **290,80 g**

