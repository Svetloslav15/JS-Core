function secretData(input) {
    let pattern = /(\*[A-Z]\s*[a-z]+)(?=\s|$)*(\+[0-9\-]{10})*(?=\s|$)(\_[a-zA-Z0-9]+)*(\![a-zA-Z0-9]+)*/g;

    for (let item of input) {
        let match = item.match(pattern)
        if (match){
            match = match.filter(x => x !== '');
            for (let index = 0; index < match.length; index++) {
                item = item.replace(match[index], '|'.repeat(match[index].length));
            }
            console.log(item);
        }
    }
}