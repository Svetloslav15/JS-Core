function biggestEl(matrix) {
    console.log(matrix
        .map(x => x
            .sort((a, b) =>  b - a)[0])
        .sort((c, d) => d - c)[0]);
}