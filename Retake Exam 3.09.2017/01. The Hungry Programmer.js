function programmer(meals, commands) {

    let mealsEaten = 0;

    for (let command of commands) {
        let tokens = command.split(' ');
        if (tokens[0] === 'Serve'){
            console.log(`${meals.pop()} served!`);
        }
        else if (tokens[0] === 'Eat'){
            console.log(`${meals[0]} eaten`);
            mealsEaten++;
            meals.shift();
        }
        else if (tokens[0] === 'Add'){
            meals.unshift(tokens[1]);
        }
        else if (tokens[0] === 'Consume'){
            let startIndex = Number(tokens[1]);
            let endIndex = Number(tokens[2]);
            if (startIndex >= 0 && endIndex < meals.length) {
                let count = endIndex - startIndex + 1;
                meals.splice(startIndex, count);
                mealsEaten += count;
                console.log('Burp!');
            }
        }
        else if (tokens[0] === 'Shift'){
            let startIndex = Number(tokens[1]);
            let endIndex = Number(tokens[2]);
            if (startIndex >= 0 && endIndex < meals.length) {
                let temp = meals[startIndex];
                meals[startIndex] = meals[endIndex];
                meals[endIndex] = temp;
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