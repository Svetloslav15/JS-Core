function kNums(input) {
    let k = input[0];
    input.shift();
    let first = input.slice(0, k);
    console.log(first.join(' '));
    let second = input.slice(input.length - k, k + 1);
    console.log(second.join(' '));
}

