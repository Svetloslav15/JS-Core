function upperCase(input) {
    console.log(input.toUpperCase()
        .split(/\W+/)
        .filter(x => x !== '')
        .join(', '));
}