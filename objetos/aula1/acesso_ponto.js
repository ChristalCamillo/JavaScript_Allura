// usando o . apos o nome do objeto, você acessa as propriedades e com outro ponto, acessa métodos desse tipo de propriedade. O exemplo usa um metodo de string

const cliente = {
  nome: "Andre",
  idade: 32,
  cpf: "1122233345",
  email: "andre@dominio.com",
};

console.log(
  `O nome do cliente é ${cliente.nome} e essa pessoa tem ${cliente.idade} anos.`
);

console.log(`Os 3 primeiros digitos do CPF são ${cliente.cpf.substring(0, 3)}`);