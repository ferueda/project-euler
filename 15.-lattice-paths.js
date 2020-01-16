/*
Starting in the top left corner of a 2×2 grid, and only being able to move to the right and down, there are exactly 6 routes to the bottom right corner.

How many such routes are there through a 20×20 grid?
*/

function latticePaths(gridSize) {
  let grid = [];
  
  for (let i = 0; i <= gridSize; i++) {
    grid[i] = new Array(gridSize + 1).fill(0);
  }

  grid[0][0] = 1;
  
  for (let i = 0; i <= gridSize; i++) {
    for (let j = 0; j <= gridSize; j++) {
      if (i > 0) grid[i][j]+= grid[i-1][j];
      if (j > 0) grid[i][j]+= grid[i][j-1];
    }
  }
  return grid[gridSize][gridSize];
}

console.log(latticePaths(20));
