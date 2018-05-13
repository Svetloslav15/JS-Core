function magicMatrices(input) {
    let allSum = input[0].reduce((a, b) => (a + b));

    for (let row = 0; row < input.length; row++) {
        let currentSum = 0;

        for (let col = 0; col < input[row].length; col++) {
            currentSum += input[row][col];
        }
        if (allSum !== currentSum) {
            console.log('false');
            return;
        }
    }

    for (let col = 0; col < input[0].length; col++) {
        let currentSum = 0;

        for (let row = 0; row < input.length; row++) {
            currentSum += input[row][col];
        }
        if (currentSum !== allSum){
            console.log('false');
            return;
        }
    }
    console.log('true');

}