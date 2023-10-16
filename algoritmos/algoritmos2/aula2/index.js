const listaLivros = require('./array');
// esse parametro de nivel de aninhamento não faz nada de lógica, ele serve pra ver o comportamento recursivo da função.  

function mergeSort(array, nivelAninhamento = 0) {

  console.log(`nível de aninhamento: ${nivelAninhamento}`)
  console.log(array)

//Recursão é basicamente resolver um problema em partes menores até que tenhamos resolvido o problema completo. É uma forma parecida com a lógica que está por trás do próprio merge sort.
// a diferença da recursão para os laços de repetição (for, while) é que as variaveis não são reatribuidas e sim funcionam como novas chamadas da função em cascata
// se o array tiver mais de 2 elementos quebra e arredonda o tamanho com o floor
  if(array.length > 1) {
    const meio = Math.floor(array.length / 2);
	//pra que um array grande seja todo fatiado, a mergeSort é chamada recursivamente
    const parte1 = mergeSort(array.slice(0, meio), nivelAninhamento + 1);
    const parte2 = mergeSort(array.slice(meio, array.length), nivelAninhamento + 1);
    array = ordena(parte1, parte2);
  }

  return array;
}

//vamos refazer a função juntaListas usando recursos do javascript

function ordena(parte1, parte2) {
	let posicaoAtualParte1 = 0;
	let posicaoAtualParte2 = 0;
	const resultadoOrdenado = []

	while (posicaoAtualParte1 < parte1.length && posicaoAtualParte2 < parte2.length) {
		let produtoAtualParte1 = parte1[posicaoAtualParte1]
		let produtoAtualParte2 = parte2[posicaoAtualParte2]

		//nao podemos esquecer de entrar no objeto e ver nossa propriedade de comparação, que aqui é preço

		if (produtoAtualParte1.preco < produtoAtualParte2.preco) {
			resultadoOrdenado.push(produtoAtualParte1)
			posicaoAtualParte1++
		} else {
			resultadoOrdenado.push(produtoAtualParte2)
			posicaoAtualParte2++
		}
	}
	// em vez dos 2 while pra ver se ainda tinham elementos nas listas base divididas. O que essa ação está fazendo é que, se o resultado de posições da parte 1
	// ainda assim for menor q o comprimento, significando que faltou incluir elementos, ele cola no final do array de resultado
	return resultado.concat(posicaoAtualParte1 < parte1.length
		? parte1.slice(posicaoAtualParte1)
		: parte2.slice(posicaoAtualParte2))
}

console.log(mergeSort(listaLivros));
