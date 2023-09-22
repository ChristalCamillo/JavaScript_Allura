// esse algoritmo é bom pra usar com listas pequenas, caso não ele perde pois é demorado e não preserva a ordem dos itens
// o menor valor vai ser colocado no inicio
const livros = require('./listaLivros');
const menorValor = require('../aula1/menorValor');
const troca = require('../aula3_insertionSort/troca')

//for simples pra percorrer o array 
// for (let atual = 0; atual < livros.length - 1; atual++) {
// 	  //pq o -1? pq o final vai ser sempre o mesmo
//   let menor = menorValor(livros, atual)

//   let livroAtual = livros[atual];
//   console.log('posição atual', atual)
//   console.log('livro atual', livros[atual])
//   let livroMenorPreco = livros[menor];
//   console.log('livro menor preço', livros[menor])

//   livros[atual] = livroMenorPreco
//   livros[menor] = livroAtual
// }

//usando o FOREACH
livros.forEach((_, indice) => {
 let menor = menorValor(livros, indice)

troca(livros, menor);
})

console.log(livros)