// Let's twist the previous problem
//1st hundred price  100;
//then 101 to 200 price is 90;
//then 201 to above -> 70.
//But remember its a layer layer problem, when product is 105 you will get discount only on 5 , not 105.

function totalDiscount(input) {
    const firstHundred =  100;
    const secondHundred =  90;
    const aboveTwoHundred = 70;

    if(input<=100)
    {
        const total=input * firstHundred;
        return total;
    }
    else if(input<=200)
    {
        const firstHundredPrice= 100 * firstHundred;
        const quantityRemaining = input - 100; 
        const lessThanTwoHundred = quantityRemaining * secondHundred;
        const total =firstHundredPrice+ lessThanTwoHundred;
        return total; 
    }
    else{
        const firstHundredPrice = 100 * firstHundred;
        const hundredToTwoHundredPrice= 100 * secondHundred;
        const quantityAboveTwoHundred = input -200;
        const  upToTwoHundredPrice=quantityAboveTwoHundred * aboveTwoHundred;
        const total= firstHundredPrice +  hundredToTwoHundredPrice + upToTwoHundredPrice;
        return total; 
    }
}
const result = totalDiscount(250);
console.log(result);
