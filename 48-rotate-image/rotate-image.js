function rotate(matrix) {
    const n = matrix.length;

// first we swap each element [i,j] -> [j,i]
// swap each row 
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }

   
    for (let i = 0; i < n; i++) {
        matrix[i].reverse();
    }
}