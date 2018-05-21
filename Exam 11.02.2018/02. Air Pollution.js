function airPollution(inputM, force) {
    let map = [];
    let pollutedAreas = [];
    for (let i = 0; i < inputM.length; i++) {
        map[i] = inputM[i].split(' ').map(Number);
    }
    for (let index = 0; index < force.length; index++) {
        map = refactor(map, force[index]);
    }
    for (let row = 0; row < 5; row++) {
        for (let col = 0; col < 5; col++) {
            if (map[row][col] >= 50) {
                pollutedAreas.push(`[${row}-${col}]`);
            }
        }
    }
    if (pollutedAreas.length > 0) {
        console.log(`Polluted areas: ${pollutedAreas.join(', ')}`)
    }
    else {
        console.log(`No polluted areas`);
    }

    function refactor(map, force) {
        let forceTemp = force.split(' ');
        let type = forceTemp[0];
        let value = Number(forceTemp[1]);
        if (type === 'breeze') {
            for (let col = 0; col < 5; col++) {
                map[value][col] -= 15;
                if (map[value][col] < 0) {
                    map[value][col] = 0;
                }
            }
        }
        if (type === 'gale') {
            for (let row = 0; row < 5; row++) {
                map[row][value] -= 20;
                if (map[row][value] < 0) {
                    map[row][value] = 0;
                }
            }
        }
        if (type === 'smog') {
            for (let row = 0; row < 5; row++) {
                for (let col = 0; col < 5; col++) {
                    map[row][col] += value;
                }
            }
        }
        return map;
    }
}