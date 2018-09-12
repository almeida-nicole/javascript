// Escreva um loop em Javascript
// que gera uma matriz de zeros 5x5.
// [ [0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0] ]
 
const linha = [0, 0, 0, 0, 0];
let matriz = []
for (let i = 0; i < 5; i++) {
        matriz.push(linha)
}
console.log(matriz)




// Escreva um loop em Javascript
// que gera uma matriz no seguinte
// formato:
// [ [0, 1, 2, 3, 4],
//   [1, 0, 1, 2, 3],
//   [2, 1, 0, 1, 2],
//   [3, 2, 1, 0, 1],
//   [4, 3, 2, 1, 0] ]

let matriz = []
for (let j = 0; j < 5; j++) {
    let linha = []
    for (let i = 0; i < 5; i ++) {
        linha.push(Math.abs(i - j))
    }
    matriz.push(linha)
}




// Escreva um loop em Javascript
// que printa o seguinte padrão
// no console:
// *******
// ******
// *****
// ****
// ***
// **
// *

for (let j = 0; j < 7; j++) {
    let asteriscos = "" 
    for (let i = 0; j < (7 - i); i++) {
       asteriscos += "*"

    }
    console.log(asteriscos)
}




// Escreva um loop em Javascript
// que printa o seguinte padrão
// no console:
// 1******
// 12*****
// 123****
// 1234***
// 12345**
// 123456*
// 1234567 

for (let j = 1; j <= 7; j++) {
    let asteriscos = "" 
    for (let k = 1; k <= j; k++) {
        asteriscos += k
    }    
    for (let i = 0; j < (7 - i); i++) {
       asteriscos += "*"

    }
    console.log(asteriscos)
}