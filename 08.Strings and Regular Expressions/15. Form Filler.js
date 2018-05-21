function formFilter(user, email, phoneNum, arr) {
    let result = [];
    let patternUser = new RegExp('\<\\![a-zA-Z]+\\!\>', 'g');
    let patternEmail = new RegExp('\<\\@[a-zA-Z]+\\@\>', 'g');
    let patternphoneNum = new RegExp('\<\\+[a-zA-Z]+\\+\>', 'g');

    for (let item of arr) {
        item = item.replace(patternUser, user);
        item = item.replace(patternEmail, email);
        item = item.replace(patternphoneNum, phoneNum);
        result.push(item);
    }
    console.log(result.join('\n'));
}