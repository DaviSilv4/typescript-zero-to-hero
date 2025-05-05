// ==> Exemplo 01 - Uso simples de Tuplas em TypeScript

let pessoa1: [string, string, number];
pessoa1 = ['David Silva', 'Desenvolvedor JR', 23]

console.log(pessoa1);

// ==> Exemplo 02 - Acessando o valor da Tupla

let pessoa2: [string, string, number];
pessoa2 = ['David Silva', 'Desenvolvedor JR', 23]

console.log(pessoa2[1]);


// ==> Exemplo 03 - Outra forma de usar Tuplas em TypeScrit (com labels)

let pessoa3: [nome: string,profissao: string,idade: number] = ['David Silva', 'Desenvolvedor JR', 23]
// pessoa3 = ['David Silva', 'Desenvolvedor JR', 23]
console.log(pessoa3);

// ==> Exemplo 04 - Usando Tuplas com Spread Operator

let frutas: [string, ...string[]] = ['🍍', '🍊', '🍎', '🍉', '🥭'];
console.log(...frutas);

//==> Exemplo 05 - Lista Heterogênea de Tupla:

let listaFrutas: [number, boolean, ...string[]] = [5, true, ...frutas];
console.log(listaFrutas);

// ==> Exemplo 06 - Uso de função com Tuplas

function listarPessoas(nomes: string[], idades: number[]){
    return [...nomes, ...idades]
}

let resultados = listarPessoas(['David', 'Rosana'], [23, 41]);
console.log(resultados);
// ==> Exemplo 07 - Labeled Tuples com Spread Operator numa função

type Nome  = 
        | [primeiroNome: string, sobrenome: string]
        | [primeiroNome: string, nomeMeio: string, sobrenome: string]

function criarPessoa(...nome: Nome){
    return [...nome];
}

console.log(criarPessoa('David', 'Souza'));
console.log(criarPessoa('David', 'Silva', 'Souza'));