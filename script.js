let container = document.querySelector('.container');
createGrid(16);

// Allow users to reconfigure the number of squares in the grid, resetting the grid
let button = document.querySelector('.button');
button.addEventListener('click', (e) => {
    let squareNum = prompt("Please enter a grid size between 1 and 100: ");
    let validate = validateInput(squareNum);
    while (!validate){
        window.alert("Invalid input, please try again")
        squareNum = prompt("Please enter a grid size between 1 and 100: ");
        validate = validateInput(squareNum);
    }
    removeChildren('container');
    createGrid(squareNum);
    console.log(squareNum);
})

// Validate grid input
function validateInput(input){
    if (isNaN(input)){
        return false;
    }
    else if (input < 1 || input > 100){
        return false;
    }
    return true
}

// Removes all children node given for a given class name
function removeChildren(className){
    console.log(className);
    let parent = document.querySelector(`.${className}`);
    let child  = parent.lastElementChild;
    while (child){
        parent.removeChild(child);
        child = parent.lastElementChild;
    }
}

// Creating 16x16 div within a container div
function createGrid(x){
    console.log(x);
    let parentDiv;
    let childDiv;
    let counter = 0;
    for (let i = 0; i < x; i ++){
        parentDiv = document.createElement('div');
        parentDiv.classList.add("parent-div");
        for (let j = 0; j < x; j ++){
            childDiv = document.createElement('div');
            childDiv.setAttribute('id', `'${counter}'`);
            childDiv.classList.add('child-div');
            parentDiv.appendChild(childDiv);
            counter += 1;
        }
        container.appendChild(parentDiv);
    }

    // Creating hover affect to mark grids whenever cursors pass through certain grids
    function etch(e){
        let cell = e.target;
        cell.classList.add('hover');
    }
    let squares = document.querySelectorAll('.child-div');
    squares.forEach((square) => square.addEventListener('mouseenter', etch));
}






