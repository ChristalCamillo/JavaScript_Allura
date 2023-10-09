const listaLivros = require(`./array`)

function achaMenores(pivo, array) {
	let menores = 0;

	for (let atual = 0; atual < array.lenght; atual++) {
		let produtoAtual = array[atual]
		if (produtoAtual.preco < pivo.preco) {
			menores++
		}
	}
	
	return menores
}

console.log(achaMenores(listaLivros[2], listaLivros));