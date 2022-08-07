var ambulanceDak = {
    bouer_churi: 5,
    ring: 'diamond',
    shoe: 'pencil heel',
    mehedi: 'kaberi'
}

var takaShesh = ambulanceDak.mehedi;
console.log(takaShesh);

var highPressure = ambulanceDak['ring'];
console.log(highPressure);

var properties = Object.keys(ambulanceDak);
console.log(properties);

var properties = Object.values(ambulanceDak);
console.log(properties);

var properties = 'bouer_churi';
var value = ambulanceDak[properties];
console.log(properties, value);