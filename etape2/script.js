"use strict"; // JavaScript strict mode (slide 51)

function doInsertRowTable(num, nom, prenom, points) {
    // Retrieve the table element via querySelector (slide 76)
    const table = document.querySelector("table tbody");

    // Create a tr element (slide 104)
    const row = document.createElement("tr");

    // (slide 107)
    row.setAttribute("class", "row");

    const col1 = document.createElement("td");
    const col2 = document.createElement("td");
    const col3 = document.createElement("td");
    const col4 = document.createElement("td");
    const col5 = document.createElement("td");

    // (slide 91)
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

    // Add the columns to the row using the append method (slide 97)
    row.append(col1, col2, col3, col4, col5);

    // Add the row element to the table (slide 97)
    table.append(row);
}

//When the page is refreshed, the added rows disappear. 
//The reason: JavaScript only manipulates the DOM in the client-side memory; no data is saved on a server or in persistent storage.