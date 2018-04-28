function chessboard(num) {
    let result = "<div class=\"chessboard\">\n";
    for (let i = 1; i <= num; i++)
    {
        result += "<div>\n";
        let count = 0;
        for (let j = 1; j <= num; j++)
        {
            let color = (j + i) % 2 === 1 ? "white" : "black";
            result += `<span class="${color}"></span>\n`;
        }
        result += " </div>\n";
        count++;
    }
    result += "</div>\n";
    console.log(result);
}
