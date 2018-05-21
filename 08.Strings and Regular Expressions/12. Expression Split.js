function expressionSplit(input) {
    console.log(input
        .split(/[\s\,\(\)\;\.]/g)
        .filter(x => x !== '')
        .join('\n'));
}