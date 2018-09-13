// hello("what") -> hello word - como esse "what" não define nada, retorna o que está no return
// hello() -> hello world.
function hello() {
	return "Hello, world!"
}

// show(4) -> 16. vai ler somente o que o primeiro retorno está chamando// se chamar o segundo return separado = 64
// show(-4) -> 16, -64 (segundo return separado)
function show(x) {
	console.log(`${x} ${x * x}`) 
	return x * x
	console.log(`${x} ${x * x * x}`)
	return x * x * x
}

// eq3() -> retorna 1, pois como não foi definido a, b e c eles se tornam iguais undefined == undefined = true 
// eq3(1, 2, 3) -> 0
// eq3("1", 1, 3) -> 0
// eq3("!", "a", "b") -> 0
// eq3("!", "!", !) -> não entra na condição, pois ! é um operador.
function eq3(a, b, c) {
	if (a === b && a === c) {
		return 1
	} else {
		return 0
	}
}

// Resultado: 9, 11
function sum(x) {
	return x + 2
}
const x = 5
console.log(`${sum(x + 2)}, ${sum(sum(x + 2))}`)

// Resultado: 26, 12
function confusion(x, y) {
	x = 2 * x + y
	return x
}
let x = 2
let y = 5
//confusion (5, 2)
// y= 2 * 5 + 2
// y = 12
y = confusion(y, x)  // 12
// 2 * 12 + 2
//x = 26
x = confusion(y, x) // 26
console.log(`${x}, ${y}`)