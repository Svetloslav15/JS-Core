function usernames(input) {
    let result = [];
    for (let index = 0; index < input.length; index++) {
        let tokens = input[index].split('@');
        let username = tokens[0] + '.';
        let domains = tokens[1].split('.');
        for (let item of domains) {
            username += item[0];
        }
        result.push(username);
    }
    console.log(result.join(', '));
}