function prepareCanvas(size) {
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

const canvas = document.querySelector(".canvas");
prepareCanvas(10);