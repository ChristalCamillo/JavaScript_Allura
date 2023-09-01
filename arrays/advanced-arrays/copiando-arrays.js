// o javascript tem um comportamento diferente em arrays do que em tipos primitivos. Nos arrays, quando você reatribui um valor a ele, é como se apontasse para o array original e o afetasse também.
// por isso usa se uma nova const desse modo

const notas = [7, 7, 8, 9];

const novasNotas = [...notas, 10];

console.log(`As novas notas são ${novasNotas}`);
console.log(`As notas originais são ${notas}`);