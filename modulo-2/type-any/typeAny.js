"use strict";
// ==> Exemplo 01: Tipo Any
const a = 23;
const b = ['David'];
const result = a + b;
console.log(result);
// ==> Exemplo 02: Quando o tipo 'any' é inferido implícitamente
let frase;
frase = 'Hello nice too meet you?';
console.log(frase);
// ==> Exemplo 03: Quando devemos usar o tipo any?!
const formulario = {
    nome: 'David',
    sobrenome: 'Silva',
    idade: 23
};
console.log(formulario);
