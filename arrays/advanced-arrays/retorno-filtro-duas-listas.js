// nesse uso do metodo, foi passados os alunos como lista base e o filtro foi feito nas medias que correspondiam aos indices do respectiv aluno


const alunos = ["Ana", "Marcos", "Maria", "Mauro"];
const medias = [7, 4.5, 8, 7.5];

const reprovados = alunos.filter((_, indice) => {
  return medias[indice] < 7;
});

console.log(reprovados);