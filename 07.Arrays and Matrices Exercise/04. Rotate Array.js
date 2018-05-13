function rotateArray(input) {
    let numberOfRotates = Number(input.pop()) % 1000;

    for (let rotates = 0; rotates < numberOfRotates; rotates++) {
        let temp = input.pop();
        input.unshift(temp);
    }
    console.log(input.join(' '));
}