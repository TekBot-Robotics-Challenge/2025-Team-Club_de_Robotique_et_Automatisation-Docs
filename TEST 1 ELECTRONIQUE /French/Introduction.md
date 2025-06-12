# DOCUMENTATION TECHNIQUE DES TESTS EN ELECTRONIQUE

## Table des matières

- [Test 1 : Gyroscope et accelerometre](#test-1--gyroscope-et-accelerometre)
- [En quoi ce test releve dune importance capitale](#en-quoi-ce-test-releve-dune-importance-capitale)


## Test 1 : Gyroscope et accéléromètre

S’orienter dans l’espace, savoir distinguer le haut, le bas, la gauche, la droite, l’avant et l’arrière, est une compétence naturelle chez l’être humain.  
Mais comment faire pour qu’un robot ou un système automatisé reproduise cette capacité ?

C’est là qu’interviennent les capteurs inertiels : des composants électroniques capables de « sentir » les mouvements et rotations d’un objet dans l’espace.  
Nous avons choisi d’explorer cette technologie avec un capteur **MPU6050**, un module combinant :

- un **accéléromètre 3 axes**, pour détecter les accélérations (y compris la gravité),
- un **gyroscope 3 axes**, pour mesurer les vitesses de rotation autour de ces 3 axes.

Ce capteur sera placé dans la paume d’une main et connecté à un microcontrôleur **ATméga328P**.  
À chaque geste : lever la main, la baisser, la tourner, les informations seront affichées en temps réel sur un **écran LCD**.

---

### En quoi ce test relève d’une importance capitale

Ce test constitue une immersion concrète dans les systèmes embarqués et la robotique, où les capteurs inertiels comme ceux que l’on retrouve dans les **drones**, **smartphones** ou **robots** sont essentiels pour mesurer la position, la vitesse et la stabilité du système.  
En combinant un accéléromètre (qui mesure les accélérations linéaires) et un gyroscope (qui mesure la vitesse de rotation), on peut reconstruire en temps réel la trajectoire et l’orientation d’un objet dans l’espace : c’est ce que l’on appelle la **fusion de données**, un processus indispensable dans les applications à 3D.

Grâce à la simplicité du module **MPU6050** (interface I2C standard) et la restitution des résultats sur un écran **LCD**, ce test offre une approche pédagogique efficace :  
il permet de visualiser directement comment un geste manuel se traduit en direction détectée, sans complexité inutile.

Ce compromis entre technique, accessibilité, et interactivité en fait un excellent point de départ pour quiconque souhaite comprendre la **détection de mouvement**, l’**électronique embarquée** et l’**orientation spatiale**, avant de creuser des solutions plus complexes (filtres avancés, modèles AHRS, etc.).
