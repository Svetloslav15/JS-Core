function bitcoinMining(input) {
    input = input.map(Number);
    let dayOfFirstBitcoin = 0;
    let bitcoins = 0;
    let currentDay = 1;
    let allMoney = 0;
    let bought = false;
    for (let index = 0; index < input.length; index++) {
        let currentGold = input[index];
        if ((index + 1) % 3 === 0) {
            currentGold -= 0.3 * currentGold;
        }
        allMoney += currentGold * 67.51;
        while (allMoney >= 11949.16) {
            if (!bought) {
                dayOfFirstBitcoin = currentDay;
                bought = true;
            }
            bitcoins++;
            allMoney -= 11949.16;
        }
        currentDay++;
    }
    console.log(`Bought bitcoins: ${bitcoins}`);
    if (dayOfFirstBitcoin !== 0) {
        console.log(`Day of the first purchased bitcoin: ${dayOfFirstBitcoin}`);
    }
    console.log(`Left money: ${allMoney.toFixed(2)} lv.`);
}