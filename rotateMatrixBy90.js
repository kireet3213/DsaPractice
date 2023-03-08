//In place approach

function swap(matrix,a,b){
let temp= matrix[a][b];
matrix[a][b]= matrix[b][a];
matrix[b][a]= temp;

}
function rotateMatrix(matrix){
    //find transpose 
    for(let row=0; row<matrix.length;row++){
        for(let col=row+1; col<matrix.length; col++){
            // console.log(row,col);
       swap(matrix,row,col);
        }
    }
    //reverse the rows
    
    for( let i=0; i< matrix.length; i++){
        matrix[i].reverse();
    }
    
return matrix;
}

console.log(rotateMatrix([[1,2,3],[4,5,6],[7,8,9]])); // required- [[7,4,1],[8,5,2],[9,6,3]]

// [1,2,3]             [7,4,1]          [ 1, 4, 7 ] 
// [4,5,6]             [8,5,2]          [ 2, 5, 8 ]
// [7,8,9]             [9,6,3]          [ 3, 6, 9 ]