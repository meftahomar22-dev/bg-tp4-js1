"use strict"; // Activation of strict mode (slide 51)

let lignes = 0;
let total_points = 0; // Global variable for total points (slide 51)

const persons = [
    { nom: "nom-1", prenom: "prenom-1", points: 5 },
    { nom: "nom-2", prenom: "prenom-2", points: 10 },
    { nom: "nom-3", prenom: "prenom-3", points: 15 }
];

init();

function init() {
    for (const p of persons) { // (slide 44)
        doInsert(p.nom, p.prenom, p.points);
    }
}

function doInsert(nom, prenom, points) {
    lignes++;
    total_points += points;
    doInsertRowTable(lignes, nom, prenom, points);
    update_summary();
}

function update_summary() {
    // Get elements by ID (slide 63)
    const element_lignes = document.getElementById("p1");
    const element_points = document.getElementById("p3");

    // Modifying text using innerText (slide 91)
    element_lignes.innerText = lignes + " ligne(s)";
    element_points.innerText = "Total point(s)= " + total_points;
}

function doInsertRowTable(num, nom, prenom, points) {
    const table = document.querySelector("table tbody");
    const row = document.createElement("tr"); 
    row.setAttribute("class", "row");

    const col1 = document.createElement("td");
    const col2 = document.createElement("td");
    const col3 = document.createElement("td");
    const col4 = document.createElement("td");
    const col5 = document.createElement("td");

    col1.innerText = num; // (slide 91)
    col2.innerText = nom;
    col3.innerText = prenom;
    col4.innerText = points;

    const chkbox = document.createElement("input");
    chkbox.setAttribute("type", "checkbox");
    col5.append(chkbox);

    col1.setAttribute("class", "col_number");
    col2.setAttribute("class", "col_text");
    col3.setAttribute("class", "col_text");
    col4.setAttribute("class", "col_number");
    col5.setAttribute("class", "col_chkbox");

    row.append(col1, col2, col3, col4, col5); 
    table.append(row);
}

function consoleTableau() {
    console.log(persons); // (slide 33)
}