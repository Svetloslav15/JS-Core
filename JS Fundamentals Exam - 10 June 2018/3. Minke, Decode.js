function minkeDecode(input) {
    let startPoint = Number(input[0]);
    let endPoint = Number(input[1]);
    let rightWord = input[2];
    let sentance = input[3];

    let numsPattern = /[0-9]{3}(\.[0-9]+)*/gm;
    let nums = sentance.match(numsPattern);
    nums = nums.map(Number).map(x => Math.ceil(x));

    let capitalsPattern = /[A-Z][a-z]+[A-Z]/gm;
    let capitals = sentance.match(capitalsPattern);

    for (let index = 0; index < capitals.length; index++) {
        capitals[index] = capitals[index].slice(0, startPoint) + rightWord + capitals[index].slice(endPoint + 1);
        let word = capitals[index].slice(0, capitals[index].length - 1) + capitals[index][capitals[index].length - 1].toLowerCase();
        capitals[index] = word;
    }
    let outputSec = "";
    for (let index = 0; index < nums.length; index++) {
        if (index === 0) {
            outputSec += String.fromCharCode(nums[index]).toUpperCase();
        }
        else {
            outputSec += String.fromCharCode(nums[index]);
        }
    }
    console.log(`${capitals[0]} => ${outputSec}`);
}