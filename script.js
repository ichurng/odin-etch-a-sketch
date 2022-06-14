


let container = document.querySelector('.container');

// Creating 16x16 div within a container div
let parentDiv;
let childDiv;
let counter = 0;
for (let i = 0; i < 16; i ++){
    parentDiv = document.createElement('div');
    parentDiv.classList.add("parent-div");
    for (let j = 0; j < 16; j ++){
        childDiv = document.createElement('div');
        childDiv.setAttribute('id', `'${counter}'`);
        childDiv.classList.add('child-div');
        parentDiv.appendChild(childDiv);
        counter += 1;
    }
    container.appendChild(parentDiv);
}

function etch(e){
    let cell = e.target;
    cell.classList.add('hover');
}

let squares = document.querySelectorAll('.child-div');
squares.forEach((square) => square.addEventListener('mouseenter', etch));


