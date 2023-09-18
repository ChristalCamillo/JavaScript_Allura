const livros = require('./listaLivros');

// funciona com qualquer array + um contador, retorna a posição (index) do item mais barato
function menorValor(arrBase, posicaoInicial){
	let maisBarato = posicaoInicial;

for (let atual = posicaoInicial; atual < arrBase.length; atual++) {
  if (arrBase[atual].preco < arrBase[maisBarato].preco) {
    maisBarato = atual
  }
}
return maisBarato;
}

// let maisCaro = 0;
// for (let atual = 0; atual < livros.length; atual++) {
//  if (livros[atual].preco > livros[maisCaro].preco) {
//    maisCaro = atual;
//  }
// }
module.export = menorValor;