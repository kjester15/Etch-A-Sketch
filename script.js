document.getElementById('sizeSlider').addEventListener('mouseup', createDivs);
document.getElementById('reset').addEventListener('click', restart);
window.addEventListener('load', createDivs);

function restart () {
    let numberColumns = document.getElementById('sizeSlider').value;
    let numberRows = document.getElementById('sizeSlider').value;
    // first loop is for the number of rows
    for (let i = 0; i < numberRows; i++) {
        document.getElementById(`divRow${i}`).style.backgroundColor = 'white';
        // second loop creates j divs inside i row
        for (let j = 0; j < numberColumns; j++) {
            document.getElementById(`divRow${i}divCol${j}`).style.backgroundColor = 'white';
        }
    }
}

function deleteOldEtch () {
    const etchContainer = document.getElementById('etch-container');
    const removeOldRows = document.querySelectorAll('.divRow');
    removeOldRows.forEach(removeOldRow => etchContainer.removeChild(removeOldRow));
}

function createDivs () {
    let numberColumns = document.getElementById('sizeSlider').value;
    let numberRows = document.getElementById('sizeSlider').value;
    
    deleteOldEtch();
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
    const divs = document.querySelectorAll('div.divCol');
    divs.forEach(div => div.addEventListener('mouseover', colorSquare));
}

function colorSquare(event) {
    event.target.style.backgroundColor = '#000000';
    event.stopPropagation();
};

function sliderChange() {
    let sliderVal = document.getElementById('sizeSlider').value;
    document.getElementById('size-box').innerHTML = 'sliderVal';
}