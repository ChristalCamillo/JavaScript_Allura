// da pra atribuir propriedades ou mudar valores apos o objeto ja criado, mas só partes dele como criado com const. Não dá pra reatribuir o objeto inteiro

const pessoa = {
  nome: "Luma",
  profissao: "Engenheira",
};

console.log(pessoa.nome);

console.log(pessoa.telefone);

pessoa.telefone = "11 2223333444";

console.log(pessoa.telefone);

pessoa.nome = "Luma Silva";

console.log(pessoa);

const novaPessoa = {
  nome: "Pedro",
};

//pessoa = novaPessoa; - essa é a parte do erro