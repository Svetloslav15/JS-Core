function cappyJuice(input) {
    let juiceMenu = {};
    let bottles = {};

    for (let tokens of input) {
        let [juice, quantity] = tokens.split(' => ');

        quantity = Number(quantity);
        if (juiceMenu.hasOwnProperty(juice) === false) {
            juiceMenu[juice] = quantity;
        }
        else {
            juiceMenu[juice] += quantity;
        }

        while (juiceMenu[juice] >= 1000) {
            if (bottles.hasOwnProperty(juice) === false) {
                bottles[juice] = 1;
            }
            else {
                bottles[juice] += 1;
            }
            juiceMenu[juice] -= 1000;
        }
    }

    for (let bottle in bottles) {
        console.log(`${bottle} => ${bottles[bottle]}`);
    }
}

cappyJuice(['Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789',])