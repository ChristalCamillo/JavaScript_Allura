const nomes = ["Evaldo", "Mari", "Camis"];

// normal

nomes.forEach(function (nome) {
  console.log(nome);
});

// arrow function

nomes.forEach((nome) => {
  console.log(nome);
});

// externo (gosto mais)

function imprimeNome(nome) {
  console.log(nome);
}

nomes.forEach(imprimeNome);

//Quando queremos passar a referência de uma função, basta colocar só o nome dela, sem abrir e fechar parênteses, com os parênteses assim, por exemplo, imprimeNome(), vai dar erro.
//Pois, com os parênteses estaremos executando a função, se executarmos ela dentro do forEach, ele vai entender que estamos querendo pegar o retorno da função, mas não estamos retornando nada para a função imprimeNome. Aqui só queremos passar a referência dela.