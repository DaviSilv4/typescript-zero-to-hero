export {};

// ==> Exemplo 01- Modificador: public

class Estudante {
    codigoEstudante: number;
    nomeEstudante: string;
}

const estuadante = new Estudante();

estuadante.codigoEstudante = 32;
estuadante.nomeEstudante = 'David Silva';

console.log(estuadante.codigoEstudante);
console.log(estuadante.nomeEstudante);
  
// ==> Exemplo 02 - Modificador: private

class Estudante_02 {
    codigoEstudante: number;
    nomeEstudante: string;
    private idade: number;

    constructor(codigoEstudante: number, nomeEstudante:string, idade: number){
        this.codigoEstudante = codigoEstudante;
        this.nomeEstudante = nomeEstudante;
        this.idade = idade;
    }

    retornarDadosEstudante(): string{
        return `Código do Aluno...: ${this.codigoEstudante}
            Nome do Aluno...: ${this.nomeEstudante}
            Idade do Aluno...: ${this.idade}`;
    }
}

const estuadante_02 = new Estudante_02(213, 'David', 32);
console.log(estuadante_02.retornarDadosEstudante());

// ==> Exemplo 03 - Modificador: protected

class Estudante_03 {
    codigoEstudante: number;
    protected nomeEstudante: string;

    constructor(codigoEstudante: number, nomeEstudante: string){
        this.codigoEstudante = codigoEstudante;
        this.nomeEstudante = nomeEstudante;
    }
}

class Pessoa extends Estudante_03 {
    private curso: string;
    
    constructor(codigoEstudante: number, nomeEstudante: string, curso: string){
        super(codigoEstudante, nomeEstudante)
        this.curso = curso;
    }

    retornarDadosAluno(){
        return `Código do Aluno...: ${this.codigoEstudante}
        Nome do Aluno...: ${this.nomeEstudante}
        Curso do Aluno...: ${this.curso}`;
    }
}

const pessoa = new Pessoa(212, 'David', 'TI');
console.log(pessoa.retornarDadosAluno());

