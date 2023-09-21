const livros = require('../aula1/listaLivros');

livros.sort(function(x, y){
	let a = x.titulo.toUpperCase(),
	b = y.titulo.toUpperCase();
	return a == b ? 0 : a > b ? 1 : -1;
});

console.log(livros);