function investigation(input) {
    let delimeter = input[1];
    let companies = input[0].split(delimeter);
    companies = companies.map(x => x.trim());
    let validSentances = [];
    let invalidSentances = [];

    for (let index = 2; index < input.length; index++) {
        let valid = true;
        let sentance = input[index].toLowerCase();

        for (let company of companies) {
            if (sentance.indexOf(company) === -1){
                valid = false;
                break;
            }
        }
        if (valid){
            validSentances.push(sentance);
        }
        else{
            invalidSentances.push(sentance);
        }
    }

    if (validSentances.length > 0){
        let counter = 1;
        console.log(`ValidSentences`);
        for (let sentance of validSentances) {
            console.log(`${counter++}. ${sentance}`);
        }
    }
    if (validSentances.length > 0 && invalidSentances.length > 0){
        console.log('='.repeat(30));
    }
    if (invalidSentances.length > 0){
        console.log("InvalidSentences");
        let counter = 1;

        for (let sentance of invalidSentances) {
            console.log(`${counter++}. ${sentance}`);
        }
    }
}