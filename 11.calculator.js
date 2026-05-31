//Create a calculator.
function addition(input1, input2) {
    const add = input1 + input2;
    return add;
}

function subtraction(input1, input2) {
    const sub = input1 - input2;
    return sub;
}

function multiplication(input1, input2) {
    const mul = input1 * input2;
    return mul;
}
function division(input1, input2) {
    const div = input1 / input2;
    return div;
}


function calculator(a, b, operator) {
    if (operator === "add") {
        const res = addition(a, b);
        return res;
    }
    else if (operator === 'sub') {
        const sub=subtraction(a,b);
        return sub;     
    }
    else if (operator === 'mul'){
        const mul = multiplication(a,b);
        return mul;
    }
    else{
        return division(a,b);
    }
}
const output= calculator(6,5,'div');
console.log(output);
