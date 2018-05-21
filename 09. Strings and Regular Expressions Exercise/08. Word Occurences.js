function occurences(text, word) {
    let temp = `\\b${word}\\b`;
    let regex = new RegExp(temp, 'ig');
    let match = text.match(regex);
    if (match) {
        console.log(match.length);
    }
    else {
        console.log(0);
    }
}