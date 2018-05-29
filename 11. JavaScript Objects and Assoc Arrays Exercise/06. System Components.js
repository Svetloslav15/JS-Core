function systemComponents(input) {
    let system = {};

    for (let tokens of input) {
        let [systemName, componentName, subcomponentName] = tokens.split(' | ');
        if (system.hasOwnProperty(systemName) === false) {
            system[systemName] = {};
        }
        if (system[systemName].hasOwnProperty(componentName) === false) {
            system[systemName][componentName] = new Set();
        }

        system[systemName][componentName].add(subcomponentName);
    }
    for (let name in system) {
        console.log(`${name}`);
        for (let component in system[name]) {
            console.log(`|||${component}`);
            for (let sub in system[name][component]) {

                console.log(`||||||${sub}`);
            }
        }
    }
}

systemComponents([
    'Lambda | CoreA | A23',
    'Lambda | CoreB | B24',
    'Lambda | CoreA | A24',
    'Lambda | CoreA | A25',
    'Lambda | CoreC | C4',
    'Indice | Session | Default Stora',
    'Indice | Session | Default Security'])