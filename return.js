function number(num1, num2) {
    console.log(num1, num2);
    var sum = num1 + num2;
    //console.log(sum);
    return sum;
}
//number(23, 22);
var total = number(23, 22);
console.log('total', total);


function bringSingara(money) {
    var singaraPrice = 10;
    var quantity = money / singaraPrice;
    return quantity;
}
bringSingaras = bringSingara(200);
console.log(bringSingaras);

function add(num1, num2) {
    const sum = num1 + num2;
    return sum;
}

const tota = add(23, 7);
const total2 = add(20, 20);
const final = add(tota, total2);
console.log(final);