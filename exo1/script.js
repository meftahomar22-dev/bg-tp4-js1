// Activating strict mode at the very beginning of the script (slide 52)
"use strict";

// Declaring variables and constants with primitive types: string, number (integer and real) (slide 38)
const nom = "John";
const prenom = "Doe";
let age = 30;
let note = 15;
const pi = 3.14;

// Declaring a function without parameters to display the name (slide 46)
function f1() {
    // Displaying output in the console using console.log() (slide 34)
    console.log(nom);
}

// Declaring function f2 to display the first name (slide 46)
function f2() {
    console.log(prenom);
}

// Declaring function f3 to display the full name (slide 46)
function f3() {
    // String concatenation using the + operator (slide 38)
    console.log(nom + "-" + prenom);
}

// Declaring function f4 to display the age (slide 46)
function f4() {
    console.log(age);
}

// Declaring function f5 to display the grade (slide 46)
function f5() {
    console.log(note);
}

// Declaring function f6 to display Pi (slide 46)
function f6() {
    console.log(pi);
}