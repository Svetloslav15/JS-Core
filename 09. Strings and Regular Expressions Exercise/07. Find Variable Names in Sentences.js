function names(input) {
    let result = [];
    let pattern = /\_([A-Za-z0-9]+)/gm;
    let regex = pattern.exec(input);
    while (regex) {
        result.push(regex[1]);
        regex = pattern.exec(input);
    }
    console.log(result.join(','));
}