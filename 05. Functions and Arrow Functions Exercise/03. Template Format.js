function templateFormat(input) {
    let result = '<?xml version="1.0" encoding="UTF-8"?>\n' +
        '<quiz>\n';
    for (let index = 0; index < input.length; index+=2) {
        let question = input[index];
        let answer = input[index + 1];
        result += `  <question>\n    ${question}\n  </question>\n  <answer>\n    ${answer}\n  </answer>\n`;
    }
    result += '</quiz>';
    console.log(result);
}