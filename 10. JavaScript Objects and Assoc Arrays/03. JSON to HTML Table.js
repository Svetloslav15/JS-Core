function jsonToTable(input) {
    let object = JSON.parse(input);
    let result = "<table>\n   <tr><th>Name</th><th>Price</th></tr>\n";

    console.log(object);
    for (let [key, value] in object) {
        result += `   <tr><td>${value}</td><td>${object[value]}</td></tr>\n`;
    }
    result += "</table>";
    console.log(result);
}
jsonToTable('[{"Name":"Tomatoes & Chips","Price":2.35},{"Name":"J&B Chocolate","Price":0.96}]')