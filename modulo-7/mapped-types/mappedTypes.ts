export { };


// ==> Exemplo 01: Mapped Types

type Usuario = {
    nome: string;
    endereco: string;
    telefone: string;
    idade: number;
}

// type UsuarioOpticional = {
//     nome?: string;
//     endereco?: string;
//     telefone?: string;
//     idade?: number;
// }

type SomenteLeitura = {
    readonly nome: string;
    readonly endereco: string;
    readonly telefone: string;
    readonly idade: number;
}

// {  [/p in K]: T }

type UsuarioMappedType = {
    [P in keyof Usuario]?: Usuario[P]; // for in
    //P - idenifica 
};

// 'nome' | 'endereco' | 'telefone' | 'idade'

const usaurioMapped: UsuarioMappedType = {
    nome: 'David',
    endereco: 'Rua 2'

}

console.log(usaurioMapped);

// ==> Exemplo 02: Outros Tipos Avançados

interface Livro {
    autor: string | null;
    numeroPaginas: number;
    preco: number;
    titulo: string;
}

type Artigo = Omit<Livro, 'numeroPaginas'>;


type LivroModelo = Readonly<Livro>;

const livro: LivroModelo = {
    autor: 'Boris Cherny',
    numeroPaginas: 324,
    preco: 19.99,
    titulo: 'Programming Typescript: Making Your JavaScript Applications Scale'
}

console.log(livro);