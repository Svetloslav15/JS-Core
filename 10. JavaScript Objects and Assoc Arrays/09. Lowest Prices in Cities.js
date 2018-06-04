function lowestPricesCities(input) {

    let map = new Map();
    for (let line of input) {
        let [town, product, price] = line.split(' | ');
        if (!map.has(product)){
            map.set(product, new Map());
        }
        map.get(product).set(town, +price);
    }

    for (let [key, value] of map) {
        let sortedValues = Array.from(value.keys())
            .sort((a, b) => {
                return value.get(a) - value.get(b)
            });
        console.log(`${key} -> ${value.get(sortedValues[0])} (${sortedValues[0]})`)
    }
}