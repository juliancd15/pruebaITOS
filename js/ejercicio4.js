const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let arrayA = [];
let arrayB = [];
const num = 10;


for ( let i = 0; i < num; i++ ) {
    arrayA.push(characters.charAt(Math.random() * num));
    arrayB.push(characters.charAt(Math.random() * num));    
}
var union = [...new Set([...arrayA, ...arrayB])];
var intersecion = arrayA.filter(value => arrayB.includes(value));
var diferencia = arrayA.filter(x => !arrayB.includes(x));

var dif_simetrica = arrayA
                 .filter(x => !arrayB.includes(x))
                 .concat(arrayB.filter(x => !arrayA.includes(x)));

document.write('<div class="container">');
document.write('<h2> Array inicial A: </h2>'); 
document.write('<h4 style="color: grey">' + arrayA + '</h4>');
document.write('<hr>');

document.write('<div class="container">');
document.write('<h2> Array inicial B: </h2>'); 
document.write('<h4 style="color: grey">' + arrayB + '</h4>');
document.write('<hr>');

document.write('<div class="container">');
document.write('<h2> Array Union: </h2>'); 
document.write('<h4 style="color: grey">' + union + '</h4>');
document.write('<hr>');

document.write('<div class="container">');
document.write('<h2> Array Interseccion: </h2>'); 
document.write('<h4 style="color: grey">' + intersecion + '</h4>');
document.write('<hr>');

document.write('<div class="container">');
document.write('<h2> Array Diferencia: </h2>'); 
document.write('<h4 style="color: grey">' + diferencia + '</h4>');
document.write('<hr>');

document.write('<div class="container">');
document.write('<h2> Array Diferencia Diferencia Simetria: </h2>'); 
document.write('<h4 style="color: grey">' + dif_simetrica + '</h4>');
document.write('<hr>');



// un conjunto no puede tener elementos repetidos

