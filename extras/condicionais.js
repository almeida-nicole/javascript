// Escreva uma condicional que
// verifica se dois numeros
// são iguais.

let x = 2;
let y = 2;
if (x == y) {
  console.log("são iguais")
} else {
  console.error ("não são iguais")
}


// Escreva uma condicional que
// verifica se um ano é bissexto
// ou não.

let ano = 1995;
if (ano % 400 == 0) {
   console.log("Esse ano é bissexto");
} else if (ano%4 == 0 && ano%100!=0) {
  console.log("Esse ano é bissexto");
}
else {
  console.log("Esse ano não é bissexto");
}


// Escreva uma condicional que
// recebe duas coordenadas e
// verifica se aquele ponto
// esta no primeiro, segundo,
// terceiro ou quarto quadrante
// do plano cartesiano.

let coordenadaX = 5;
let coordenadaY = 3;

if (coordenadaX > 0 && coordenadaY > 0) {
  console.log("Primeiro Quadrante");
}
else if (coordenadaX < 0 && coordenadaY > 0) {
  console.log("Segundo Quadrante")
}
else if (coordenadaX < 0 && coordenadaY < 0) {
  console.log("Terceiro Quadrante")
}
else {
  console.log("Quarto Quadrante")
}


// Escreva uma condicional que
// recebe as medidas de um triangulo
// e determina se ele é isosceles,
// equilatero ou escaleno.

let lado1 = 3;
let lado2 = 3;
let lado3 = 3;

if ( (lado1 === lado2) && (lado1 === lado3) && (lado2 === lado3) ) {
  console.log("Triângulo Equilátero");
} else if ( (lado1 !== lado2) && (lado1 !== lado3) && (lado2 !== lado3) ) {
  console.log("Triângulo Escaleno");
}
else {
  console.log("Triângulo Isosceles");
}


// Escreva uma condicional que recebe
// um caractere e determina se esse
// caractere é uma vogal ou não.

const vogais = ["a", "e", "i", "o", "u"];
let caractere = "b";
if (vogais.indexOf(caractere) >= 0) {
  console.log("É uma vogal");
}
else {
  console.log("É uma consoante")
}

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
numeros[4]
