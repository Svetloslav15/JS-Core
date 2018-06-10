function gladiator(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {

    let helmetTrashes = 0;
    let swordTrashes = 0;
    let shieldTrashes = 0;
    let shieldTrashesOriginal = 0;
    let armorTrashes = 0;

    for (let i = 1; i <= lostFights; i++) {
        if (i % 2 === 0){
            helmetTrashes++;
        }
        if (i % 3 === 0){
            swordTrashes++;
        }
        if (i % 2 === 0 && i % 3 === 0){
            shieldTrashesOriginal++;
            shieldTrashes += 1;
        }
        if (shieldTrashes === 2){
            armorTrashes++;
            shieldTrashes = 0;
        }
    }
    let finalPrice = armorTrashes * armorPrice + helmetTrashes * helmetPrice + swordTrashes * swordPrice + shieldTrashesOriginal * shieldPrice;
    console.log(`Gladiator expenses: ${finalPrice.toFixed(2)} aureus`);
}