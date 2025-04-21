// Max width of container is 960px
const MAX_WIDTH = 960;
const DEFAULT_BOXES = 16;

const container = document.querySelector('.container');

function randomColor() {
    return Math.floor(Math.random() * 256);
};

function createGrid(maxWidth, boxCount) {
    // Calculate the pixel size of the boxes based on the max width so the amount in boxCount can fit on one line
    boxSize = maxWidth/boxCount;

    for (let i = 0; i < boxCount * boxCount; i++) {
        const newBox = document.createElement('div');

        // Get random color between 0 and 255 to randomly set the background color on the boxes
        const r = randomColor();
        const g = randomColor();
        const b = randomColor();

        newBox.classList.add('box');
        newBox.setAttribute('style',  `width: ${boxSize}px; height: ${boxSize}px; box-sizing: border-box; border: 1px solid black; background-color: rgb(${r}, ${g}, ${b}, 0);`);
        container.appendChild(newBox);
    }
};

function fillBoxes(boxes) {
    boxes.forEach((box) => {
        box.addEventListener('click', () => {
            const currentBackground = box.style.backgroundColor;
            console.log(currentBackground.slice(-4, -1))
            const currentOpacity = parseInt(currentBackground.slice(-4, -1));
            console.log(currentOpacity);
            box.style.backgroundColor = 'black';
        });
    });
}

createGrid(MAX_WIDTH, DEFAULT_BOXES);

// Event listener to change background color of box on click
let boxes = document.querySelectorAll('.box');
fillBoxes(boxes);

// Event listener to prompt the user to create a custom grid
const newGridButton = document.querySelector('button');
newGridButton.addEventListener('click', () => {
    const gridSize = parseInt(prompt('Enter a grid size of 100 or less'));
    console.log(`type: ${typeof(gridSize)} | ${gridSize}`);

    if (gridSize <= 100 && gridSize > 0 && gridSize != NaN) {
        // Remove all the box elements inside the container
        while (container.lastElementChild) {
            container.removeChild(container.lastElementChild);
        }

        createGrid(MAX_WIDTH, gridSize);
        boxes = document.querySelectorAll('.box');
        fillBoxes(boxes);
    } else {
        alert('Grid size invalid.  Please try again.')
    };
})

