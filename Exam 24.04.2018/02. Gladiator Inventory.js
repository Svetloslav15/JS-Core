function inventoryG(input) {
    let inventory = [];
    let temp = input[0].split(' ');
    for (let i = 0; i < temp.length; i++) {
        inventory.push(temp[i]);
    }
    for (let index = 1; index < input.length; index++) {

        let [command, equipment] = input[index].split(' ');
        if (command === "Buy" && !inventory.includes(equipment)) {
            inventory.push(equipment);
        }
        else if (command === "Trash" && inventory.includes(equipment)) {
            let index = inventory.indexOf(equipment);
            inventory.splice(index, 1);
        }
        else if (command === "Repair" && inventory.includes(equipment)) {
            let index = inventory.indexOf(equipment);
            inventory.splice(index, 1);
            inventory.push(equipment);
        }
        else if (command === "Upgrade") {
            let tokens = equipment.split('-');
            if (inventory.includes(tokens[0])) {
                let index = inventory.indexOf(tokens[0]);
                let seq = inventory.splice(index + 1);
                seq.unshift(`${tokens[0]}:${tokens[1]}`);
                for (let i = 0; i < seq.length; i++) {
                    inventory.push(seq[i]);
                }
            }
        }
    }
    console.log(inventory.join(' '));
}

inventoryG(["SWORD Shield Spear",
    "Buy Bag",
    "Trash Shield",
    "Repair Spear",
    "Upgrade SWORD-Steel",
    "Fight!"])