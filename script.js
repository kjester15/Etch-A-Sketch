document.addEventListener('click', createDivs);
document.addEventListener('mouseover', colorSquare);

function createDivs () {
    // first loop is for the number of rows
    let numberColumns = 0;
    let numberRows = 0;
    while (numberColumns == 0 || numberColumns > 100) {
        numberColumns = prompt("How many COLUMNS would you like?");
    }
    while (numberRows == 0 || numberRows > 100) {
        numberRows = prompt("How many ROWS would you like?");
    }
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

function colorSquare() {

}


