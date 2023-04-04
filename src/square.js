/**
 * This function creates a div element with a CSS grid layout.
 * It creates cells, assigns a random color,and adds them to the grid.
 * The function returns the resulting square element.
 */
export function generateHtmlSquare(mySquare) {
  if(mySquare === null){
    return null
  }
    const square = document.createElement("div");
    square.style.display = "grid";
    square.style.gridTemplateColumns = `repeat(${mySquare[0].length}, 1fr)`;
    square.style.gridTemplateRows = `repeat(${mySquare.length}, 1fr)`;
  
    for (let i = 0; i < mySquare.length; i++) {
      for (let j = 0; j < mySquare[i].length; j++) {
        const cell = document.createElement("div");
        cell.style.backgroundColor = mySquare[i][j].color;
        square.appendChild(cell);
      }
    }
    return square;
  }
  
  /**
   * The generateSquare function takes three arguments: width, height, and numColors.
   *  It generates a square with the specified dimensions and number of colors.
   *  Each cell in the square is represented as an object with x, y, and color properties.
   */
  export function generateSquare(width, height, numColors) {
    if(width<1 || height<1 || numColors<1){
      return null
  }
    const colors = [];
    for (let i = 0; i < numColors; i++) {
      colors.push(getRandomColor());
    }
    const cells = [];
    for (let y = 0; y < height; y++) {
      const row = [];
      for (let x = 0; x < width; x++) {
        const color = colors[Math.floor(Math.random() * numColors)];
        row.push({ x, y, color });
      }
      cells.push(row);
    }
    return cells;
  }
  /**
   * The findBiggestArea function takes the square generated by generateSquare as an argument.
   * It loops through all the cells in the square and groups them by color in the areas object.
   * Then, it loops through all the color groups and finds the one with the largest area using the getAreaSize function.
   * Finally, it returns an object with the color and size properties of the biggest area.
   */
  
  export function findBiggestArea(square) {
    if(square === null){
      return null
    }
    const areas = {};
    square.forEach((row) => {
      row.forEach((cell) => {
        if (!areas[cell.color]) {
          areas[cell.color] = [];
        }
        areas[cell.color].push(cell);
      });
    });
    let biggestArea = null;
    Object.entries(areas).forEach(([color, cells]) => {
      const areaSize = getAreaSize(cells);
      if (!biggestArea || areaSize > biggestArea.size) {
        biggestArea = { color, size: areaSize };
      }
    });
    return biggestArea;
  }
  
  /**
   * The getAreaSize function takes an array of cells and calculates the size of the area they form.
   * It uses a breadth-first search algorithm to visit all the connected cells in the area.
   */
  
  export function getAreaSize(cells) {
    let maxSize = 0
    const visited = new Set();
    const queue = [cells[0]];
    cells.forEach(cell => {
      if (visited.has(cell)) {
        return;
      }
      visited.add(cell);
      let size = 0;
      const queue = [cell];
      while (queue.length > 0) {
        const cell = queue.shift();
        size++;
        getNeighbors(cell, cells).forEach((neighbor) => {
          if (!visited.has(neighbor)) {
            visited.add(neighbor);
            queue.push(neighbor);
          }
        });
      }
      maxSize = Math.max(maxSize, size);
    });
    return maxSize;
  }
  
  /**
   * The getNeighbors function takes a cell and an array of cells and returns an array of its neighbors.
   */
  export function getNeighbors(cell, cells) {
    const { x, y } = cell;
    return cells.filter(
      (c) =>
        (c.x === x - 1 && c.y === y) ||
        (c.x === x + 1 && c.y === y) ||
        (c.x === x && c.y === y - 1) ||
        (c.x === x && c.y === y + 1)
    );
  }
  /**
   * The getRandomColor function generates a random hexadecimal color code.
   */
  
  export function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }