function inventory(input) {
    let result = [];
    for (let tokens of input) {
        let [heroName, heroLevel, items] = tokens.split(' \/ ');
        let object = {};

        object['name'] = heroName;
        object['level'] = Number(heroLevel);
        if (tokens.split(' \/ ').length > 2){
            items = items.split(', ');
            object['items'] = items;
        }
        else {
            object['items'] = [];
        }
        result.push(object);
    }

    console.log(JSON.stringify(result));
}

inventory(['Isacc / 25 / Apple',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'])