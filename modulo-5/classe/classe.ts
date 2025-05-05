// ==> Exemplo 01 - Classes

export {};

class Pessoa {
    nome: string;
    sobrenome: string;

    constructor(nome: string, sobrenome: string){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    nomeCompleto(): string {
        return `${this.nome} ${this.sobrenome}`;
    }
}

const pessoa = new Pessoa('David', 'Silva');


// ==> Exemplo 02 - Classes (sem constructor)

class Estudante { 
    codigoEstudante: number;
    nomeEstudante: string;
}

const estudante = new Estudante();
estudante.codigoEstudante = 2;
estudante.nomeEstudante = 'David'

console.log('Código do Estudante ...: ' + estudante.codigoEstudante);
console.log('Nome do Estudante ...: ' + estudante.nomeEstudante);

// Criar um objeto ou a instancia

class Estudante1 {
    codigoEstudante: number;
    nomeEstudante: string;

    constructor(codigoEstudante: number, nomeEstudante: string){
        this.codigoEstudante = codigoEstudante;
        this.nomeEstudante = nomeEstudante;
    }
    
    listarEstudantes(): void{
        console.log('Código do estudante ...:' + this.codigoEstudante);
        console.log('Nome do estudante ...:' + this.nomeEstudante);
    }
}

const estudante1 = new Estudante1(3, 'David');
console.log(estudante1.listarEstudantes());

// Inicializar o objeto:

// Acessar os campos:

// ==> Exemplo 03 - Classes (com constructor)

// Definir o Construtor


// Criar o método


// Acessar os campos: