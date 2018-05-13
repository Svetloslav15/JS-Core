function main(input) {
    let step = Number(input.pop());
    input = input.filter((el, i) => i % step === 0);
    console.log(input.join('\n'));
}

main(['1', '2', '3', '4', '5', '6'])