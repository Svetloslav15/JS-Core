function attack(matrix) {
    for (let row = 0; row < matrix.length; row++) {
        matrix[row] = matrix[row].split(/\s+/).map(Number);
    }
    let primarySum = 0;
    let secondarySum = 0;
    for (let row = 0; row < matrix.length; row++) {
        primarySum += matrix[row][row];
        secondarySum += matrix[row][matrix.length - row - 1];
    }
    if (primarySum === secondarySum) {
        for (let row = 0; row < matrix.length; row++) {
            for (let col = 0; col < matrix[0].length; col++) {
                if (row !== col && row + col + 1 !== matrix.length) {
                    matrix[row][col] = primarySum;
                }
            }
        }
    }
    console.log(matrix.map(x => x.join(" ")).join("\n"));
}

attack(['5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1']);