function marketing(input) {
    let result = {};
    for (let line of input) {
        line = line.split('-');
        if (line.length === 2) {
            let [subscriber, person] = line;
            if (result.hasOwnProperty(subscriber) && result.hasOwnProperty(person)) {
                result[person]["subscribers"].push(subscriber);
                result[subscriber]["subscriberOf"]++;
            }
        }
        else {
            let person = line[0];
            if (!result.hasOwnProperty(person)) {
                result[person] = {};
                result[person]["subscribers"] = [];
                result[person]["subscriberOf"] = 0;
            }
        }
    }
    let people = Object.keys(result)
        .sort((a, b) => {
            let diff = result[b]["subscribers"].length - result[a]["subscribers"].length;
            if (diff === 0) {
                let innerDiff = result[b]["subscriberOf"] - result[a]["subscriberOf"];
                return innerDiff;
            }
            return diff;
        });
    let person = people[0];
    console.log(person);
    let counter = 0;
    for (let sub in result[person]["subscribers"]) {
        console.log(`${++counter}. ${result[person]["subscribers"][sub]}`);
    }
}