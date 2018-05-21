function matchDates(input) {
    for (let index = 0; index < input.length; index++) {
        let temp = input[index];
        let regex = /\b([0-9]{1,2})\-([A-Z][a-z]{2})\-([0-9]{4})\b/g;
        let match = regex.exec(temp);
        while (match){
            console.log(`${match[0]} (Day: ${match[1]}, Month: ${match[2]}, Year: ${match[3]})`);
            match = regex.exec(temp);
        }
    }
}