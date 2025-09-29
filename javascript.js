const grid = document.getElementById("grid");
    const rows = 16;
    const cols = 16;
    const cellSize = 60;

    // Style the container like a grid using flex-wrap
    grid.style.display = "flex";
    grid.style.flexWrap = "wrap";
    grid.style.width = (cols * (cellSize + 8)) + "px"; // +4 for border/margin

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const cell = document.createElement("div");
        cell.style.width = cellSize + "px";
        cell.style.height = cellSize + "px";
        cell.style.margin = "2px";
        cell.style.border = "1px solid black";
        cell.style.backgroundColor = "lightblue";
        cell.style.display = "flex";
        cell.style.alignItems = "center";
        cell.style.justifyContent = "center";
        cell.textContent = `${r},${c}`; // show row/col
        grid.appendChild(cell);
      }
    }