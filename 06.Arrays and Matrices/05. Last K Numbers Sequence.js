function lastKNums(n, k) {
    let result = [];
    result[0] = 1;
    for (let index = 1; index < n; index++) {
        result[index] = result
            .slice(Math.max(0, result.length - k), index + k)
            .reduce((a, b) => {return a + b}, 0);
    }
    console.log(result.join(' '));
}