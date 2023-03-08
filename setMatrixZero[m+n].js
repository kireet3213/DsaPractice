
var setMatrixZeroes = function (matrix) {
  const colZero = Array(matrix[0].length);
  const rowZero = Array(matrix.length);

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[0].length; col++) {
      if (matrix[row][col] === 0) {
        colZero[col] = 0;
        rowZero[row] = 0;
      }
    }
  }

  for (let row = 0; row < matrix.length; row++) {
    if (rowZero[row] === 0) {
      matrix[row] = Array(matrix[0].length).fill(0);
      continue;
      // because the whole array is already set to 0,
      // no need to check each value's column has 0 or not,
      // for updating the individual value to 0.
    }
    for (let col = 0; col < matrix[0].length; col++) {
      if (colZero[col] === 0) {
        matrix[row][col] = 0;
      }
    }
  }
  return matrix;
};
console.log(
  setMatrixZeroes([
    [1, 2, 3, 4],
    [1, 0, 2, 6],
    [2, 3, 4, 0],
  ])
); 