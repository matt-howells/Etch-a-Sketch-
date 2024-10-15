// create 16x16 grid of square divs 

const container = document.querySelector(".container");

for (let i=0; i<256; i++) {
    const gridDiv = document.createElement("div");
    gridDiv.className = "gridDiv";
    container.appendChild(gridDiv);
    
    // hover event listener 
    
    gridDiv.addEventListener("mouseover",() => {
        gridDiv.style.backgroundColor = 'black'
    })


}

//  add button to change number of grids 

const btn = document.createElement("button");
btn.textContent = "Settings"
const body = document.querySelector("body");
body.insertBefore(btn, body.firstChild);

btn.addEventListener("click", () => {
    alert()
})