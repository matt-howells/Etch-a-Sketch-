// create 16x16 grid of square divs 

const container = document.querySelector(".container");

for (i=0; i<256; i++) {
    const gridDiv = document.createElement("div");
    gridDiv.className = "gridDiv";
    container.appendChild(gridDiv);
    
}


