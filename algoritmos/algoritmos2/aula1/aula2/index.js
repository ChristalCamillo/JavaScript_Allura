const listaLivros = require('./array');

function mergeSort(array, nivelAninhamento = 0) {

  console.log(`nível de aninhamento: ${nivelAninhamento}`)
  console.log(array)


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


