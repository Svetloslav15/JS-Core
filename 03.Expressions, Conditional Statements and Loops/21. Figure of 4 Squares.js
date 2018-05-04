function figure(num) {
    console.log(`+${'-'.repeat(num - 2)}+${'-'.repeat(num - 2)}+`);
    if (num % 2 === 0)
    {
        for(let j = 1; j <= 2; j++) {
            for (let i = 1; i <= num % 4 - 1; i++) {
                console.log(`|${' '.repeat(num - 2)}|${' '.repeat(num - 2)}|`)
            }
            console.log(`+${'-'.repeat(num - 2)}+${'-'.repeat(num - 2)}+`);
        }
    }
    else{
        for(let j = 1; j <= 2; j++) {
            for (let i = 1; i <= num / 2 - 1; i++) {
                console.log(`|${' '.repeat(num - 2)}|${' '.repeat(num - 2)}|`)
            }
            console.log(`+${'-'.repeat(num - 2)}+${'-'.repeat(num - 2)}+`);
        }
    }
}

