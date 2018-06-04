function matchMultiplication(input) {
    console.log(input.replace( /(-?\d+)\s*\*\s*(-?\d+(\.\d+)?)/g, (match, a, b) => Number(a) * Number(b)));
}