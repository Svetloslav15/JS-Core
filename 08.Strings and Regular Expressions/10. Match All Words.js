function matchAllWords(input) {
    let regex = new RegExp(/[a-zA-Z\_0-9]+/g);
    let matches = input.match(regex);
    console.log(matches.join('|'));
}