function travelTime(input) {
    let result = {};

    for (let index = 0; index < input.length; index++) {
        let [country, town, offer] = input[index].split(" > ");
        offer = Number(offer);
        let firstLetter = town[0].toUpperCase();
        town = firstLetter + town.slice(1);

        if (!result.hasOwnProperty(country)){
            result[country] = {};
        }
        if (!result[country].hasOwnProperty(town)){
            result[country][town] = 99999;
        }
        result[country][town] = Math.min(offer, result[country][town]);
    }

    let keys = Object.keys(result).sort();
    for (let country of keys) {
        let innerKeys = Object.keys(result[country]).sort((a, b) => result[country][a] - result[country][b]);
        let finalString = country + " -> ";
        for (let town of innerKeys) {
            finalString += `${town} -> ${result[country][town]} `;
        }
        console.log(finalString);
    }
}