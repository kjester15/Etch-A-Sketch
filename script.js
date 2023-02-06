document.addEventListener('click', createDivs);

function createDivs () {
    // first loop is for the number of rows
    const numberColumns = prompt("How many COLUMNS would you like?");
    const numberRows = prompt("How many ROWS would you like?");
    for (let i = 0; i < numberRows; i++) {
        const rowDiv = document.createElement('div');
        rowDiv.setAttribute('id', `divRow`)
        document.getElementById('etch-container').appendChild(rowDiv);
        // second loop creates x divs inside the first row
        for (let j = 0; j < numberColumns; j++) {
            const colDiv = document.createElement('div');
            colDiv.setAttribute('id', `divCol`)
            rowDiv.appendChild(colDiv);
        }
    }
}


