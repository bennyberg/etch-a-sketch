
const grid = document.getElementById("grid");
let coloringActive = false;

// Style the container like a grid using flex-wrap
grid.style.display = "flex";
grid.style.flexWrap = "wrap";


const generateGrid = function (size) {
    grid.style.width = 960 + "px";
    const cellSize = (960 / size); //account for padding

    for (let r = 0; r < size; r++) {
        for (let c = 0; c < size; c++) {
            const cell = document.createElement("div");
            cell.style.width = cellSize + "px";
            cell.style.height = cellSize + "px";
            cell.style.border = "1px solid black";
            cell.style.boxSizing = "border-box"; // ensures borders fit inside
            cell.style.backgroundColor = "lightgray";


            cell.addEventListener("click", () => {
                coloringActive = !coloringActive;
                console.log("Coloring active:", coloringActive);
            });


            cell.addEventListener("mouseenter", () => {
                //first hover
                if (cell.style.backgroundColor === "lightgray") {
                    cell.style.backgroundColor = randomColor();
                }
                else {
                    // darken color by 10%
                    cell.style.backgroundColor = darkenColor(cell.style.backgroundColor);
                }

                cell.style.cursor = "pointer";
            });

            cell.addEventListener("mouseleave", () => {
                if (coloringActive) return;
                cell.style.backgroundColor = "lightgray";
            });

            grid.appendChild(cell);
            grid.style.justifyContent = "center";

        }
    }
}

const removeGrid = function () {
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }
}


// get the button by its id
const button = document.getElementById("input");

// add a click event
button.addEventListener("click", () => {
    // show a prompt dialog
    const userText = prompt("Enter grid size:");

    // check if the user actually typed something
    if (userText === null) {
        // user clicked cancel
        return;
    }

    // convert to number
    const num = Number(userText);

    if (!isNaN(num) && Number.isInteger(num) && num <= 100) {
        // alert("You entered the number: " + num);
        removeGrid();
        generateGrid(num);
    }
    else {
        alert("That is not a valid input!");
    }
});

// choose random color that isn't the original color of the cell
const randomColor = function () {
    let r, g, b;

    do {
        r = Math.floor(Math.random() * 256);
        g = Math.floor(Math.random() * 256);
        b = Math.floor(Math.random() * 256);
    } while (r === 211 && g === 211 && b === 211); // avoid lightgray}

    return `rgb(${r}, ${g}, ${b})`;
}

// darken color of cell by 10%
const darkenColor = function (rgbStr) {
    const match = rgbStr.match(/\d+/g); // extract numbers
    if (!match) return rgbStr; // safety
    let [r, g, b] = match.map(Number);
    r = Math.floor(r * 0.9);
    g = Math.floor(g * 0.9);
    b = Math.floor(b * 0.9);
    return `rgb(${r}, ${g}, ${b})`;
}

// Default grid
generateGrid(16)


