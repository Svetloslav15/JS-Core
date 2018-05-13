function negativeAndPost(input) {
    let result = [];
    for (let item of input) {
        if (Number(item) < 0) {
            result.unshift(Number(item));
        }
        else {
            result.push(Number(item));
        }
    }
    result.forEach(x => console.log(x));
}