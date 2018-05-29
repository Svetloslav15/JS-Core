function rosettaStone(input) {
    let templateMLength = Number(input.shift());
    let templateMatrix = [];
    let messageMatrix = [];
    for (let row = 0; row < templateMLength; row++) {
        templateMatrix.push(input.shift().split(/\s+/).map(Number));
    }
    for (let index = 0; index < input.length; index++) {
        messageMatrix.push(input[index].split(/\s+/).map(Number));
    }
    let result = '';
    for (let row = 0; row < messageMatrix.length; row++) {
        for (let col = 0; col < messageMatrix[row].length; col++) {
            let current = messageMatrix[row][col];
            let modifier = templateMatrix[row % templateMatrix.length][col % templateMatrix[0].length];
            result += String.fromCharCode(((current + modifier) % 27) + 64);
        }
    }
    result = result.replace(/@/g, ' ');
    console.log(result);
}