const livros = require('../aula1/listaLivros');
const selectionTroca = require('./troca');


function insertionSort(lista) {

	for (let atual = 1; atual < lista.length; atual++) {
		let analise = atual;
		while (analise > 0 && lista[analise].preco < lista[analise - 1].preco) {
			selectionTroca(lista, analise, analise - 1);

			analise--
		}
	}
	console.log(lista);
}

insertionSort(livros);