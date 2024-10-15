
function getRandomColor() {
   const r = Math.floor(Math.random() * 256)
   const g = Math.floor(Math.random() * 256)
   const b = Math.floor(Math.random() * 256)
   return `rgb(${r}, ${g}, ${b})`
}



// create grid of square divs 

const container = document.querySelector(".container");

function createGrid(gridSize) {
    
    // clear grid
    
    container.innerHTML = '';

    const gridDivSize = 960 / gridSize;

    for (let i=0; i< gridSize * gridSize; i++) {
        const gridDiv = document.createElement("div");
        gridDiv.className = "gridDiv";
        
        gridDiv.style.width = `${gridDivSize}px`;
        gridDiv.style.height = `${gridDivSize}px`;
        
        container.appendChild(gridDiv);
    
    // hover event listener 
    
        gridDiv.addEventListener("mouseover",() => {
            gridDiv.style.backgroundColor = getRandomColor();
        });
    }
}

//  add button to change number of grids 

const btn = document.createElement("button");
btn.textContent = "Settings"
const body = document.querySelector("body");
body.insertBefore(btn, body.firstChild);

// initial grid creating
createGrid(16);

btn.addEventListener("click", () => {
    let gridSize = prompt("Enter grid size (max 100):");
    gridSize = parseInt(gridSize);
    
    if (!isNaN(gridSize) && gridSize > 0 && gridSize <= 100) {
        createGrid(gridSize); // Call the function to create a new grid
    } else {
        alert("Please enter a valid number between 1 and 100.");
    }

})