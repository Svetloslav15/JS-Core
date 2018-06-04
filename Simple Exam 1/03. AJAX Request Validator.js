function reqValidation(input) {
    let hashPattern = input.pop();

    for (let index = 0; index < hashPattern.length; index += 3) {
        //Method
        let [title, method] = input[index].split(": ");
        if (title !== "Method" && method !== "GET" && method !== "POST" && method !== "PUT" && method !== "DELETE"){
            console.log("Response-Code:400");
            continue;
        }
    }
}