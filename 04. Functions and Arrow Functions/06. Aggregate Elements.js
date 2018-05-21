function aggregateElements(input) {
    aggregate(input, 0, (a, b) => a + b);
    aggregate(input, 0, (a, b) => a + 1 / b);
    aggregate(input, '', (a, b) => a + b);
    function aggregate(input, initialValue, func) {
        for (let index = 0; index < input.length; index++) {
            initialValue = func(initialValue, input[index]);
        }
        console.log(initialValue);
    }
}