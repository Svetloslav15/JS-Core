function equalNeighbors(matrix) {
    let counterEqualNeighbors = 0;

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if (row < matrix.length - 1) {
                if (matrix[row][col] === matrix[row + 1][col]) {
                    counterEqualNeighbors++;
                }
            }
            if (matrix[row][col] === matrix[row][col + 1]){
                counterEqualNeighbors++;
            }
        }
    }
    console.log(counterEqualNeighbors);
}
equalNeighbors([[2, 2, 5, 7, 4],
                [4, 0, 5, 3, 4],
                [2, 5, 5, 4, 2]])