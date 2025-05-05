"use strict";
// ==> Exemplo 01 - Uso simples de Tuplas em TypeScript
let pessoa1;
pessoa1 = ['David Silva', 'Desenvolvedor JR', 23];
console.log(pessoa1);
// ==> Exemplo 02 - Acessando o valor da Tupla
let pessoa2;
pessoa2 = ['David Silva', 'Desenvolvedor JR', 23];
console.log(pessoa2[1]);
// ==> Exemplo 03 - Outra forma de usar Tuplas em TypeScrit (com labels)
let pessoa3 = ['David Silva', 'Desenvolvedor JR', 23];
// pessoa3 = ['David Silva', 'Desenvolvedor JR', 23]
console.log(pessoa3);
// ==> Exemplo 04 - Usando Tuplas com Spread Operator
let frutas = ['🍍', '🍊', '🍎', '🍉', '🥭'];
console.log(...frutas);
//==> Exemplo 05 - Lista Heterogênea de Tupla:
let listaFrutas = [5, true, ...frutas];
console.log(listaFrutas);
// ==> Exemplo 06 - Uso de função com Tuplas
function listarPessoas(nomes, idades) {
    return [...nomes, ...idades];
}
let resultados = listarPessoas(['David', 'Rosana'], [23, 41]);
console.log(resultados);
function criarPessoa(...nome) {
    return [...nome];
}
console.log(criarPessoa('David', 'Souza'));
console.log(criarPessoa('David', 'Silva', 'Souza'));
