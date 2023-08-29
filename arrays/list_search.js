// Arquivo procurando-aluno.js

// faremos uma refatoração para aumentar a legibilidade do codigo, trocando listaDeAlunosEMedias[0] por uma constante que receberá os valores em alunos: const alunos = listaDeAlunosEMedias[0];
// faremos a mesma coisa com a lista de medias. Um jeito ainda mais conciso é atribuir uma nova const [alunos, medias] = listaDeAlunosEMedias; que equivale a ambas as const criadas
//Quando abrimos e fechamos colchetes logo após uma declaração, como const, nós estamos nomeando cada um dos elementos da lista no lado direito da atrubuição. 
//Em outras palavras, criamos uma constante chamada alunos para a posição 0 de listaDeAlunosEMedias e também criamos uma constante chamada medias para a posição 1 de listaDeAlunosEMedias.
//Essa sintaxe diferenciada e específica do JavaScript chama-se sintaxe de desestruturação de listas.

const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const listaDeAlunosEMedias = [alunos, medias];

function searchStudent(studentName) {
	if (listaDeAlunosEMedias[0].includes(studentName)) {
		const [alunos, medias] = listaDeAlunosEMedias;

		const indice = alunos.indexOf(studentName);

		const mediaStudent = medias[indice];

		console.log(`${studentName} tem a média ${mediaStudent}.`);
	} else {
		console.log("Aluno não encontrado!");
	}
}

searchStudent("João");