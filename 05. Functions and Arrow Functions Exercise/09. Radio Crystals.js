function radioCrystals(input) {
    let finalThickness = input[0];
    let cut = (x) => x / 4;
    let lap = (x) => x - x * 0.2;
    let grind = (x) => x - 20;
    let etch = (x) => x - 2;
    let xray = (x) => ++x;
    let transportingAndWashing = (x) =>{
        console.log('Transporting and washing');
        return Math.floor(x);
    };

    for (let index = 1; index < input.length; index++) {
        let microns = input[index];

        console.log(`Processing chunk ${microns} microns`);
        microns = executeOperation(finalThickness, microns, cut, 'Cut');
        microns = executeOperation(finalThickness, microns, lap, 'Lap');
        microns = executeOperation(finalThickness, microns, grind, 'Grind');
        microns = executeOperation(finalThickness, microns, etch, 'Etch');

        if (microns + 1 === finalThickness){
            microns = executeOperation(finalThickness, microns, xray, 'X-ray');
        }
        console.log(`Finished crystal ${finalThickness} microns`)
    }
    function executeOperation(finalThickness, currentThickness, operation, operationName) {
        let counter = 0;
        while (operation(currentThickness) >= finalThickness || currentThickness - finalThickness === 1){
            currentThickness = operation(currentThickness);
            counter++;
        }
        if (counter > 0) {
            console.log(`${operationName} x${counter}`);
            currentThickness = transportingAndWashing(currentThickness);
        }
        return currentThickness;
    }
    // 83/100
}