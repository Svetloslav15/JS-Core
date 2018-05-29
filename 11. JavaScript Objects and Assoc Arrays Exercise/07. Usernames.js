function usernames(input) {
    let result = new Set;
    for (let line of input) {
        result.add(line);
    }

    function sortA(a, b) {
        if (a.length < b.length){
            return -1;
        }
        if (a.length > b.length){
            return 1;
        }
    }
    console.log([...result].sort(sortA).join('\n'));
}

usernames(['Ashton',
    'Kutcher',
    'Ariel',
    'Lilly',
    'Keyden',
    'Aizen',
    'Billy',
    'Braston']);