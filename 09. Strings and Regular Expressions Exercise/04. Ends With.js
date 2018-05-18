function endsWith(text, end) {
    let result = text.substr(text.length - end.length);
    if (result === end){
        console.log(true);05. Capitalize the Words
    }
    else {
        console.log(false)
    }
}