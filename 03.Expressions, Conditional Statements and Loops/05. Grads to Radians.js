function change(grads) {
    let degreesDiff = 400 / 360;
    let degrees = grads / degreesDiff;
    degrees %= 360;

    if (degrees < 0){
        degrees += 360;
    }
    console.log(degrees)
}