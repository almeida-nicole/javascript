// Escreva uma função
// em Javascript que recebe
// um nome, um pronome e um objeto
// e retorna "<nome> foi caminhar
// no parque. <pronome> encontrou
// <objeto>. <nome> decidiu levar
// <objeto> pra casa."

function story (nome, pronome, objeto) {
    console.log (`${nome} foi caminhar no parque. ${pronome} encontrou um ${objeto}.
     ${nome} decidiu levar ${objeto} pra casa.`) 
}
// story ("rebeca", "ela", "espelho")



// Escreva uma função
// em Javascript que recebe
// um número qualquer e retorna
// a raiz quadrada dele.

function raizQuadrada (x) {

    return Math.sqrt(x) 
}

// Escreva uma função em
// Javascript que recebe um
// número qualquer e retorna
// a representação binaria dele.

function binario(x) {

    return x.toString(2)
}



// Escreva uma função em Javascript
// que recebe uma lista de números
// e retorna o maior número da lista.

function lista (arr) {
    let sorted = []
    while (arr.length > 0) {
        let highest = Infinity
        let highest_index
        for (const [index, item] of arr.entries()) {
			if (item > highest) {
                highest = item
				highest_index = index
			}
        }
        sorted.push(highest)
        arr.splice(highest_index, 1)
    }

	return highest

}






// Escreva uma função em Javascript
// que vai checar se duas ou mais strings
// sao anagramas umas das outras.

function checkAnagrama (string) {
    if (string.split("").sort().join("") 

}


// Escreva uma função em Javascript
// que recebe o raio de um circulo
// e calcula o diametro, a circunferencia
// e a area dele.