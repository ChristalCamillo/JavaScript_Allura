// tentando filtrar clientes que moram em apto mas nao colocaram complemento


// para pegar as infos do arquivo externo e salva-las em uma variavel local
const clientes = require("./clientes.json");


// nessa função, a lista é o parametro
function filtrarApartamentoSemComplemento(clientes) {
	//os arrays tem função filter para que passe por cada campo da lista, e nesse retorno trará os clientes com
	//propriedade apartamento: true e que NÃO (!) tenha a propriedade complemento preenchida
  return clientes.filter((cliente) => {
    return (
      cliente.endereco.apartamento &&
      !cliente.endereco.hasOwnProperty("complemento")
    );
  });
}

// o retorno dessa função é então passado para uma variavel e exibido no console
const filtrados = filtrarApartamentoSemComplemento(clientes);

console.log(filtrados);