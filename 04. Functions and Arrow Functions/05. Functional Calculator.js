function calculator(a, b, symbol) {
    let add = function (c, d) {return c + d};
    let substract = function (c, d) {return c - d};
    let multiply = function (c, d) {return c * d};
    let divide = function (c, d) {return c / d};

    switch (symbol)
    {
        case '+':return add(a, b);break;
        case '-':return substract(a, b);break;
        case '*':return multiply(a, b);break;
        case '/':return divide(a, b);break;
    }
}
