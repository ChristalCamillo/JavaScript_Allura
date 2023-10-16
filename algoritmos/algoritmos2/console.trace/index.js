function ola(){
    function mundo() {
        console.trace('Ola Mundo');
      }
  mundo();
}

ola();

//Esse método funciona como ferramenta importante para encontrarmos bugs e atua de mãos dadas com o interpretador. 
//Essa prática é possível graças ao motor de interpretação do JavaScript (também chamado de engine) que utiliza uma pilha de chamadas (call stack) como regra de execução de funções. 
//A pilha de chamadas trabalha com a estrutura de dados conhecida como pilha, que tem como regra que "o último a entrar é o primeiro a sair" - uma sigla conhecida na programação como LIFO, last-in-first-out.