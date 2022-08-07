var biyerBazar = {
    panjabi: 1,
    perfume: 2,
    decoration: 'room',
    mohorana: 30000,
    olima: '100 jon'
}
// console.log(biyerBazar);
var complete = Object.keys(biyerBazar);
// console.log(complete);
// var estimate = Object.values(biyerBazar);
// console.log(estimate);

for (var i = 0; i < complete.length; i++) {
    //console.log(complete[i], estimate[i]);
    //console.log(estimate[i]);
    var loop = complete[i];
    var value = biyerBazar[loop];
    console.log(loop, value);
}


// easy way for looping through an object-----------for in loop
for (var for_in in biyerBazar) {
    var value = biyerBazar[for_in];
    console.log(for_in, value);
}