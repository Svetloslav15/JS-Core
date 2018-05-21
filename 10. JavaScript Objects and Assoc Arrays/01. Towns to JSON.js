function towns(input) {
    let keys = input[0].split(/\s*\|\s*/).filter(x => x !== '');
    let result = [];
    for (let item of input.slice(1)) {
        let [town, lat, lon] = item.split(/\s*\|\s*/).filter(x => x !== '');
        let object = {};
        object[keys[0]] = town;
        object[keys[1]] = Number(lat);
        object[keys[2]] = Number(lon);

        result.push(object);
    }
    console.log(JSON.stringify(result));
}