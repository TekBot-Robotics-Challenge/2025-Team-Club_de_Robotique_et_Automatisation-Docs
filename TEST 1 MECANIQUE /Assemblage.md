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

