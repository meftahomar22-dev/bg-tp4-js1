// Activating strict mode (slide 51)
"use strict";

// Function f1: Manipulation and display of an array (slide 39)
function f1() {
    const etudiants = ["Etudiant1", "Etudiant2", "Etudiant3"];
    
    // Iterating through the array using a for loop (slide 45)
    for (let i = 0; i < etudiants.length; i++) {
        console.log(etudiants[i]);
    }
}

// Function f2: Manipulation and display of an object (slide 40)
function f2() {
    const etudiant = {
        nom: "John",
        prenom: "DOE",
        age: 30
    };
    
    console.log(etudiant);
}

function f3() {
    const listeEtudiants = [
        { nom: "nom1", prenom: "prenom1", age: 21 },
        { nom: "nom2", prenom: "prenom2", age: 22 },
        { nom: "nom3", prenom: "prenom3", age: 23 }
    ];

    // Iterating through the array of objects using a for...of loop (slide 44)
    for (const etudiant of listeEtudiants) {
        //(slide 38 and slide 40)
        console.log(etudiant.nom + "-" + etudiant.prenom + "-" + etudiant.age);
    }
}