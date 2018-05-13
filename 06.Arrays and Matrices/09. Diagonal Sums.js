function diagonalsSum(matrix) {
    let mainSum = 0;
    let secSum = 0;
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if (row === col){
                mainSum += matrix[row][col];
            }
            if (row + col + 1 === matrix.length){
                secSum += matrix[row][col];
            }
        }
    }
    console.log(`${mainSum} ${secSum}`)
}