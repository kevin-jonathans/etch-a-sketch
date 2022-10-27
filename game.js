function prepareCanvas(size = 16) {
    canvas.replaceChildren();  // Remove all child node
    for (let i = 0; i < size; i++) {
        const canvasRow = document.createElement("div");
        canvasRow.setAttribute("class", "row");
        canvas.appendChild(canvasRow);
        prepareBlock(size, canvasRow);
    }
}

function prepareBlock(size, canvasRow) {
    for (let i = 0; i < size; i++) {
        const block = document.createElement("div");
        block.setAttribute("class", "block");
        // block.textContent = "X";
        canvasRow.appendChild(block);
    }
}

function paintBlock(event) {
    if (event.target.classList.contains("block") && event.buttons === 1) {
        event.target.style.backgroundColor = activeColor;
    }
    if (activeColor === rainbowColor) {
        rainbowColor = getRandomColor();
        activeColor = rainbowColor;
    event.preventDefault()
    }
}

function updateColor() {
    brushColor = colorPicker.value;
    activeColor = brushColor;
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
    const current = document.querySelector(".active");
    current.classList.toggle("active");
    event.target.classList.toggle("active");
}

let brushColor = "rgb(24, 24, 24)";  // #181818
let rainbowColor;
const eraserColor = "whitesmoke";
let activeColor = brushColor;

let canvasSize = 16;

const canvas = document.querySelector(".canvas");
canvas.addEventListener("mouseover", paintBlock);
canvas.addEventListener("mousedown", paintBlock);

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
