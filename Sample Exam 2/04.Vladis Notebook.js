function vNotebook(input) {
    let notebook = {};

    for (let line of input) {
        line = line.split(/\|/);
        let color = line[0];
        if (!notebook.hasOwnProperty(color)) {
            notebook[color] = {
                win: 0,
                loss: 0,
                rank: 0,
                opponents: []};
        }
        if (line[1] === "age") {
            let [color, age] = [line[0], line[2]];
            notebook[color]["age"] = age;
        }
        else if (line[1] === "name") {
            let [color, name] = [line[0], line[2]];
            notebook[color]["name"] = name;
        }
        else {
            let [color, winOrLoss, opponent] = [line[0], line[1], line[2]];
            notebook[color][winOrLoss]++;
            notebook[color]["opponents"].push(opponent);
        }
    }
    let result = {};
    for (let color of Object.keys(notebook).sort()) {
        if (notebook[color]["name"] && notebook[color]["age"]){
            result[color] = {
                age: notebook[color]["age"],
                name: notebook[color]["name"],
                opponents: notebook[color]["opponents"].sort(),
                rank: ((notebook[color]["win"] + 1) / (notebook[color]["loss"] + 1)).toFixed(2)
            };
        }
    }
    console.log(JSON.stringify(result));
}