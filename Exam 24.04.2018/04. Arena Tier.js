function arenaTier(input) {
    let arena = {};

    for (let index = 0; index < input.length; index++) {
        if (input[index].includes("->")){
            let [gladiator, technique, skill] = input[index].split(' -> ');
            skill = Number(skill);
            if (!arena.hasOwnProperty(gladiator)){
                arena[gladiator] = {};
                arena[gladiator]["total"] = 0;
            }
            if (!arena[gladiator].hasOwnProperty(technique)){
                arena[gladiator][technique] = 0;
            }
            if (arena[gladiator][technique] < skill){
                arena[gladiator][technique] += skill;
                arena[gladiator]["total"] += skill;
            }
        }
        else if (input[index].includes("vs")){
            let [firstG, secondG] = input[index].split(' vs ');
            if (arena.hasOwnProperty(firstG) && arena.hasOwnProperty(secondG)){
                for (let technique in arena[firstG]) {
                    if (arena[secondG].hasOwnProperty(technique) && technique !== "total"){
                        if (arena[secondG][technique] > arena[firstG][technique]){
                            delete arena[firstG];
                            break;
                        }
                        else if (arena[secondG][technique] < arena[firstG][technique]){
                            delete arena[secondG];
                            break;
                        }
                    }
                }
            }
        }
    }
    let keys = Object.keys(arena)
        .sort()
        .sort((a, b) => {
            return arena[b]["total"] - arena[a]["total"]
        });

    for (let gladiator of keys) {
        console.log(`${gladiator}: ${arena[gladiator]["total"]} skill`);
        delete arena[gladiator]["total"];
        let innerKeys = Object.keys(arena[gladiator])
            .sort()
            .sort((a, b) => {
                return arena[gladiator][b] - arena[gladiator][a]
            });
        for (let technique of innerKeys) {
            console.log(`- ${technique} <!> ${arena[gladiator][technique]}`);
        }
    }
}