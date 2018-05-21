function matchMultiplication(input) {
    console.log(input.replace( /(-?[0-9]+)\s*\*\s*(-?[0-9]+(\.[0-9]+)?)/g, (match, a, b) => Number(a) * Number(b)));
}