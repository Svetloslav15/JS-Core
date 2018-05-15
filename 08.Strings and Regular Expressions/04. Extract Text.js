function extractText(input) {
    let result = [];

    while(true) {
        let startIndex = input.indexOf('(');
        let endIndex = input.indexOf(')');
        if (startIndex < 0 || endIndex < 0 || endIndex < startIndex){
            break;
        }
        result.push(input.substring(startIndex + 1, endIndex));
        input = input.substring(endIndex + 1);
    }
    console.log(result.join(", "))
}
extractText('Rakiya (Bulgarian brandy) is self-made liquor (alcoholic drink)')