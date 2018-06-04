function surveyParser(text) {
    let validationPattern = /<svg>.+<\/svg>/gm;
    if (!validationPattern.test(text)) {
        console.log("No survey found");
        return;
    }
    let labelPattern = /\[([a-zA-Z\- ]+)\]/gm;
    if (!labelPattern.test(text)) {
        console.log("Invalid format");
        return;
    }
    let label = text.match(labelPattern)[0];
    label = label.substring(1, label.length - 1);

    let dataPattern = /<g><val>(\d+)<\/val>(\d+)<\/g>/gm;
    let ratings = 0;
    let count = 0;

    let match = dataPattern.exec(text);
    while(match){
        let currentRaiting = Number(match[1]) * Number(match[2]);
        ratings += currentRaiting;
        count += Number(match[2]);
        match = dataPattern.exec(text);
    }
    let result = ratings / count;
    result = precisionRound(result, 2);
    console.log(`${label}: ${result}`);

    function precisionRound(number, precision) {
        var factor = Math.pow(10, precision);
        return Math.round(number * factor) / factor;
    }
}
