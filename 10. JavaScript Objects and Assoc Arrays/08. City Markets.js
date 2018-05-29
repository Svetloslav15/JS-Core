function cityMarkets(input) {
    let result = {};

    for (let tokens of input) {
        let [town, product, temp] = tokens
            .split(' -> ')
            .filter(x => x !== '');
        let [sales, price] = temp.split(' : ');

        if (result.hasOwnProperty(town)) {
            if (result[town].hasOwnProperty(product)) {
                result[town][product] += Number(sales) * Number(price);
            }
            else {
                result[town][product] = Number(sales) * Number(price);
            }
        }
        else {
            result[town] = {};
            result[town][product] = Number(sales) * Number(price);
        }
    }
    for (let item in result) {
        console.log(`Town - ${item}`);
        for (let obj in result[item]) {
            console.log(`$$$${obj} : ${result[item][obj]}`);
        }
    }
}