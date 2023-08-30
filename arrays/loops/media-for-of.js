// diferente do for each, o for of apenas tem acesso ao valor da variavel lista, nao ao seu indice. Serve quando é preciso percorrer o array completo

const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;

for (let nota of notas) {
  somaDasNotas += nota;
}

const media = somaDasNotas / notas.length;

console.log(`A média das notas é ${media}.`);