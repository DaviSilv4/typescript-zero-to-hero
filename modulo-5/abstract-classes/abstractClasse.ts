export { };

abstract class Funcionario {
    constructor(private nome: string, private sobrenome: string) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    abstract retornarSalario(): number;
    
    get retronarNomeCompleto(): string {
        return `${this.nome} ${this.sobrenome}`;
    }

    emitorContraCheque(): string {
        return `${this.retronarNomeCompleto} - Salário ${this.retornarSalario()}`;
    }
}

class FuncionarioCLT extends Funcionario {
    constructor(private nome: string, private sobrenome: string, private salario: number) {
        super(nome, sobrenome);
    }

    retornarSalario(): number {
        return this.salario;
    }
}

class FuncionarioPJ extends Funcionario {
    /**
     *
     */
    constructor(private nome: string, private sobrenome: string, private valorHora: number, private horasTrabalhadas: number) {
        super(nome, sobrenome);
        
    }

    retornarSalario(): number {
        return this.valorHora * this.horasTrabalhadas;
    }
}

const david =  new FuncionarioCLT('David', 'Silva', 3700);
const julia = new FuncionarioPJ('Julia', 'Santos', 150, 160);

console.log(david.emitorContraCheque());
console.log(julia.emitorContraCheque());