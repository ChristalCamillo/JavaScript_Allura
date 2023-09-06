const fichaGuerreiro = {
 nome: "Aragorn",
 classe: "guerreiro"
}

const equipoGuerreiro = {
 espada: "Andúril",
 capa: "capa élfica +2"
}

const personagens = {
	...fichaGuerreiro,
	...equipoGuerreiro
};

console.log(personagens);