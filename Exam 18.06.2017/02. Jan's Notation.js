function notation(input) {
    let nums = [];
    let numbers = 0;
    for (let token of input) {
        if (token !== '*' && token !== '-' && token !== '/' && token !== '+') {
            nums.push(Number(token));
            numbers++;
        }
        else {
            numbers--;
            let result = 0;
            switch (token) {
                case '+':
                    result = nums.pop() + nums.pop();
                    break;
                case '*':
                    result = nums.pop() * nums.pop();
                    break;
                case '/':
                    let temp = nums.pop();
                    if (temp !== 0) {
                        result = nums.pop() / temp;
                        break;
                    }
                case '-':
                    let tem = nums.pop();
                    result = nums.pop() - tem;
                    break;
            }
            nums.push(result);
        }
    }
    if (numbers <= 0) {
        console.log(`Error: not enough operands!`);
    }
    else if (nums.length === 1) {
        console.log(nums[0]);
    }
    else {
        console.log(`Error: too many operands! `);
    }
}