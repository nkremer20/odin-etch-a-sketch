// Max width of container is 960px
const MAX_WIDTH = 960;
const DEFAULT_BOXES = 16;

function createGrid(maxWidth, boxCount) {
    const container = document.querySelector('.container');

    // Calculate the pixel size of the boxes based on the max width so the amount in boxCount can fit on one line
    boxSize = maxWidth/boxCount;

    for (let i = 0; i < boxCount * boxCount; i++) {
        const newBox = document.createElement('div');
        newBox.classList.add('box');
        newBox.setAttribute('style',  `width: ${boxSize}px; height: ${boxSize}px; box-sizing: border-box; border: 1px solid black;`);
        container.appendChild(newBox);
    }
};

createGrid(MAX_WIDTH, DEFAULT_BOXES);

const boxes = document.querySelectorAll('.box');
console.log(boxes)

boxes.forEach((box) => {
    box.addEventListener('click', () => {
        console.log('updating background color');
        box.classList.add('box-fill')
    })
})