function programmer(meals, commands) {

    let mealsEaten = 0;

    for (let command of commands) {
        let tokens = command.split(' ');
        if (tokens[0] === 'Serve'){
            if (meals.length > 0) {
                console.log(`${meals.pop()} served!`);
            }
        }
        else if (tokens[0] === 'Eat'){
            if (meals.length > 0) {
                console.log(`${meals[0]} eaten`);
                mealsEaten++;
                meals.shift();
            }
        }
        else if (tokens[0] === 'Add'){
            if (tokens.length > 1) {
                meals.unshift(tokens[1]);
            }
        }
        else if (tokens[0] === 'Consume'){
            if (meals.length > 0) {
                let startIndex = Number(tokens[1]);
                let endIndex = Number(tokens[2]);
                if (startIndex >= 0 && endIndex < meals.length) {
                    let count = endIndex - startIndex + 1;
                    meals.splice(startIndex, count);
                    mealsEaten += count;
                    console.log('Burp!');
                }
            }
        }
        else if (tokens[0] === 'Shift'){
            if (meals.length > 0) {
                let startIndex = Number(tokens[1]);
                let endIndex = Number(tokens[2]);
                if (startIndex >= 0 && endIndex < meals.length) {
                    let temp = meals[startIndex];
                    meals[startIndex] = meals[endIndex];
                    meals[endIndex] = temp;
                }
            }
        }
        else if (tokens[0] === 'End'){
            if (meals.length > 0) {
                console.log(`Meals left: ${meals.join(', ')}`);
            }
            else{
                console.log(`The food is gone`);
            }
            console.log(`Meals eaten: ${mealsEaten}`);
            return;
        }
    }
}