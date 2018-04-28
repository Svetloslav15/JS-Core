function cone(radius, height) {
    let volume = 1/3 * Math.PI * radius * radius * height;
    let l = Math.sqrt(height * height + radius * radius);
    let area = Math.PI * radius * radius + Math.PI * radius * l;
    console.log("volume= " + volume);
    console.log("area= " + area);
}
