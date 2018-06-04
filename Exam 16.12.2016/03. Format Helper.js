function helper(input) {
    console.log(input[0]
        .replace(/[ ]*([.,!?:;])[ ]*/g, (match, g1) => `${g1} `)
        .replace(/\. (?=[0-9])/g, (match) => `.`)
        .replace(/" *(.+?) *"/g, (match, a) => `"${a.trim()}"`)
        .replace(/([.,!?:;]) (?=[.,!?:;])/g, (match, g1) => g1))
}

helper(['Terribly formatted text . With chaotic spacings." Terrible quoting "! Also this date is pretty confusing : 20 . 12. 16 .'])

"Now let's test, absolutely everything! \" Aposiopesis is this:   \". .. Have! you read the constraints?, you squidward? It would be pretty sad if this also fails \"! It would be bad if you don't put space after the explanation at start, aposiopesis all the way...\". Now; 8.1 3.0x041. I hope this will be trimmed too!"