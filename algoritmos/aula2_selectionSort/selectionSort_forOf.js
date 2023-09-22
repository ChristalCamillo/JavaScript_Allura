//Para a resolução com o for... of é preciso buscar o índice utilizando o método .entries( ) e colocar o índice entre [] para pegar somente o valor.

const livros = require('../aula1/listaLivros');
const menorValor = require('../aula1/menorValor');

for ([atualIndex] of livros.entries()){
	let menorValorIndex = menorValor(livros, atualIndex);
	let livroAtual = livros[atualIndex];
	console.log('posicao atual', atualIndex)
    console.log('livro atualIndex', livros[atualIndex])
	let livroMenorValor = livros[menorValorIndex];
	console.log('livro menor preco', livros[menorValorIndex])

	livros[atualIndex] = livroMenorValor
	livros[menorValorIndex] = livroAtual
}

console.log(livros)