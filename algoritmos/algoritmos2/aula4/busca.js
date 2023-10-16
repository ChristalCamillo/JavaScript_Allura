const listaLivros = require('./arrayOrdenado');
//vamos começar com o elemento do meio, recebendo um array previamente ordenado. 
//retorna o indice onde se encontra o valor que buscamos passado como parametro.

function busca(array, de, ate, valorBuscado) {
  const meio = Math.floor((de + ate) / 2);
  const atual = array[meio];

//antes de implementar essa parte, deu um erro de chamada infinita, dando esse retorno de "erro" padrão
  if (de > ate) {
    return -1;
  }

  if (valorBuscado === atual.preco) {
    return meio;
  }

  if (valorBuscado < atual.preco) {
    return busca(array, de, meio - 1, valorBuscado);
  }

  if (valorBuscado > atual.preco) {
    return busca(array, meio + 1, ate, valorBuscado);
  }
}

console.log(busca(listaLivros, 0, listaLivros.length - 1, 60));