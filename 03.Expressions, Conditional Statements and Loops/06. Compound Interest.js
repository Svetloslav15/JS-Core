function compoundInterest(input) {

    let principalSum = input[0];
    let interestRate = input[1] / 100;
    let compoundingPeriodInMonths = 12 / input[2];
    let timespan = input[3];


    let result = principalSum * (Math.pow(1 + (interestRate / compoundingPeriodInMonths), (compoundingPeriodInMonths * timespan)));
    console.log(result.toFixed(2));
}

