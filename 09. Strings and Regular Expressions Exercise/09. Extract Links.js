function links(input) {
    let pattern = /(w{3})\.([a-zA-Z0-9\-]+\.)+([A-Za-z])+/;
    for (let item of input) {
        let match = item.match(pattern);
        if (match){
            console.log(match[0]);
        }
    }
}