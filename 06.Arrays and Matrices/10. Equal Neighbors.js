function equalNeighbors(matrix) {
    let counterEqualNeighbors = 0;

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if (row + 1 < matrix.length){
                if (matrix[row][col] === matrix[row + 1][col]){
                    counterEqualNeighbors++;
                }
            }
            if (col + 1 < matrix[row].length){
                if (matrix[row][col] === matrix[row][col + 1]){
                    counterEqualNeighbors++;
                }
            }
        }
    }
    console.log(counterEqualNeighbors);
}