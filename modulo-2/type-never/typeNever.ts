// ==> Exemplo 01: Never - Throw Exception

// function error(message: string): never {
//     return new Error(message);
// }

// console.log(error("Erro de mansagem - 01"))

// ==> Exemplo 02: Never inferido automaticamente

// function rejectMessage() { 
//     return error('Error de mensagem - 02');
// }

// console.log(rejectMessage());


// ==> Exemplo 03 - Função que contém loop infinito retorna o tipo 'never'

const loopIInfinito =  function loop(){
    while(true){
        console.log('Oi, developers');
    }
}

console.log(loopIInfinito())
  
// ==> Exemplo 04: Diferença entre os tipos: 'never' x 'void'

// const algumaCoisaVoid: void = undefined;

// const algumaCoisaNever: never = null;

// console.log(algumaCoisaVoid);
// console.log(algumaCoisaNever);