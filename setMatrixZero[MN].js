var setZeroes = function(matrix){

    // Copy the original array
    const tempMatrix = JSON.parse(JSON.stringify(matrix));

    // Temporary array for recording which column will be 0
    const colZeroRecord = Array(matrix[0].length).fill(1);
    // Scan through the original matrix
    for(let row = 0; row < matrix.length; row++){
        for(let col = 0; col < matrix[0].length; col++){
            if(matrix[row][col] === 0){
                // Set the whole corresponding array in colZeroRecord to 0
                tempMatrix[row] = Array(matrix[0].length).fill(0);
                // Set the corresponding value in colZeroRecord to 0
                colZeroRecord[col] = 0; 
            }
        }
    }

    // Scan through the temporary matrix with checking the values in colZeroRecord
    for(let row = 0; row < matrix.length; row++){
        for(let col = 0; col < matrix[0].length; col++){
            if(colZeroRecord[col] === 0){  
                tempMatrix[row][col] = 0;
            }
        }
    }

    // Copy the whole temporary matrix to the input matrix
    for(let row = 0; row < matrix.length; row++){
        for(let col = 0; col < matrix[0].length; col++){
            matrix[row][col] = tempMatrix[row][col]
        }
    }

    return matrix;
}

console.log(setZeroes([[1,2,3],
    [1,0,2],
    [2,3,4]]))
