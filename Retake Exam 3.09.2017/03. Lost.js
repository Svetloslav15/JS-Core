function lost(keyboard, input) {
    let pattern = /(north|east)\D*(\d{2})[^,]*(,)\D*(\d{6})/gmi;
    let keyPattern = new RegExp(`${keyboard}(.*)${keyboard}`, 'g');
    let message = keyPattern.exec(input)[1];

    let match = pattern.exec(input);
    let n = '';
    let e = '';
    while(match){
        if (match[1].toLowerCase() === 'north'){
           n = `${match[2]}.${match[4]} N`;
        }
        else {
            e = `${match[2]}.${match[4]} E`;
        }
        match = pattern.exec(input);
    }
    console.log(n);
    console.log(e);
    console.log(`Message: ${message}`);
}