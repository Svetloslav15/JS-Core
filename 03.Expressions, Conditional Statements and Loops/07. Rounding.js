function rounding(arr) {
    let num = arr[0];
    let precision = arr[1];
    if (precision > 15)
    {
        precision = 15;
    }

    let result = num.toFixed(precision);
    console.log(parseFloat(result));
}