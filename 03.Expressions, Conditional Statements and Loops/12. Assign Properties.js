function asignProperties(input) {

    let x1 = input[0];
    let x2 = input[1];
    let x3 = input[2];
    let x4 = input[3];
    let x5 = input[4];
    let x6 = input[5];

    return JSON.parse(`{ "${x1}": "${x2}", "${x3}": "${x4}", "${x5}": "${x6}" }`);
}