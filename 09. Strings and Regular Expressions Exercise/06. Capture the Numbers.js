function captureNums(input) {
    let numbers = [];
    let pattern = /[0-9]+/g;
    for (let item of input) {
        let value = pattern.exec(item);
        while (value) {
            numbers.push(value);
            value = pattern.exec(item);
        }
    }
    console.log(numbers.join(' '));
}