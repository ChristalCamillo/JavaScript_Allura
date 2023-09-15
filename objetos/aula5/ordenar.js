// para ordenar ao contrario use .reverse()

const clientes = require("./clientes.json");

function ordenar(lista, propriedade) {
	// a função sort ja ordena, temos que passar apenas como queremos a ordenação
  const resultado = lista.sort((a, b) => {
	//essa comparação é a forma que a fun sort pede que seja feito
    if (a[propriedade] < b[propriedade]) {
      return -1;
    }
    if (a[propriedade] > b[propriedade]) {
      return 1;
    }
    return 0;
  });

    //if (ordem !== "crescente") { forma de reverter a ordenação
    //resultado.reverse();
  //}

  return resultado;
}

const ordenadoNome = ordenar(clientes, "nome");

//const ordenadoInverso = ordenadoNome.reverse(); outra forma de retornar invertido 

console.log(ordenadoNome);