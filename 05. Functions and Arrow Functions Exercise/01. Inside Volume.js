function main(input){
    function isInside(x, y, z) {
        let x1= 10, x2= 50, y1=20, y2=80, z1=15, z2 = 50;
        if (x >= x1 && x <= x2 &&
            y >= y1 && y <= y2 &&
            z >= z1 && z <= z2){
            return true;
        }
        return false;
    }
    input = input.map(Number);
    for (let index = 0; index < input.length; index+=3) {
        let x = input[index];
        let y = input[index + 1];
        let z = input[index + 2];
        let isInsideV = isInside(x, y, z);
        if (isInsideV){
            console.log('inside');
        }
        else{
            console.log('outside');
        }
    }
}