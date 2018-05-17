function figure(num) {
    if (num === 2){
        console.log('+'.repeat(3));
        return;
    }
    else{
        console.log(`+${'-'.repeat((2 * num - 4) / 2)}+${'-'.repeat((2 * num - 4) / 2)}+`);
        for (let i = 0; i < (num - 4) / 2; i++) {
            console.log(`|${' '.repeat((2 * num - 4) / 2)}|${' '.repeat((2 * num - 4) / 2)}|`)
        }
        console.log(`+${'-'.repeat((2 * num - 4) / 2)}+${'-'.repeat((2 * num - 4) / 2)}+`);
        for (let i = 0; i < (num - 4) / 2; i++) {
            console.log(`|${' '.repeat((2 * num - 4) / 2)}|${' '.repeat((2 * num - 4) / 2)}|`)
        }
    }
    console.log(`+${'-'.repeat((2 * num - 4) / 2)}+${'-'.repeat((2 * num - 4) / 2)}+`);
}