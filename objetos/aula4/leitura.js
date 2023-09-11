// pq existe o json: essa notação é usada quando se quer que uma info seja lida em outros lugares do codigo, e tambem transformar um objeto em string, ficando mais facil de manipular.

const dados = require("./cliente.json");

//

console.log(dados);
console.log( typeof dados);// é um objeto

// como escrever um objeto em formato json, para transmitir e salvar informação

const clienteEmString = JSON.stringify(dados)

// transformar o Json em objeto de novo

const clienteObjeto = JSON.parse(clienteEmString);