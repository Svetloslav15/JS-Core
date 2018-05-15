function censorship(text, replacers) {
    for (let item of replacers) {
        let regex = new RegExp(item, 'g');
        text = text.replace(regex, '-'.repeat(item.length));
    }
    console.log(text);
}
censorship('roses are red, violets are blue', [', violets are', 'red'])