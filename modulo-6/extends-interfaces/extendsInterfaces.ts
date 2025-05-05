export = {};
// ==> Exemplo 01 - Interfaces com extends

interface Animal_05 {
    nome: string;
    idade: number;
    porte: string;
}

interface Cachorro_05 extends Animal_05 {
    raca: string;
}

const cachorro: Cachorro_05 = {
    nome: 'Prince',
    idade: 2,
    porte: 'Médio',
    raca: 'Spiz Alemao',
  };
  
  console.log(cachorro);

// ==> Exemplo 02 - Extensão de Múltiplas Interfaces

interface Cachorro_06 {
    nome: string;
}

interface Gato_06 {
    nome: string;
}

interface Animal_06 extends Cachorro_06, Gato_06 {
    idade: number;
}

const gato_06 = {
    nome: 'Perola',
    idade: 4
}

console.log(gato_06);

// ==> Exemplo 03 - Uso do Omit

interface Funcionario_06 {
    id: number;
    salario: number;
    nome: string;
}

interface Desenvolvedor_06 extends Omit<Funcionario_06, 'id' | 'salario'> {
    id: string;
    salario: string;
    linguageProgramacao: string;
}

const desenvolvedor_06: Desenvolvedor_06 = {
    id: 'js-123',
    nome: 'Glaucia Lemos',
    salario: '10k',
    linguageProgramacao: 'JavaScript',
}