const products = [
    { name: 'blender', price: 2000, color: 'ash' },
    { name: 'rice-cooker', price: 3500, color: 'black' },
    { name: 'fork', price: 200, color: 'silver' },
    { name: 'spoon', price: 150, color: 'silver' }
]

function tolalPrice(products) {
    let sum = 0;
     for (let product of products) {
        sum=sum + product.price;
    }
    return sum;

}
const result = tolalPrice(products);
console.log(result)