function smallestTwo(input) {
    console.log(input
        .sort((a, b) => a - b)
        .slice(0, 2));
}

smallestTwo([30, 15, 50, 5])