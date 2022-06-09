


let container = document.createElement('div');
container.classList.add('container');
document.body.appendChild(container);

// Creating 16x16 div within a container div
let parentDiv;
let childDiv;
for (let i = 0; i < 16; i ++){
    parentDiv = document.createElement('div');
    parentDiv.classList.add("parent-div");
    for (let j = 0; j < 16; j ++){
        childDiv = document.createElement('div');
        childDiv.classList.add('child-div');
        parentDiv.appendChild(childDiv);
    }
    container.appendChild(parentDiv);
}



