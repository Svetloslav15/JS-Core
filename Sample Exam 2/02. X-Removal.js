function xRemoval(input) {
    let matrix = [];
    let copy = [];

    for (let line of input) {
        line = line.split("").filter(x => x !== '');
        matrix.push(line);
        copy.push([]);
    }
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            copy[row][col] = matrix[row][col];
        }
    }
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            matrix[row][col] = matrix[row][col].toLowerCase();
        }
    }
    for (let row = 1; row < input.length - 1; row++) {
        for (let col = 1; col < matrix[row].length; col++) {
            if (matrix[row - 1][col - 1] === matrix[row][col] &&
                matrix[row - 1][col + 1] === matrix[row][col] &&
                matrix[row + 1][col - 1] === matrix[row][col] &&
                matrix[row + 1][col + 1] === matrix[row][col]) {

                [copy[row][col], copy[row + 1][col + 1], copy[row + 1][col - 1] , copy[row - 1][col + 1], copy[row - 1][col - 1]] = " ";
            }
        }
    }

    copy = copy.map(x => x.filter(y => y !== " "));
    console.log(copy.map(x => x.join('')).join('\n'));
}