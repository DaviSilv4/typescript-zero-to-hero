// ==> Exemplo 01: Numeric Enums (Enums Numérico)

enum eIdioma {
    Portugues,
    Espanhol,
    Ingles,
    Frances,
}

console.log(eIdioma[0]);
  
// ==> Exemplo 02: String Enums

enum eDia {
    Segunda = 'SEG',
    Terca = 'TER',
    Quarta = 'QUA',
    Quinta = 'QUI',
    Sexta = 'SEX',
    Sabado = 'SAB',
    Domingo = 'DOM',
}

console.log(eDia);

// ==> Exemplo 03: Como podemos acessar um valor de um Enum com uma chave: (usando o const)

// const enum eComida {
//     Hamburger,
//     Massa,
//     Pizza,
//     Torta,
//     Churrasco,
// }

const enum eComida {
    Hamburger = 'Hamburger',
    Massa = 'Massa',
    Pizza = 'Pizza',
    Torta = 'Torta',
    Churrasco = 'Churrasco',
  }


function comida(c: eComida){
    return `Comidas muito apetitosas ${c}`!;
}

console.log(comida(eComida.Churrasco));
console.log(comida(eComida.Churrasco));
// console.log(comida(4));

// ==> Exemplo 04: Quando usar enum?!

enum eTarefa {
    Todo,
    Progress,
    Done
}

const concluidaTarefa = {
    id: 1,
    status: eTarefa.Done,
    descricao: 'Parabéns! Tarefa concluída com sucesso!'
}

if(concluidaTarefa.status === eTarefa.Done){
    console.log(`Enviar email: ${concluidaTarefa.descricao}`);
}