function galacticElections(input) {
    let election = fillObject(input);
    let totalSum = 0;
    for (let key in election) {
        let winner = Object.keys(election[key])
            .sort((a, b) => election[key][b] - election[key][a])[0];
        let sum = 0;
        for (let innerKey in election[key]) {
            sum += election[key][innerKey];
        }
        election[key] = {};
        election[key]["candidate"] = winner;
        election[key]["votes"] = sum;
        totalSum += sum;
    }
    let players = {};
    for (let key in election) {
        if (!players.hasOwnProperty(election[key]["candidate"])){
            players[election[key]["candidate"]] = election[key]["votes"];
        }
        else{
            players[election[key]["candidate"]] += election[key]["votes"];
        }
    }
    let sortedPlayers = Object.keys(players)
        .sort((a, b) => players[b] - players[a]);
    let sortedPercents = Object.values(players)
        .sort((a, b) => b - a)
        .map(a => a / totalSum * 100)
        .map(a => Math.floor(a));

    if (sortedPercents[0] > 50){
        if (sortedPlayers.length > 1){
            console.log(`${sortedPlayers[0]} wins with ${players[sortedPlayers[0]]} votes`);
            console.log(`Runner up: ${sortedPlayers[1]}`);
            let systems = {};
            for (let system in election) {
                if (election[system]["candidate"] === sortedPlayers[1]){
                    systems[system] = election[system]["votes"];
                }
            }
            systems = Object.keys(systems).sort((a, b) => systems[b] - systems[a]);
            for (let system of systems) {
                console.log(`${system}: ${election[system]["votes"]}`);
            }
        }
        else {
            console.log(`${sortedPlayers[0]} wins with ${players[sortedPlayers[0]]} votes`);
            console.log(`${sortedPlayers[0]} wins unopposed!`);
        }
    }
    else{
        console.log(`Runoff between ${sortedPlayers[0]} with ${sortedPercents[0]}% and ${sortedPlayers[1]} with ${sortedPercents[1]}%`)
    }

    function fillObject(input) {
        let object = {};
        for (let line of input) {
            if (!object.hasOwnProperty(line.system)) {
                object[line.system] = {};
            }
            if (!object[line.system].hasOwnProperty(line.candidate)) {
                object[line.system][line.candidate] = line.votes;
            }
            else {
                object[line.system][line.candidate] += line.votes;
            }
        }
        return object;
    }
}