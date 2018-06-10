function memory(inputArr) {
    let finalString = "";
    for (let line of inputArr) {
        finalString += line + " ";
    }
    let nums = finalString.split(' 0').join('').split(' ').filter(x => x !== '');
    for (let index = 0; index < nums.length; index++) {
        if (nums[index] === '32763'){
            let size = Number(nums[index + 1]);
            let word = nums.slice(index + 2, size + index + 2).map(x => String.fromCharCode(x)).join('');
            console.log(word);
        }
    }
}