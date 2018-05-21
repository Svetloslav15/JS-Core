function countWords(input) {
    let object = {};
    for (let index = 0; index < input.length; index++) {
        let words = input[index].split(/[^a-zA-Z0-9\_]/g).filter(x => x !== '');
        for (let word of words) {
            if (object.hasOwnProperty(word)){
                object[`${word}`]++;
            }
            else{
                object[`${word}`] = 1;
            }
        }
    }
    console.log(JSON.stringify(object));
}