"use strict"; // Activation of strict mode [Slide 51]

let lignes = 0;
let total_points = 0;

const persons = [
    { nom: "nom-1", prenom: "prenom-1", points: 5 },
    { nom: "nom-2", prenom: "prenom-2", points: 10 },
    { nom: "nom-3", prenom: "prenom-3", points: 15 }
];

init();

function init() {
    for (const p of persons) { // [Slide 44]
        doInsert(p.nom, p.prenom, p.points);
    }
}

function doNewData() {
 
    const elt_nom = document.getElementById("form_nom");
    const elt_prenom = document.getElementById("form_prenom");
    const elt_points = document.getElementById("form_points");

    const nom = elt_nom.value.trim();
    const prenom = elt_prenom.value.trim();
    const points = parseInt(elt_points.value); 

    if (nom === "" || prenom === "" || Number.isNaN(points)) {
        window.alert("Formulaire incomplet !"); // BOM alert box [Slide 116]
    } else {
        doInsert(nom, prenom, points);

        persons.push({ nom: nom, prenom: prenom, points: points });

        // Reset fields to empty [Slide 91]
        elt_nom.value = "";
        elt_prenom.value = "";
        elt_points.value = "";
    }
}

function doInsert(nom, prenom, points) {
    lignes++;
    total_points += points; // [Slide 41]
    doInsertRowTable(lignes, nom, prenom, points);
    update_summary(); // [Slide 45]
}

function update_summary() {
    const element_lignes = document.getElementById("p1"); 
    const element_points = document.getElementById("p3");
    const element_avg = document.getElementById("p2"); // Bonus Feature 2 container

    element_lignes.innerText = lignes + " ligne(s)";
    element_points.innerText = "Total point(s)= " + total_points;

    // --- BONUS FEATURE 2: Calculate and display average points ---
    if (lignes > 0) {
        const avg = (total_points / lignes).toFixed(2);
        element_avg.innerText = "Moyenne= " + avg;
    } else {
        element_avg.innerText = "Moyenne= 0";
    }
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
    console.log(persons); 
}

function deleteRow() {
    if (lignes === 0) {
        window.alert("Le tableau est vide !");
        return;
    }

    const checkboxes = document.querySelectorAll(".col_chkbox input");
    let selectedCount = 0;
    for (const cb of checkboxes) {
        if (cb.checked) {
            selectedCount++;
        }
    }

    if (selectedCount === 0) {
        window.alert("Sélectionnez au moins une ligne !");
        return;
    }

    const confirmation = window.confirm("Voulez-vous vraiment supprimer les lignes sélectionnées ?");
    if (!confirmation) {
        return;
    }

    const tableBody = document.querySelector("#persons_table tbody");
    const rows = tableBody.querySelectorAll("tr");

    for (let i = rows.length - 1; i >= 0; i--) {
        const row = rows[i];
        const cb = row.querySelector(".col_chkbox input");

        if (cb && cb.checked) {
            const pts = parseInt(row.querySelectorAll("td")[3].innerText);
            total_points -= pts;
            lignes--;
            persons.splice(i, 1);
            row.remove();
        }
    }

    const remainingRows = tableBody.querySelectorAll("tr");
    for (let i = 0; i < remainingRows.length; i++) {
        remainingRows[i].querySelectorAll("td")[0].innerText = i + 1;
    }

    lignes = remainingRows.length;
    update_summary();
}

// ===================================
// 3 BONUS FEATURES IMPLEMENTED
// ===================================

// --- BONUS FEATURE 1: Live Table Search/Filter ---
function filterTable() {
    const input = document.getElementById("search_input");
    const filter = input.value.toLowerCase();
    const tableBody = document.querySelector("#persons_table tbody");
    const rows = tableBody.querySelectorAll("tr");

    for (const row of rows) {
        const nameCell = row.querySelectorAll("td")[1];
        if (nameCell) {
            const textValue = nameCell.innerText.toLowerCase();
            if (textValue.includes(filter)) {
                row.style.display = ""; // Show row
            } else {
                row.style.display = "none"; // Hide row
            }
        }
    }
}

// --- BONUS FEATURE 3: Sorting Rows by Points ---
function sortRowsByPoints() {
    persons.sort((a, b) => a.points - b.points);

    // Clear the current table body DOM elements
    const tableBody = document.querySelector("#persons_table tbody");
    tableBody.innerHTML = "";

    lignes = 0;
    total_points = 0;

    // Re-insert sorted objects into the table
    for (const p of persons) {
        doInsert(p.nom, p.prenom, p.points);
    }
}