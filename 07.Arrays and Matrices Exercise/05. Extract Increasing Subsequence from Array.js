function extractIncrSub(input) {
    let max = 0;
    let result = [];
    input = input.map(Number);
    for (let index = 0; index < input.length; index++) {
        if (max <= input[index]) {
            result.push(input[index]);
            max = input[index];
        }
    }
    console.log(result.join('\n'));
}