//find out the cheapest phonne.
const phones = [
    { name:"samsung", price: 40000, color: "Black" },
    { name:"xaomi", price: 20000, color: "Black" },
    { name:"iphone", price: 140000, color: "Black" },
    { name:"one+", price: 27000, color: "Black" },
    { name:"infinix", price: 44000, color: "Black" }
]

function cheapest(phones){
    let lowest=phones[0];
    for(let phone of phones)
    {
        if(phone.price<lowest.price)
        {
            lowest=phone;
        }
    }
    return lowest.name;
}
const result=cheapest(phones);
console.log(result);


//Highest price
function highest(phones){
    let takeHighest=phones[0];
    for(let phone of phones)
    {
        if(phone.price>takeHighest.price)
        {
            takeHighest=phone;
        }
    }
    return takeHighest.name;

} 
const highPrice= highest(phones);
console.log(highPrice);
