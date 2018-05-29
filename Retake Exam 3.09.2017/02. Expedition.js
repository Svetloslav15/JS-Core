function expedition(primary, secondary, overlayCord, startCord) {


    for (let tokens of overlayCord) {
        let [row, col] = [tokens[0], tokens[1]];
        for (let i = 0; i < secondary.length; i++) {
            if (i + row < primary.length) {
                for (let j = 0; j < secondary[0].length; j++) {
                    if (primary[i + row][j + col] != undefined && secondary[i][j] == 1) {
                        primary[i + row][j + col] = primary[i + row][j + col] == 0 ? 1 : 0;
                    }
                }
            }
        }
    }
    let [startRow, startCol] = [startCord[0], startCord[1]];

    let steps = 0;
    let exit = '';
    let currentPos = [startRow, startCol];
    while(true){
        if (currentPos[0] + 1 < primary.length && primary[currentPos[0] + 1][currentPos[1]] === 0){
            steps++;
            currentPos = [currentPos[0] + 1, currentPos[1]];
        }
    }
    for (let row = 0; row < primary.length; row++) {
        console.log(primary[row].join(', '));
    }
}
expedition([[1, 1, 0, 1, 1, 1, 1, 0],
            [0, 1, 1, 1, 0, 0, 0, 1],
            [1, 0, 0, 1, 0, 0, 0, 1],
            [0, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 1, 1, 1],
            [1, 0, 1, 1, 0, 1, 0, 0]],
    [[0, 1, 1],
        [0, 1, 0],
        [1, 1, 0]],
    [[1, 1],
        [2, 3],
        [5, 3]],
    [0, 2]
)