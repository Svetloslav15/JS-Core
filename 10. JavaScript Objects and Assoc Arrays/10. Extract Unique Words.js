function uniqueWords(input) {
    let result = new Set();
    for (let word of input) {
        let words = word
            .split(/[^a-zA-Z0-9_]/)
            .filter(x => x !== '');
        for (let word of words) {
            result.add(word.toLowerCase());
        }
    }
    console.log([...result.values()].join(', '));
}