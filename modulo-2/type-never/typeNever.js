"use strict";
// ==> Exemplo 01: Never - Throw Exception
function error(message) {
    return new Error(message);
}
console.log(error("Erro de mansagem - 01"));
// ==> Exemplo 02: Never inferido automaticamente
// ==> Exemplo 03 - Função que contém loop infinito retorna o tipo 'never'
// ==> Exemplo 04: Diferença entre os tipos: 'never' x 'void'
