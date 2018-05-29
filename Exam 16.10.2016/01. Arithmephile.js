function arithmephile(input) {
    let biggestMultiplication = Number.MIN_SAFE_INTEGER;

    while (input.length > 0) {
        let currentMultiplication = 1;
        let num = input.shift();
        if (num >= 0 && num <= 9) {
            for (let count = 0; count <= num - 1; count++) {
                if (count < input.length) {
                    currentMultiplication *= input[count];
                }
            }
            if (currentMultiplication > biggestMultiplication) {
                biggestMultiplication = currentMultiplication;
            }
        }
    }
    console.log(biggestMultiplication);
}