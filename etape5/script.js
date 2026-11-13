"use strict"; // Activation of strict mode (slide 51)

let lignes = 0;
let total_points = 0;

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

function doNewData() {
    // Get form elements (slide 63)
    const elt_nom = document.getElementById("form_nom");
    const elt_prenom = document.getElementById("form_prenom");
    const elt_points = document.getElementById("form_points");

    // Retrieve values from fields (slide 91)
    const nom = elt_nom.value.trim();
    const prenom = elt_prenom.value.trim();
    const points = parseInt(elt_points.value); // Conversion to integer 

    // Check that fields are not empty and points is a valid number
    if (nom === "" || prenom === "" || Number.isNaN(points)) {
        window.alert("Formulaire incomplet !"); // BOM alert box (slide 116)
    } else {
        // Insertion into the HTML table
        doInsert(nom, prenom, points);

        persons.push({ nom: nom, prenom: prenom, points: points });

        // Reset fields to empty 
        elt_nom.value = "";
        elt_prenom.value = "";
        elt_points.value = "";
    }
}

function doInsert(nom, prenom, points) {
    lignes++;
    total_points += points; 
    doInsertRowTable(lignes, nom, prenom, points);
    update_summary();
}

function update_summary() {
    const element_lignes = document.getElementById("p1"); //(slide 63)
    const element_points = document.getElementById("p3");

    element_lignes.innerText = lignes + " ligne(s)"; // (slide 91)
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

    col1.innerText = num;
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