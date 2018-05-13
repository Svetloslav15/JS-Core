function oddNums(input) {
    console.log(input
        .filter((x, i) => i % 2 !== 0)
        .map(x => x * 2)
        .reverse());
}

oddNums([10, 15, 20, 4])