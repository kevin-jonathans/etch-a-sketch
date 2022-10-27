function prepareCanvas(size = 16) {
    canvas.replaceChildren();  // Remove all child node
    for (let i = 0; i < size; i++) {
        const canvasRow = prepareBlock(size);
        canvas.appendChild(canvasRow);
    }
}

function prepareBlock(size) {
    const canvasRow = document.createElement("div");
    canvasRow.setAttribute("class", "row");
    for (let i = 0; i < size; i++) {
        const block = document.createElement("div");
        block.setAttribute("class", "block");
        // block.textContent = "X";
        canvasRow.appendChild(block);
    }
    return canvasRow;
}

function paintBlock(event) {
    // event.buttons === 1 is holding left click
    if (event.target.classList.contains("block") && event.buttons === 1) {
        event.target.style.backgroundColor = activeColor;
    }
    if (activeColor === rainbowColor) {
        rainbowColor = getRandomColor();
        activeColor = rainbowColor;
    }
    event.preventDefault();
}

function updateColor() {
    const checkActiveColor = (activeColor === brushColor) ? true : false;
    brushColor = colorPicker.value;
    if (checkActiveColor) {
        activeColor = brushColor;
    }
}

function colorBlock(event) {
    activeButton(event);
    activeColor = brushColor;
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function colorBlockRainbow(event) {
    activeButton(event);
    rainbowColor = getRandomColor();
    activeColor = rainbowColor;
}

function eraseBlock(event) {
    activeButton(event);
    activeColor = eraserColor;
}

function updateCanvasSize() {
    canvasSize = changeSize.value;
    sizeLabel.textContent = `Size : ${canvasSize} x ${canvasSize}`;
    prepareCanvas(canvasSize);
}

function clearCanvas() {
    prepareCanvas(canvasSize);
}

function activeButton(event) {
    // remove class "active" on prior button and add the class on new button
    const current = document.querySelector(".active");
    current.classList.toggle("active");
    event.target.classList.toggle("active");
}

let brushColor = "rgb(24, 24, 24)";  // #181818
let rainbowColor;
const eraserColor = "whitesmoke";

let activeColor = brushColor;

let canvasSize = 16;  // Default size

const canvas = document.querySelector(".canvas");
canvas.addEventListener("mouseover", paintBlock);  // listen when mouse move
canvas.addEventListener("mousedown", paintBlock);  // to paint first div on mouse over

const colorPicker = document.querySelector("#color");
colorPicker.addEventListener("change", updateColor)

const colorButton = document.querySelector(".color-button");
colorButton.addEventListener("click", colorBlock);

const rainbowButton = document.querySelector(".rainbow-button");
rainbowButton.addEventListener("click", colorBlockRainbow);

const eraserButton = document.querySelector(".eraser-button");
eraserButton.addEventListener("click", eraseBlock);

const changeSize = document.querySelector("#canvas-size");
const sizeLabel = document.querySelector(".input-range label");
changeSize.addEventListener("change", updateCanvasSize);

const clearButton = document.querySelector(".clear-button");
clearButton.addEventListener("click", clearCanvas);
