const sketchContainer = document.querySelector(".sketch-container");
const generateSketch = document.querySelector(".generate");

function createGrid(size) {

    sketchContainer.textContent = "";

    for(let i = 0; i < size * size; i++) {
        const div = document.createElement("div");
        div.classList.add("box")
        div.style.flexBasis = `${100 / size}%`;

        sketchContainer.appendChild(div);
        hover(div);
    }
}

generateSketch.addEventListener("click", () => {
    const size = getGridSize();
    createGrid(size);

});

function getGridSize() {
    let size;
    do{
        size = Number(prompt("type what size are the sketcher: "))    
    } while(isNaN(size) || size < 1 || size > 100);
    
    return size;
}

function hover(div) {
    div.addEventListener("mouseover", () => {
        div.classList.add("active");
    })
}