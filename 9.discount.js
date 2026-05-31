// discount condition:
// 1-100 -> 100
// 101-200 -> 90
// 201---- > 70

function discount(input) {
    if (input < 101) {
        const total = input * 100;
        return total;
    }
    else if (input > 100 && input < 201) {
        const total = input * 90;
        return total;
    }
    else {
        const total = input * 70;
        return total;
    }
}
const result = discount(200);
console.log('Discounted price is :',result);

