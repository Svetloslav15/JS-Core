function score(input) {
    input = JSON.parse(input);
    let result = '<table>\n  <tr><th>name</th><th>score</th></tr>\n';
    for (let object of input) {
        object['name'] = object['name']
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
        result += `  <tr><td>${object['name']}</td><td>${object['score']}</td></tr>\n`
    }
    result += '</table>';
    console.log(result);
}