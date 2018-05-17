function lastMonthDay(input) {
    let month = input[1];
    let year = input[2];

    let date = new Date(year, month - 1);
    date.setDate(0);
    console.log(date.getDate());
}