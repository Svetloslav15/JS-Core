function population(input) {
    let result = new Map();
    for (let item of input) {
        let [name, value] = item.split(' <-> ');
        if (result.has(name)){
            result.set(name, result.get(name) + Number(value));
        }
        else{
            result.set(name, Number(value));
        }
    }
    for (let [key, value] of result) {
        console.log(`${key} : ${value}`);
    }
}