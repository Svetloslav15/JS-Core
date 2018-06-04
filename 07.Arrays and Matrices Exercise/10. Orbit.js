function orbit(input) {
    let rows = input[0];
    let cols = input[1];
    let startRow = input[2];
    let startCol = input[3];
    let step = 0;
    let filder = 2;

    let matrix = [];
    for (let i = 0; i < rows; i++) {
        matrix.push([]);
    }
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            matrix[i][j] = 0;
        }
    }
    matrix[startRow][startCol] = 1;
    while (true) {

        for (let col = startCol - step - 1; col <= startCol + step + 1; col++) {
            if (col >= 0 && col < cols && startRow - step - 1 >= 0) {
                matrix[startRow - step - 1][col] = filder;
            }
        }
        for (let row = startRow - step; row <= startRow + 1 + step; row++) {
            if (startCol + step + 1 < cols && row >= 0 && row < rows) {
                matrix[row][startCol + step + 1] = filder;
            }
        }
        for (let col = startCol - step - 1; col <= startCol + step; col++) {
            if (col >= 0 && col < cols && startRow + step + 1 < rows) {
                matrix[startRow + step + 1][col] = filder;
            }
        }
        for (let row = startRow - step; row <= startRow + step; row++) {
            if (row >= 0 && row < rows && startCol - 1 - step >= 0) {
                matrix[row][startCol - step - 1] = filder;
            }
        }
        let count = 0;
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                if (matrix[i][j] === 0) {
                    count++;
                }
            }
        }
        if (count === 0) {
            break;
        }
        filder++;
        step++;
    }
    console.log(matrix.map(row => row.join(" ")).join("\n"));
}
orbit([10, 10, 8, 0])