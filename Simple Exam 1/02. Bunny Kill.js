function bunnyKill(input) {
    let cordinates = input.pop().split(' ');
    let matrix = [];
    let killed = 0;
    let snowballDamage = 0;

    for (let i = 0; i < input.length; i++) {
        matrix.push([]);
    }
    for (let row = 0; row < input.length; row++) {
        let temp = input[row].split(' ').map(Number);

        for (let col = 0; col < temp.length; col++) {
            let tempa = temp[col];
            matrix[row][col] = tempa;
        }
    }

    for (let tokens of cordinates) {
        let [bombRow, bombCol] = tokens.split(',');
        bombCol = +bombCol;
        bombRow = +bombRow;
        if (matrix[bombRow][bombCol] > 0) {
            let damage = matrix[bombRow][bombCol];
            killed++;
            snowballDamage += damage;

            if (bombRow + 1 < matrix.length) {
                matrix[bombRow + 1][bombCol] -= damage;
            }
            if (bombRow - 1 >= 0){
                matrix[bombRow - 1][bombCol] -= damage;
            }
            if (bombRow - 1 >= 0 && bombCol - 1 >= 0){
                matrix[bombRow - 1][bombCol - 1] -= damage;
            }
            if (bombRow - 1 >= 0 && bombCol + 1 < matrix.length){
                matrix[bombRow - 1][bombCol + 1] -= damage;
            }
            if (bombCol - 1 >= 0){
                matrix[bombRow][bombCol - 1] -= damage;
            }
            if (bombCol + 1 >= 0){
                matrix[bombRow][bombCol + 1] -= damage;
            }
            if (bombRow + 1 < matrix.length && bombCol - 1 >= 0){
                matrix[bombRow + 1][bombCol - 1] -= damage;
            }
            if (bombRow + 1 < matrix.length && bombCol + 1 >= 0){
                matrix[bombRow + 1][bombCol + 1] -= damage;
            }
            matrix[bombRow][bombCol] = 0;
        }
    }

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[0].length; col++) {
            if (matrix[row][col] > 0){
                killed++;
                snowballDamage += matrix[row][col];
            }
        }
    }
    console.log(snowballDamage);
    console.log(killed);
}
bunnyKill(["10 10 10",
"10 10 10",
"10 10 10",
"0,0 1,1"]);