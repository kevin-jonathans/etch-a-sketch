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
        canvasRow.appendChild(block);
    }
}

function paintBlock(event) {
    if (event.target.classList.contains("block") && event.buttons === 1) {
        event.target.style.backgroundColor = "black";
    }
}

const canvas = document.querySelector(".canvas");
canvas.addEventListener("mouseover", paintBlock);
