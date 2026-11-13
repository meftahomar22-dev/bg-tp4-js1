// Activating strict mode at the very beginning of the file (slide 51)
"use strict";

// Declaring an array of objects   (slide 44)
const Students = [
    { matricule: 1000, nom: "JOHN", prenom: "DOE", moyenne: 14.5 },
    { matricule: 2000, nom: "BOB", prenom: "CARLTON", moyenne: 7.1 },
    { matricule: 3000, nom: "RAYANE", prenom: "SMITH", moyenne: 13.3 }
];

// Function A with no parameters: iterates through students and calls function B (slide 47)
function A() {
    // For loop (slide 44)
    for (let i = 0; i < Students.length; i++) {
        let Admis = B(Students[i].moyenne);
        
        // Conditional if...else structure (slide 42)
        if (Admis) {
            console.log(Students[i].matricule + ": ADMIS");
        } else {
            console.log(Students[i].matricule + ": AJOURNÉ");
        }
    }
}

function B(moyenne) {
    // Using the relational operator >= which returns a boolean (true or false) (slide 41)
    return moyenne >= 10.0;
}