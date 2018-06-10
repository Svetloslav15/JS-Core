function travelPlans(input) {
    let specializedProf = 0;
    let clumsyProf = 0;
    let totalAmount = 0;

    for (let index = 0; index < input.length; index++) {
        let [proffesion, gold] = input[index].split(" : ");
        gold = +(gold);

        if (proffesion === "Programming" || proffesion === "Hardware maintenance" ||
            proffesion === "Cooking" || proffesion === "Translating" || proffesion === "Designing"){
            if (gold >= 200){

                specializedProf++;
                totalAmount += 0.8 * gold;
                if (specializedProf % 2 === 0){
                    totalAmount += 200;
                }
            }
        }
        else if (proffesion === "Singing" || proffesion === "Accounting" || proffesion === "Teaching"||
            proffesion === "Exam-Making" || proffesion === "Acting" || proffesion === "Writing" ||
            proffesion === "Lecturing" || proffesion === "Modeling" || proffesion === "Nursing"){

            clumsyProf++;
            if (clumsyProf % 2 === 0){
                totalAmount += gold - 0.05 * gold;
            }
            else if (clumsyProf % 3 === 0){
                totalAmount += gold - 0.1 * gold;
            }
            else {
                totalAmount += gold;
            }
        }
        else{
            totalAmount += gold;
        }
    }

    console.log(`Final sum: ${totalAmount.toFixed(2)}`);
    if (totalAmount >= 1000){
        console.log(`Mariyka earned ${(totalAmount - 1000).toFixed(2)} gold more.`)
    }
    else{
        console.log(`Mariyka need to earn ${(1000 - totalAmount).toFixed(2)} gold more to continue in the next task.`)
    }
}