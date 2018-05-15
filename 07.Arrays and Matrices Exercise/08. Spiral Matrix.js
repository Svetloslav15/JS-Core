function spiralMatrix(rows, cols) {
    let targetNum = rows * cols;
    let number = 1;
    let matrix = fillMatrixWithZeros(rows, cols);

    let currentRow = 0;
    let currentCol = 0;
    let rotations = 0;

    for(let i = 0; i <= rows / 2; i++)
    {
        for (let index = rotations; index < cols - rotations; index++) {
            matrix[currentRow][currentCol++] = number++;
        }
        currentCol--;
        for (let index = ++currentRow; index <= rows - 1 - rotations; index++) {
            matrix[currentRow++][currentCol] = number++;
        }
        currentRow--;
        for (let index = --currentCol; index >= rotations ; index--) {
            matrix[currentRow][currentCol--] = number++;
        }
        currentCol++;
        for (let index = --currentRow; index > rotations; index--) {
            matrix[currentRow--][currentCol] = number++;
        }
        rotations++;
        currentCol++;
        currentRow++;
    }
    printMatrix(matrix)
    function fillMatrixWithZeros(rows, cols) {
        let matrix = [];
        for (let row = 0; row < rows; row++) {
            matrix.push('0'
                .repeat(cols)
                .split('')
                .map(Number));
        }
        return matrix;
    }
    function printMatrix(matrix) {
        console.log(matrix.map(x => x.join(' ')).join('\n'));
    }
}
