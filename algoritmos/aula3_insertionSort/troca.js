function selectionTroca(livros, indexMenorPreco, indexAtual) {
    //armazena o objeto de menor preço
    let objetoMenorPreco = livros[indexMenorPreco];
    //armazena o objeto que está sendo analisado
    let objetoAtual = livros[indexAtual];


    livros[indexMenorPreco] = objetoAtual; //objetoAtual vai para a posição onde estava o objetoMenorPreco
    livros[indexAtual] = objetoMenorPreco; //a lista de livros na posição atual, recebe o objetoMenorPreço
}
module.exports = selectionTroca;