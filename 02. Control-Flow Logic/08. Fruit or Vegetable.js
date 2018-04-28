function fruitOrVegetable(item) {
    if (item === "banana" || item === "apple" || item === "kiwi" ||
        item === "lemon" || item === "cherry" || item === "grapes" || item === "peach"){
        console.log("fruit");
    }
    else if (item === "tomato" || item === "cucumber" || item === "pepper" ||
            item === "onion" || item === "garlic" || item === "parsley"){
        console.log("vegetable");
    }
    else{
        console.log("unknown");
    }

}