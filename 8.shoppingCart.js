const products = [
    { name: 'blender', price: 2000, color: 'ash', purchase:3 },
    { name: 'rice-cooker', price: 3500, color: 'black', purchase:5},
    { name: 'fork', price: 200, color: 'silver', purchase:9},
    { name: 'spoon', price: 150, color: 'silver', purchase:5}
]
function totalCost(products){
    total=0;
    for(let product of products)
    {
        const totalProductCost= product.price*product.purchase;
        total=total+totalProductCost;
    }
    return total;
}
const result = totalCost(products);
console.log('Sum of total product price:',result);