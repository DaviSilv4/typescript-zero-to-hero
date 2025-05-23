"use strict";
// ==> Exemplo 01: Tipo Unknown
let valorVariavel;
valorVariavel = true;
valorVariavel = 123;
valorVariavel = [];
valorVariavel = 'Oi tudo bem?';
console.log(valorVariavel);
// ===> Exemplo 02: Erro ao tentar atribuir um valor do tipo 'unknown' a outros tipos!
// let valor: unknown;
// let valor1: boolean = valor;
// let valor2: any = valor;
// let valor3: any[] = valor;
// let valor4: string = valor;
// ===> Exemplo 03: diferença entre: 'any' vs 'unknown'
let algumaCoisaAny;
let algumaCoisaUnknown;
console.log(algumaCoisaAny.toFixed(2));
// console.log(algumaCoisaUnknown.toFixed(2))
if (typeof algumaCoisaUnknown === 'number') {
    console.log(algumaCoisaUnknown.toFixed());
}
