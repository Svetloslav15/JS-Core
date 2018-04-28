function countLetters(text, letter) {
    let count = 0;
    for (let letterText of text) {
        if (letterText === letter){
            count++;
        }
    }
    console.log(count);
}
