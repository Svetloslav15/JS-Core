function lowestPricesCities(input) {

    let result = new Map();

    for (let tokens of input) {
        let [town, product, price] = tokens.split(' | ');

        price = Number(price);
        if (result.has(town) === false) {
            result.set(town, new Map());
        }
        result.get(product).set(town, price)
    }

    for (let [product, insideMap] of result) {
        let priceTemp = Number.MAX_VALUE;

    }
    for (let obj in result) {
        for (let item in result[obj]) {
            console.log(`${item} -> ${result[item]}(${obj})`);
        }
    }
}

lowestPricesCities(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10'])