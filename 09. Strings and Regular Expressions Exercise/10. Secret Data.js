function secretData(input) {
    let pattern = /(\*[A-Z]\s*[a-z]+)(?=\s|$)*(\+[0-9\-]{10})*(?=\s|$)(\_[a-zA-Z0-9]+)*(\![a-zA-Z0-9]+)*/g;

    for (let item of input) {
        let match = item.match(pattern).filter(x => x != '');
        if (match){
            for (let index = 0; index < match.length; index++) {
                item = item.replace(match[index], '|'.repeat(match[index].length));
            }
            console.log(item);
        }
    }
}
secretData(['He said something about "finishing work" with subject !2491a23BVB34Q and returning to Base _Aurora21'])