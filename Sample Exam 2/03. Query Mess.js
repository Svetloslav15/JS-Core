function queryMess(input) {
    let pattern = /([^&?]+)=([^&?]+)/gm;
    for (let line of input) {
        let object = {};
        let regex = pattern.exec(line);
        while (regex) {
            let key = regex[1].replace(/%20/g, ' ').replace(/\++/g, ' ').replace(/\s+/, ' ').trim();
            let value = regex[2].replace(/%20/g, ' ').replace(/\++/g, ' ').replace(/\s+/, ' ').trim();

            if (!object.hasOwnProperty(key)) {
                object[key] = [];
            }
            object[key].push(value);
            regex = pattern.exec(line);
        }
        let result = "";
        for (let prop in object) {
            result += `${prop}=[${object[prop].join(", ")}]`;
        }
        console.log(result);
    }
}