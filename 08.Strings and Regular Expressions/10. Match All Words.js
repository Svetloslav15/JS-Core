function matchAllWords(input) {
    let regex = /[a-zA-Z\_0-9]+/g;
    let matches = input.match(regex);
    console.log(matches.join('|'));
}