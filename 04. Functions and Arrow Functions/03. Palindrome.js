function palindrome(input) {
    let reversed = input.split('').reverse().join('');
    if (reversed === input){
        console.log('true');
    }
    else{
        console.log('false');
    }
}
palindrome('racecar')