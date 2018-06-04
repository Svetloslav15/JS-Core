function endsWith(text, end) {
    let result = text.substr(text.length - end.length);
    if (result === end){
        console.log(true);
    }
    else {
        console.log(false)
    }
}