function operateWithEl(input) {
    let result = [];
    let step = 1;

    for (let item of input) {
        if (item === 'add'){
            result.push(step);
        }
        else if (item === 'remove'){
            if (result.length !== 0){
                result.pop();
            }
        }
        step++;
    }
    if (result.length !== 0){
        console.log(result.join('\n'))
    }
    else{
        console.log('Empty')
    }
}