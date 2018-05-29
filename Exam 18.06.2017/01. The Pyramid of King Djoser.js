function kingDjoser(base, increment) {
    let stoneBlocks = 0;
    let goldBlocks = 0;
    let marbleBlocks = 0;
    let lapisBlocks = 0;
    let counter = 1;

    while (base > 2) {
        let currentStone = (base - 2) ** 2;
        if (counter % 5 === 0) {
            lapisBlocks += base * base - currentStone;
        }
        else {
            marbleBlocks += base * base - currentStone;
        }
        counter++;
        stoneBlocks += currentStone;
        base -= 2;
    }

    console.log(`Stone required: ${Math.ceil(stoneBlocks * increment)}`);
    console.log(`Marble required: ${Math.ceil(marbleBlocks * increment)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapisBlocks * increment)}`);
    console.log(`Gold required: ${Math.ceil((pbase ** 2) * increment)}`);
    console.log(`Final pyramid height: ${Math.floor(counter * increment)}`);
}