document.getElementById('sizeSlider').addEventListener('input', createDivs);
document.getElementById('sizeSlider').addEventListener('input', sliderChange);
document.getElementById('reset').addEventListener('click', restart);
window.addEventListener('load', createDivs);
document.getElementById('rgbBtn').addEventListener('click', rgbMode);
document.getElementById('blackBtn').addEventListener('click', blackMode);
document.getElementById('shadeBtn').addEventListener('click', shadeMode);
document.getElementById('eraser').addEventListener('click', eraseMode);

let mode = 'black';

function eraseMode () {
    mode = 'erase';
}

function rgbMode () {
    mode = 'color';
}

function shadeMode () {
    mode = 'shade';
}

function blackMode () {
    mode = 'black';
}

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
    if (mode == 'shade') {
        let value = event.target.style.backgroundColor;
        value = value.substring(4,value.length-1);
        value = value.replaceAll(" ", "");
        value = value.split(',');
        if (value == 0) {
            event.target.style.backgroundColor = 'rgb(125, 125, 125)';
            event.stopPropagation();
        }
        // increase black value each time the cursor passes over another value
        else if (value != 0) {
            let r = Number(value[0]);
            let newR = r-12.5;
            if (newR < 0) {
                newR = 0;
            }
            let g = Number(value[1]);
            let newG = g-12.5;
            if (newG < 0) {
                newG = 0;
            } 
            let b = Number(value[2]);
            let newB = b-12.5
            if (newB < 0) {
                newB = 0;
            }
            event.target.style.backgroundColor = `rgb(${newR}, ${newG}, ${newB})`;
        }
    }
    else if (mode == 'color') {
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        event.target.style.backgroundColor = `rgb(${r},${g},${b})`;
        event.stopPropagation();
    }
    else if (mode == 'erase') {
        event.target.style.backgroundColor = 'white';
        event.stopPropagation();
    }
    else if (mode == 'black') {
        event.target.style.backgroundColor = 'black';
        event.stopPropagation();
    }
};

function sliderChange() {
    let slider = document.getElementById('sizeSlider');
    let output = document.getElementById('size-box');
    output.innerHTML = `${slider.value} x ${slider.value}`;
}