function modifyAverage(input) {
    let num = input;
    while (true) {
        let sum = 0;
        for (let index = 0; index < num.length; index++) {
            sum += Number(num[index]);
        }
        let average = sum / num.length;
        if (average > 5) {
            break;
        }
        else {
            num += '9';
        }
    }
    console.log(num);
}