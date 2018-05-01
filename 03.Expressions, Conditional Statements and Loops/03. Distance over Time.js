function distanceOverTime(arr) {
    let firstSpeed = arr[0];
    let secondSpeed = arr[1];
    let timeInSeconds = arr[2];
    let timeInHours = timeInSeconds / 3600;
    let firstDistance = firstSpeed * timeInHours;
    let secondDistance = secondSpeed * timeInHours;
    let difference = Math.abs(firstDistance - secondDistance);
    console.log(difference * 1000);
}

