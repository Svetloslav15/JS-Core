function expedition(primary, secondary, overlayCord, startCord) {

    for (let tokens of overlayCord) {
        let [rowStart, colStart] = tokens;

        for (let row = 0; row < secondary.length; row++) {
            for (let col = 0; col < secondary[0].length; col++) {
                if (primary[row + rowStart][col + colStart] != undefined && secondary[row][col] == 1) {
                    primary[row + rowStart][col + colStart] = primary[row + rowStart][col + colStart] == 0 ? 1 : 0;
                }

            }
        }
    }
    console.log(primary.map(x => x.join(" ")).join('\n'));

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