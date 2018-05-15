function emailValidation(input) {
    let regex = new RegExp(/^[a-zA-Z0-9]+\.?\_?[a-z0-9]+@[a-z\.\_]+(\.[a-z]+)+$/g);
    if (regex.test(input)){
        console.log('Valid');
    }
    else{
        console.log('Invalid');
    }
}