function countOccurrences(target, text) {;
    let count = 0;
    let index = 1;
    while(index > 0){
        index = text.indexOf(target);
        count++;
        text = text.substr(index + 1);
    }
    console.log(count - 1);
}