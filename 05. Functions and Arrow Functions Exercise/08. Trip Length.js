function tripLength(input) {
    let [x1, y1, x2, y2, x3, y3] = input.map(Number);

    let calculateDistance = (x1, y1, x2, y2) => Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));

    let distance123 = calculateDistance(x1, y1, x2, y2) + calculateDistance(x2, y2, x3, y3);
    let distance132 = calculateDistance(x1, y1, x3, y3) + calculateDistance(x3, y3, x2, y2);
    let distance213 = calculateDistance(x2, y2, x1, y1) + calculateDistance(x1, y1, x3, y3);
    let minDistance = Math.min(distance123, distance132, distance213);

    if (minDistance === distance123){
        console.log(`1->2->3: ${minDistance}`);
    }
    else if (minDistance === distance132){
        console.log(`1->3->2: ${minDistance}`);
    }
    else if (minDistance === distance213){
        console.log(`2->1->3: ${minDistance}`);
    }
}