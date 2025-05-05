// Exemplo 01 - Uso de Colchetes:

let frutas1: string[] = ['🍍', '🍊', '🍎', '🍉', '🥭'];
console.log(frutas1[2]);

// Exemplo 02 - Array Objeto (Objeto Array)
let frutas2: Array<string> = ['🍍', '🍊', '🍎', '🍉', '🥭'];
console.log(frutas2[3])

// Exemplo 03 - Adicionando mais strings com método 'push'

let idiomas1: Array<string> = ['Português', 'Inglês', 'Espanhol', 'Francês'];
console.log(idiomas1);

idiomas1.push('Mandarim');

console.log(idiomas1);

idiomas1.push('Italiano');

console.log(idiomas1);
// Exemplo 04 - Identificar tamanho array  - método 'length'

let idiomas2: Array<string> = ['Português', 'Inglês', 'Espanhol', 'Francês'];
console.log(idiomas2.length);

// Exemplo 05 - Exemplo de Array com Spred Operation

let listaNumeros = [0, 1, 2, 3, 4, 5];
listaNumeros = [...listaNumeros, 6, 7, 8, 9, 10];

console.log(listaNumeros);

// Exemplo 06 - Exemplo de Array com laço de interação

let linguagensArray: string[] = new Array('JavaScript', 'Python', 'PHP', 'C#', 'Java');

function funcaoLinguagens(linguagens: string[]){
    for (let i = 0; i < linguagens.length; i++) {
        const linguagem = linguagens[i];
        console.log(linguagem);
    }
}

funcaoLinguagens(linguagensArray);
