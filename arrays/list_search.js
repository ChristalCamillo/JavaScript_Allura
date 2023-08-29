// Arquivo procurando-aluno.js

const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const listaDeAlunosEMedias = [alunos, medias];

function searchStudent(studentName){
	if(listaDeAlunosEMedias[0].includes(studentName)){

		const indice = listaDeAlunosEMedias[0].indexOf(studentName);

		const mediaStudent = listaDeAlunosEMedias[1][indice];

		console.log(`${studentName} tem a média ${mediaStudent}.`);
	}else {
		console.log("Aluno não encontrado!");
	}
}	

searchStudent("João");