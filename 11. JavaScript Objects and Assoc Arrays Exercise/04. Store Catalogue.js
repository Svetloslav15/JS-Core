function catalogue(input) {
    let result = {};
    for (let tokens of input) {
        let [productName, productPrice] = tokens.split(' : ');
        let firstLetter = productName[0];
        if (result.hasOwnProperty(firstLetter) === false) {
            result[firstLetter] = {};
        }
        result[firstLetter][productName] = Number(productPrice);
    }
    let keys = Object.keys(result).sort();

    for (let key of keys) {
        console.log(key);
        let innerKeys = Object.keys(result[key]).sort();
        for (let product of innerKeys) {
            console.log(`  ${product}: ${result[key][product]}`);
        }
    }
}