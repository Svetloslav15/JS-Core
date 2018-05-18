function capitalizeWords(input) {
    let words = input.split(' ');
    let result = '';
    for (let i = 0; i < words.length; i++) {
        let temp = words[i][0].toUpperCase();
        result += temp;
        for (let index = 1; index < words[i].length; index++) {
            temp = words[i][index].toLowerCase();
            result += temp;
        }
        result += ' ';
    }
    console.log(result);
}