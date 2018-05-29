function wall(input) {
    let amountOfConcrete = [];
    input = input.map(Number);
    let change = false;

    while (!change){
        change = true;
        let crete = 0;
        for (let index = 0; index < input.length; index++) {
            if (input[index] < 30){
                input[index]++;
                change = false;
                crete += 195;
            }
        }
        if (!change){
            amountOfConcrete.push(crete);
        }
    }

    let finalCost = amountOfConcrete.reduce((a, b) => a + b) * 1900;
    console.log(amountOfConcrete.join(', '));
    console.log(finalCost + ' pesos');
}