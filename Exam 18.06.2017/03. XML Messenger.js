function messenger(message) {
    let validationPattern = /^<message(\s+([a-z]+)=\"([A-Za-z0-9 .]+)"\s*?)*>([\S\s\n]+)<\/message>$/;
    if (!validationPattern.test(message)){
        console.log("Invalid message format");
        return;
    }
    let pattern = /\s+([a-z]+)=\"([A-Za-z0-9 .]+)"\s*?/gm;
    let sender = "";
    let recipient = "";
    let match = pattern.exec(message);
    while(match){
        if (match[1] === "to"){
            recipient = match[2];
        }
        else if (match[1] === "from"){
            sender = match[2];
        }
        match = pattern.exec(message);
    }
    if (sender === "" || recipient === ""){
        console.log("Missing attributes");
        return;
    }
    let bodyMatch = message.match(validationPattern);
    let body = bodyMatch[4].split('\n');
    let result = `<article>\n  <div>From: <span class=\"sender\">${sender}</span></div>\n`;
    result += `  <div>To: <span class=\"recipient\">${recipient}</span></div>\n  <div>\n`
    for (let p of body) {
        result += `   <p>${p}</p>\n`;
    }
    result += "  </div>\n</article>";
    console.log(result);
}