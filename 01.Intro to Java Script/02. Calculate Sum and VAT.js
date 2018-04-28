function vat(nums) {
    let sum = 0;
    for (var i = 0; i < nums.length; i++) {
        sum += nums[i];

    }
    console.log(`sum= ${sum}`);
    console.log(`VAT= ${sum * 0.2}`);
    console.log(`total= ${sum * 1.2}`);

}