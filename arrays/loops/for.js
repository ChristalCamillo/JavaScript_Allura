//Cada execução do loop chama-se iteração. Então, na primeira iteração, imprimimos o indice quando ele tinha o valor 0. 
//Como queremos imprimir cada elemento do array numeros, podemos usar numeros[indice] no console.log(). Na primeira iteração, teremos numeros[0]. Na segunda iteração, numeros[1], e assim em diante
// Primeira expressão: é executada apenas uma única vez
// Segunda expressão: condição de execução
// Terceira expressão: é executada sempre ao final do bloco

const numeros = [100, 200, 300, 400, 500, 600];

// Primeira expressão: é executada apenas uma única vez
// Segunda expressão: condição de execução
// Terceira expressão: é executada sempre ao final do bloco

for (let indice = 0; indice < numeros.length; indice++) {
    console.log(numeros[indice]);
}