function startsWith(text, start) {
    let result = text.substring(0, start.length);
    if (result === start){
        console.log(true);
    }
    else {
        console.log(false)
    }
}