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
        box.addEventListener('mouseover', () => {
            const currentBackground = box.style.backgroundColor.split(',');
            if (currentBackground[0].includes('rgba')){
                console.log(currentBackground);
                // const currentOpacity = parseFloat(currentBackground.slice(-3, -1));
                const currentOpacity = parseFloat(currentBackground[3].replace(')', ''));
                currentBackground[3] = ' ' + (currentOpacity + 0.1) + ')';
                box.style.backgroundColor = currentBackground.join(',');
                console.log(`Opacity changed to ${currentBackground[3]}`);
            } else {
                console.log('Opacity already at 100%')
            }

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

