function medenka(input) {
    let naskor = 0;
    let vitkor = 0;
    let naskorAttacks = [];
    let vitkorAttacks = 0;

    for (let tokens of input) {
        let [damage, type, medenka] = tokens.split(/ /g);
        damage = +damage;
        let currentDamage = damage * 60;

        if (type === "dark") {
            if (naskorAttacks.length >= 4) {
                if (naskorAttacks[0] === currentDamage &&
                    naskorAttacks[1] === currentDamage &&
                    naskorAttacks[2] === currentDamage &&
                    naskorAttacks[3] === currentDamage) {
                    currentDamage *= 4.5;
                    naskorAttacks.splice(0, naskorAttacks.length);
                    naskorAttacks.push(currentDamage);
                }
                else {
                    naskorAttacks.push(currentDamage);
                }
            }
            else {
                naskorAttacks.push(currentDamage);
            }
            naskor += currentDamage;
        }
        else {
            if (vitkorAttacks === currentDamage) {
                currentDamage *= 2.75;
            }
            vitkorAttacks = currentDamage;
            vitkor += currentDamage;
        }
    }
    let winner = naskor < vitkor ? "Vitkor" : "Naskor";
    console.log(`Winner - ${winner}`);
    console.log(`Damage - ${Math.max(vitkor, naskor)}`);
}
90/100