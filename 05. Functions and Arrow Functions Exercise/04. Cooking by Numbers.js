function cookingNumbers(input) {
    let number = Number(input[0]);
    for (let index = 1; index < input.length; index++) {
        number = operateNum(number, input[index]);
        console.log(number);
    }
    function operateNum(num, operation) {
        switch (operation){
            case "chop":return num / 2;break;
            case "dice":return Math.sqrt(num);break;
            case "spice":return ++num;break;
            case "bake":return num * 3;break;
            case "fillet":return num - num * 0.2;break;
        }
    }
}