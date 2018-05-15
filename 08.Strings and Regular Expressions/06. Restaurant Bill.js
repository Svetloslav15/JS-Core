function restaurantBill(input) {
    let billPrice = 0;
    let bill = [];
    for (let index = 0; index < input.length; index++) {
        if (index % 2 === 0){
            bill.push(input[index]);
        }
        else{
            billPrice += Number(input[index]);
        }
    }
    console.log(`You purchased ${bill.join(', ')} for a total sum of ${billPrice}`)
}