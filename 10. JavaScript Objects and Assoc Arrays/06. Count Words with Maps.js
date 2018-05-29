function countWords(input) {
    let result = new Map();
    for (let index = 0; index < input.length; index++) {
        let words = input[index].split(/[^a-zA-Z0-9\_]+/g).filter(x => x !== '');
        for (let word of words) {
            word = word.toLowerCase();
            if (result.has(word)){
                result.set(word, result.get(word) + 1);
            }
            else{
                result.set(word, 1);
            }
        }
    }
    let arr = Array.from(result.keys()).sort();
    for (let key of arr) {
        console.log(`\'${key}\' -> ${result.get(key)} times`);
    }
}