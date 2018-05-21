function helix(input) {
    let text = 'ATCGTTAGGG';
    let step = 1;
    let oc = 0;

    for (let i = 1; i <= input; i++) {
        if (step === 1){
            console.log(`**${text[oc++]}${text[oc++]}**`);
            step++;
            if (oc >= 10){
                oc = 0;
            }
        }
        else if (step === 2){
            console.log(`*${text[oc++]}--${text[oc++]}*`);
            step++;
            if (oc >= 10){
                oc = 0;
            }
        }
        else if (step === 3){
            console.log(`${text[oc++]}----${text[oc++]}`);
            step++;
            if (oc >= 10){
                oc = 0;
            }
        }
        else if (step === 4){
            console.log(`*${text[oc++]}--${text[oc++]}*`);
            step = 1;
            if (oc >= 10){
                oc = 0;
            }
        }
    }
}