//==>Exemplo 01: Get

export { };


class Quadrado {
    private _largura = 5;
    private _altura = 3;

    get calcularQuadrado(){
        return this._altura * this._largura;
    }
}

console.log(new Quadrado().calcularQuadrado);

//==> Exemplo 02: Set

class Pessoa {
    nome: string

    retornaNomePessoa(setNomePessoa: string){
        this.nome = setNomePessoa;
    }
}

const pessoa = new Pessoa();
pessoa.retornaNomePessoa('David');
console.log('O nome é...: ' + pessoa.nome);


//==>Exemplo 03: Get [explicação mais densa]

class Estudante_01 {
    private _nome = 'David';
    private _semestre: number;
    private _curso: string;

    public get nomeEstudante(){
        return this._nome;
    }

}

const estuadante_01 = new Estudante_01();
const resultado = estuadante_01.nomeEstudante;
console.log(resultado);

//==>Exemplo 04: Set/Get [explicação mais densa]

class Estudante_02 {
    nome = 'David';
    semestre: number;
    curso: string;

    constructor(nome: string, semestre: number, curso: string){
        this.curso = curso;
        this.nome = nome;
        this.semestre = semestre;
    }

    public get cursos(){
        return this.curso;
    }

    public set cursos(setCurso: string){
        this.curso = setCurso;
    }

}

const estuadante_02 = new Estudante_02('David', 5, 'Sistema da Informação');
console.log(estuadante_02.cursos);
estuadante_02.cursos = 'Análise e Desenvolvimento de Sistemas';