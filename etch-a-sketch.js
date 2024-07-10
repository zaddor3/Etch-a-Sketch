const container = document.querySelector(".container")
const range = document.querySelector(".range")
const gridRange = document.querySelector(".gridRange")
const eraser = document.querySelector(".eraser")
const colorPalette = document.querySelector(".colorPalette")
let gridSize = gridRange.value
let currentColor = "black"

gridRange.addEventListener("input", changeSize)
colorPalette.addEventListener("input", handleColorChange)
eraser.addEventListener("click", handleEraser)

function createGrid (gridSize){
    for (let i = 0; i < gridSize*gridSize; i++){
        const grid = document.createElement("div")
        grid.classList.add("box")
        grid.style.backgroundColor = "white"
        grid.style.width = "20px"
        grid.style.height = `calc(100% / ${gridSize})`
        // grid.style.border = "1px solid green"
        grid.style.boxSizing = "border-box"
        grid.style.flex = `1 0 calc(100% / ${gridSize})`
        container.appendChild(grid)
    }
    let boxes = document.querySelectorAll(".box")
    boxes.forEach(box => {
        box.addEventListener("mouseover", colorDiv)
    })
}

function handleEraser(){
    currentColor = "#FFFFFF"
    eraser.classList.add("active")
}

function handleColorChange(event){
    currentColor = event.target.value
    eraser.classList.remove("active")
}

function colorDiv(event){
    event.target.style.backgroundColor = currentColor
}

function changeSize(){
    gridSize = gridRange.value
    container.innerHTML = ""
    createGrid(gridSize)
    range.textContent = gridSize + " x " + gridSize
}

changeSize()