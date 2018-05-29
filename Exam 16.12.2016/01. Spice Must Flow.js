function spiceFlow(input) {
    let yield = Number(input[0]);
    let days = 0;
    let allSpice = 0;
    let currentSpice = 0;

    while(yield >= 100){
        currentSpice = yield - 26;
        allSpice += currentSpice;
        yield -= 10;
        days++;
    }
    console.log(days);
    if (allSpice >= 26)
    console.log(allSpice - 26);
    else{
        console.log(allSpice);
    }
}