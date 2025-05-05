export { };

// ==> Exemplo 01 - Type Casting: 'as'

const nome: unknown = 'David Silva';
console.log((nome as string));

// ==> Exemplo 02 - Type Casting: '<>'
const carro = 'Astra'; 

const tamanhoString: number = (<string> carro).length;
console.log('O tamanho da string é...: ', tamanhoString);