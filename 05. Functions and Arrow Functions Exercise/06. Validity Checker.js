function validityChecker(input) {
    let x1 = input[0];
    let y1 = input[1];
    let x2 = input[2];
    let y2 = input[3];
    let first = calculateDistance(x1, y1, 0,0);
    let second = calculateDistance(x2, y2, 0,0);
    let third = calculateDistance(x1, y1, x2,y2);
    isValid(first,x1, y1, 0,0);
    isValid(second,x2, y2, 0,0);
    isValid(third,x1, y1, x2,y2);
    function calculateDistance(x1, y1, x2, y2) {
        let distance = Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
        return distance;
    }
    function isValid(temp, x1, y1, x2, y2) {
        if (temp % 1 === 0){
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
        }
        else{
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
        }
    }
}