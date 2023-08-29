// Arquivo procurando-aluno.js

const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const listaDeAlunosEMedias = [alunos, medias];

function searchStudent(studentName){
	if(listaDeAlunosEMedias[0].includes(studentName)){
		console.log(`${studentName} esta cadastrado!`);
	}else {
		console.log("Aluno não encontrado!");
	}
}	

searchStudent(João);