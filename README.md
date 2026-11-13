<<<<<<< HEAD
# ⚙️ TP4 – JavaScript (Partie 1): Bases du langage

## 🎯 Objectif du TP
L’objectif de ce TP est de vous familiariser avec les **bases du langage JavaScript**.  
Vous allez mettre en pratique ces notions à travers **3 exercices progressifs**.
=======
# ⚙️ TP4 (part 2) – JavaScript : Manipulation du DOM et mini-application CRUD

## 🎯 Objectif du TP
L’objectif de ce TP est de vous familiariser avec les **méthodes et propriétés JavaScript** utilisées pour la **manipulation du DOM**.  
Vous allez mettre en pratique ces notions à travers la réalisation d’une **mini-application “CRUD-Persons”**, décomposée en **6 étapes progressives**.
>>>>>>> 3a11bbac2994a40f08ec81ab9f10b0ca1d576c92

---

## 📘 Ressources fournies
<<<<<<< HEAD
- Le fichier **`TP4_JS.pdf`** vous guidera **étape par étape** dans la réalisation du TP.  
- Tous les **scripts JavaScript** doivent être écrits dans un **fichier externe** nommé **`script.js`**.  
- Chaque script doit contenir au tout début : **"use strict"**;
- Votre code doit impérativement être **commenté**, en mentionnant pour chaque concept utilisé le **numéro de la diapositive correspondante** du cours.  

> Exemple :  
> `// Ici on utilise une boucle (vu dans le slide 45)`  

🛑 **Un code sans commentaire est automatiquement rejeté.**  
🛑 **Aucune sortie autre que `console.log()` n’est autorisée.**  
> (Les fonctions comme `alert()`, `innerText()`, `innerHTML()` sont interdites.)

=======
- Le fichier **`TP4_JS.pdf`** vous guide **étape par étape** dans la réalisation du TP.  
- Tous les **scripts JavaScript** doivent être écrits dans un **fichier externe** nommé **`script.js`**.  
- Chaque script doit commencer par :
  ```js
  "use strict";
  ```
- Votre code doit impérativement être **commenté**, en mentionnant pour chaque concept utilisé le **numéro de la diapositive** du cours.  
  > Exemple : `// Ici on utilise une boucle (slide 45)`

🛑 **Un code sans commentaire est automatiquement rejeté.**  
>>>>>>> 3a11bbac2994a40f08ec81ab9f10b0ca1d576c92
---

## 🧭 Déroulement du TP

1. **Accès à l’énoncé**
   - L’énoncé complet du TP est déposé sur **GitHub**.
<<<<<<< HEAD

2. **Création de votre espace de travail**
   - Forker ce repo, puis clonez votre dépôt individuel.

3. **Réalisation**
   - Complétez les fichiers **`index.html`** et **`script.js`** dans **chaque dossier d’exercice**.
   - Suivez les consignes décrites dans **`TP4_JS.pdf`**.

4. **Soumission**
   - Une fois le travail terminé :
     ```bash
     git add .
     git commit -m "TP4 JavaScript terminé"
=======
   - Le lien de l’assignement est communiqué sur **Google Classroom**.

2. **Création de votre espace de travail**
   - Acceptez l’assignement sur **GitHub Classroom**.
   - Clonez ensuite votre dépôt individuel sur votre machine.

3. **Réalisation**
   - Chaque étape correspond à un **dossier distinct** : `etape1`, `etape2`, …, `etape6`.
   - Dans chaque dossier, complétez les fichiers **`index.html`** et **`script.js`** selon les consignes du PDF.
   - Certaines étapes peuvent aussi inclure un fichier **`style.css`** à compléter quand demandé.
   - La **dernière étape** du TP consiste à rajouter 3 fonctionnalités supplémentaires de votre choix.

4. **Soumission**
   - Une fois le travail terminé, exécutez :
     ```bash
     git add .
     git commit -m "TP5 CRUD-Persons terminé"
>>>>>>> 3a11bbac2994a40f08ec81ab9f10b0ca1d576c92
     git push origin main
     ```

---

## 🧾 Livrables attendus
<<<<<<< HEAD
- Un **dossier par exercice** (`exo1`, `exo2`, `exo3`).  
- Dans chaque dossier, doivent se trouver les fichiers suivants : **index.html** et **script.js**


## 🧠 Rappel
Avant de soumettre :
- Vérifiez que **votre code s’exécute sans erreur** dans la console du navigateur.  
- Respectez les **règles de nommage**, l’**indentation** et les **commentaires** exigés.  

- Chaque script doit être **autonome** et respecter les **bonnes pratiques vues en cours**.
=======
- **6 dossiers** correspondant aux **6 étapes du TP**.  
- Dans chaque dossier doivent se trouver :
  - `index.html`  
  - (`script.js` et `style.css` lorsqu’ils sont demandés)

---

## ✅ Critères d’évaluation
- Le code est **fonctionnel** (sans erreur dans la console).  
- Les **commentaires** sont présents et référencent les slides.  
- Respect des **bonnes pratiques** : `"use strict"`, nommage, indentation.  
- Les modifications du DOM correspondent bien aux opérations sur le tableau `persons` (cohérence UI ↔ données).

---

## 🧠 Rappel avant soumission
- Vérifiez l’exécution dans la console du navigateur.  
- Ne laissez pas de `console.log()` de debug inutiles (ou commentez-les). 
- Les fonctionnalités de gestion des personnes (ajout, modification, suppression, lecture, mise à jour du résumé) doivent être opérationnelles à l'étape 6.

---

## 📎 Lien d’assignement
Le lien GitHub Classroom est disponible sur **Google Classroom**.


>>>>>>> 3a11bbac2994a40f08ec81ab9f10b0ca1d576c92
