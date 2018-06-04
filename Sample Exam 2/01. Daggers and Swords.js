function swords(input) {
    let result = `<table border="1">\n<thead>\n<tr><th colspan="3">Blades</th></tr>\n`;
    result += `<tr><th>Length [cm]</th><th>Type</th><th>Application</th></tr>\n</thead>\n<tbody>\n`;
    input = input.map(x => Math.floor(x)).filter(x => x > 10);
    for (let bladeLength of input) {
        let temp = bladeLength % 5;
        let blade = "";
        let type = "";
        switch (temp){
            case 0: blade = "*rap-poker";break;
            case 1: blade = "blade";break;
            case 2: blade = "quite a blade";break;
            case 3: blade = "pants-scraper";break;
            case 4: blade = "frog-butcher";break;
        }
        if (bladeLength > 40){
            type = "sword";
        }
        else{
            type = "dagger";
        }
        result += `<tr><td>${bladeLength}</td><td>${type}</td><td>${blade}</td></tr>\n`;
    }
    result += "</tbody>\n</table>";
    console.log(result);
}
