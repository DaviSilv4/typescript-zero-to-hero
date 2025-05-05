export { };

// ==> Exemplo 01

class Funcionario {
    readonly dataDeNascimento: Date;

    constructor(dataDeNascimento: Date){
        this.dataDeNascimento = dataDeNascimento;
    };
}

const funcionario = new Funcionario(new Date(2001, 10, 8));
// funcionario.dataDeNascimento = new Date(2001, 10, 8);
// ==> Exemplo 02

class Funcionario_02 {
    constructor(readonly dataNascimento: Date) {
        this.dataNascimento = dataNascimento;
    }
}

// ==> Exemplo 03

class Funcionario_03 {
    nome: string;
    readonly codigoFuncionario: number;

    constructor( nome: string, codigoFuncionario: number) {
        this.nome = nome;
        this.codigoFuncionario = codigoFuncionario;
    }
}

const func = new Funcionario_03('David', 2313);
console.log('Nome do funcionario...:' + func.nome);
console.log('Código do funcionario...:' + func.codigoFuncionario);
// ==> Exemplo 04 - Interface

interface iFuncionario {
    nomeFuncionario: string;
    codigoFuncionario: number;
}

const funcionario_04 = Readonly<iFuncionario> = {
    codigoFuncionario: 1231,
    nomeFuncionario: 'David',
}
const funcionario_05: iFuncionario = {
    codigoFuncionario: 1231,
    nomeFuncionario: 'David'
}