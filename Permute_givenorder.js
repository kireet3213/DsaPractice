function permute(A, P, n) {
    // For each element of P
    for (let i = 0; i < n; i++) {
        let next = i;
 
        // Check if it is already
        // considered in cycle
        while (P[next] >= 0) {
 
            // Swap the current element according
            // to the permutation in P
            let x = A[i];
            A[i] = A[P[next]];
            A[P[next]] = x;
 
            let temp = P[next];
            // Subtract n from an entry in P
            // to make it negative which indicates
            // the corresponding move
            // has been performed
            P[next] -= n;
            next = temp;
            console.log(P);
        }
    }
    return A;
}
 
// Driver code
 
let A = [5, 6, 7, 8];
let P = [3, 2, 1, 0];
let n = A.length;
 
console.log(permute(A, P, n));