document.getElementById('start').addEventListener('click', createDivs);
document.getElementById('reset').addEventListener('click', restart);
const divs = document.querySelectorAll('div');
divs.forEach(div => div.addEventListener('mouseover', colorSquare));
document.addEventListener('mouseover', colorSquare);

function restart () {
    document.location.reload();
}

function createDivs () {
    let numberColumns = 0;
    let numberRows = 0;
    while (numberColumns == 0 || numberColumns > 100) {
        numberColumns = prompt("How many COLUMNS would you like?");
    }
    while (numberRows == 0 || numberRows > 100) {
        numberRows = prompt("How many ROWS would you like?");
    }
    // first loop is for the number of rows
    for (let i = 0; i < numberRows; i++) {
        const rowDiv = document.createElement('div');
        rowDiv.setAttribute('class', 'divRow');
        rowDiv.setAttribute('id', `divRow${i}`);
        document.getElementById('etch-container').appendChild(rowDiv);
        // second loop creates j divs inside i row
        for (let j = 0; j < numberColumns; j++) {
            const colDiv = document.createElement('div');
            colDiv.setAttribute('class', 'divCol');
            colDiv.setAttribute('id', `divRow${i}divCol${j}`);
            rowDiv.appendChild(colDiv);
        }
    }
}

function colorSquare(event) {
    // event.stopPropagation();
    event.target.style.backgroundColor = 'red';
}


