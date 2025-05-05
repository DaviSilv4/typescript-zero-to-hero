export { };

// ==> Exemplo 01: Propriedades Estáticas

class Funcionario  {
    static contratacoes = 0;
    constructor(private nome: string, private sobrenome: string, private titulo: string) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.titulo = titulo;
        Funcionario.contratacoes++
    }
}


const funcionario_01 = new Funcionario('David', 'Silva', 'Dev');
const funcionario_02 = new Funcionario('Julia', 'Santos', 'Dev');

console.log(Funcionario.contratacoes);

// ==> Exemplo 02 - Métodos estáticos

class Funcionario_01 {
    private static contratacoes = 0;
    constructor(private nome: string, private sobrenome: string, private titulo: string) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.titulo = titulo;

        Funcionario.contratacoes++
    }

    public static retornaContratacoes(): number{
        return Funcionario.contratacoes++;
    }
}

const funcionario_03 = new Funcionario_01('David', 'Silva', 'Dev');
const funcionario_04 = new Funcionario_01('Julia', 'Santos', 'Dev');

console.log(Funcionario_01.retornaContratacoes())

// ==> Exemplo 03 - Propriedades estáticas

type Raca = 'Spitz Alemão' | 'Buldogue' | 'Pug' | 'Yorkshire' | 'Poodle';

class Cachorro {
    nome: string;
    idade: number;
    racas: Raca[];
    static QTD_CACHORRO_VENDIDO = 0;

    constructor( nome: string, idade: number, racas: Raca[]) {
        this.nome = nome;
        this.idade = idade;
        this.racas = racas;

        Cachorro.QTD_CACHORRO_VENDIDO++;
        console.log(Cachorro.QTD_CACHORRO_VENDIDO);
    }

    public exibirInformacao(): void{
        console.log(`O cachorro ${this.nome} tem ${this.idade}.`)
    }
}

const cachorro_01 = new Cachorro('Pipoca', 4, ['Spitz Alemão']);
const cachorro_02 = new Cachorro('Farofa', 6, ['Yorkshire']);

