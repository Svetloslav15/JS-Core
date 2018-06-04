function gameOfEpiness(input, matrix) {
    let kingdoms = fillKingdoms(input);
    kingdoms = fights(matrix);
    let kingdomsWins = kingdomWinsAndLosses();

    let keys = Object.keys(kingdomsWins)
        .sort()
        .sort((a, b) => kingdomsWins[b]["wins"] - kingdomsWins[a]["wins"])
        .sort((a, b) => kingdomsWins[a]["losses"] - kingdomsWins[b]["losses"]);

    let generalAndArmy = {};
    for (let general in kingdoms[keys[0]]) {
        generalAndArmy[general] = kingdoms[keys[0]][general]["army"];
    }


    console.log(`Winner: ${keys[0]}`);
    let finalKeys = Object.keys(kingdoms[keys[0]])
        .sort((a, b) => generalAndArmy[b] - generalAndArmy[a]);
    for (let general of finalKeys) {
        console.log(`/\\general: ${general}`);
        console.log(`---army: ${kingdoms[keys[0]][general]["army"]}`);
        console.log(`---wins: ${kingdoms[keys[0]][general]["wins"]}`);
        console.log(`---losses: ${kingdoms[keys[0]][general]["losses"]}`);
    }

    function fights(matrix) {
        for (let line of matrix) {
            let [attackK, attackG, defK, defG] = [line[0], line[1], line[2], line[3]];

            if (attackK !== defK){
                if (kingdoms[attackK][attackG]["army"] > kingdoms[defK][defG]["army"]){
                    kingdoms[attackK][attackG]["wins"]++;
                    kingdoms[attackK][attackG]["army"] = Math.floor(0.1 * kingdoms[attackK][attackG]["army"] + kingdoms[attackK][attackG]["army"]);
                    kingdoms[defK][defG]["losses"]++;
                    kingdoms[defK][defG]["army"] = Math.floor(kingdoms[defK][defG]["army"] - 0.1 * kingdoms[defK][defG]["army"]);
                }
                else if (kingdoms[attackK][attackG]["army"] < kingdoms[defK][defG]["army"]){
                    kingdoms[attackK][attackG]["losses"]++;
                    kingdoms[attackK][attackG]["army"] = Math.floor(kingdoms[attackK][attackG]["army"] - 0.1 * kingdoms[attackK][attackG]["army"]);
                    kingdoms[defK][defG]["wins"]++;
                    kingdoms[defK][defG]["army"] = Math.floor(kingdoms[defK][defG]["army"] + 0.1 * kingdoms[defK][defG]["army"]);
                }
            }
        }
        return kingdoms;

    }
    function fillKingdoms(input) {
        let result = {};
        for (let line of input) {
            let kingdom = line.kingdom;
            let general = line.general;
            let army = line.army;

            if (!result.hasOwnProperty(kingdom)) {
                result[kingdom] = {};
            }
            if (!result[kingdom].hasOwnProperty(general)){
                result[kingdom][general] = {};
            }
            if (!result[kingdom][general].hasOwnProperty("army")){
                result[kingdom][general]["army"] = army;
                result[kingdom][general]["wins"] = 0;
                result[kingdom][general]['losses'] = 0;
            }
            else{
                result[kingdom][general]["army"] += army;
            }
        }
        return result;
    }
    function kingdomWinsAndLosses() {
        let kingdomsWins = {};
        for (let kingdom in kingdoms) {
            for (let general in kingdoms[kingdom]) {
                if (!kingdomsWins.hasOwnProperty(kingdom)) {
                    kingdomsWins[kingdom] = {};
                    kingdomsWins[kingdom]["wins"] = 0;
                    kingdomsWins[kingdom]["losses"] = 0;
                }
                kingdomsWins[kingdom]["wins"] += kingdoms[kingdom][general]["wins"];
                kingdomsWins[kingdom]["losses"] += kingdoms[kingdom][general]["losses"];
            }
        }
        return kingdomsWins
    }
}