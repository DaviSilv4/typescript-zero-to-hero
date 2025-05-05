// ==> Exemplo 01 - Functions (Named function)

function somarNumeros(num1: any, num2: any) {
    return num1 + num2;
}

console.log(somarNumeros(2, 3));
  
// ==> Exemplo 02 - Função Anônima (Function Expression)

const saudar = function(mensagem: string){
    return mensagem;
};

console.log(saudar('Olá developers'));

// ==> Exemplo 03 - (Arrow Function Expression)

const saudar03 = (message: string) => {
    return mensagem;
};

console.log(saudar03('Olá developers'));

// ==> Exemplo 04 - (Function constructor)

const saudar_04 = new Function('mensagem', 'return "Fala " + mensagem');

console.log(saudar_04('Galera!'));