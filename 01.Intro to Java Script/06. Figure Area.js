function figureArea(width, height, Width, Height) {
    let s1 = width * height;
    let s2 = Width * Height;
    let s3 = Math.min(width, Width) * Math.min(height, Height);

    console.log(s1 + s2 - s3);
}

