// o set é uma classe js com algumas propriedades já setadas. Usado aqui para excluir duplicatas de uma lista

const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];

// forma concisa, passo os nomes como val de entrada para o set e já criando um novo array

const nomesAtualizados = [...new Set(nomes)];

console.log(nomesAtualizados);