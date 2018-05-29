function table(input) {
    let result = "<table>\n";
    for (let object of input) {
        object = JSON.parse(object);
        result += '   <tr>\n';
        result += `     <td>${object['name']}</td>\n`;
        result += `     <td>${object['position']}</td>\n`;
        result += `     <td>${Number(object['salary'])}</td>\n`;
        result += '   <tr>\n';
    }
    result += '</table>';
    console.log(result);
}

table(['{"name":"Pesho","position":"Promenliva","salary":100000}',
    '{"name":"Teo","position":"Lecturer","salary":1000}',
    '{"name":"Georgi","position":"Lecturer","salary":1000}'])