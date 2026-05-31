//Validation check:
function validation(a, b) {
    if (typeof (a) !== 'number' || typeof (b) !== 'number') {
        console.log('Both value should be number');
    }

    const total = a + b;
    return total;
}
const result = validation(3, 5);
console.log(result);

//Character Validation
function charValidation(input1, input2) {
    if (typeof (input1) !== "string") {
        const out1 = "Please ender a string in the first input";
        return out1;
    }
    if (typeof (input2) !== "string") {
        const out2 = "Please ender a string in the second input";
        return out2;
    }
    const name = input1 + ' ' + input2;
    return name;
}
const result2 = charValidation("Yi", "Kim");
console.log(result2);

//Object validation
function objectValidation(input) {
    console.log(typeof input);
    if (typeof input !== "object") {
        return "Please enter an object data type";
    }
    const fullName = input.name;
    return fullName;
}
const details = { name: "Gias Uddin", age: 34, location: 'USA' }
const finalResult = objectValidation(details);
console.log(finalResult);


//Array validation: note that array is a type of object in JS. So, we have to validate it.

function arrayValidation(input) {
    let sum = 0;

    if (Array.isArray(input) !== true) {
        return "Please enter an array data type";
    }

    for (let i of input) {
        sum = sum + i
    }
    return sum;


}
const numbers = [22, 33, 5, 77, 99];
const outputResult = arrayValidation(numbers);
console.log(outputResult);