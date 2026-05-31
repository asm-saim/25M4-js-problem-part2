//Find out the tallest person from a number of array.

let numbers=[33,67,33,45,22,46,2,77,56];

function tallest(inputs){
    let num=inputs[0];
    for(let input of inputs)
    {
        if(input>num)
            num=input;
    }
    return num;
}
const result=tallest(numbers);
console.log(result);


//find out the smallest.
function smallest(input){
    let small=input[0];
    for(let sm of input)
    {
        if(sm<small)
        {
            small=sm;
        }
    }
    return small;
}
const result2=smallest(numbers);
console.log("smallest one is: ",result2);