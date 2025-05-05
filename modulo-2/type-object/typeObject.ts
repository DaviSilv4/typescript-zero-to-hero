// ==> Exemplo 01 -> Exemplo básico do uso do Type Object

const pessoa = {
    nome: 'David',
    sobrenome: 'Silva',
    funcao: 'Desenvolvedor Jr'
}

console.log(pessoa);

// ==> Exemplo 02 -> object como parâmetros de função (eles podem ser anônimos)

// function onboarding01(funcionario: { nome: string }) {
//     return 'Seja bem-vindo(a) ' + funcionario.nome;
//   }
  
// console.log(onboarding01({ nome: 'David Silva' }));

// ==> Exemplo 03 -> object nomeados

interface Pessoa {
    nome: string;
    funcao: string;
}

function onboarding02(funcionario: Pessoa): string {
    return `Seja bem vindo(a) ${funcionario.nome}`
}

console.log(onboarding02({ nome: 'David Silva', funcao: 'Desenvolvedor Jr' }))


// ==> Exemplo 04 -> object como type alias

type Pessoa03 = {
    nome: string;
    funcao: string;
    linguagem: string;
}


function onboarding03(pessoa: Pessoa03) {
    return (
      'Seja bem-vinda ' +
      pessoa.nome +
      '!' +
      ' Sua função aqui na empresa será ' +
      pessoa.funcao +
      '.' +
      ' Você trabalhará com a linguagem ' +
      pessoa.linguagem +
      '.'
    );
  }
  
  console.log(onboarding03({ nome: 'Glaucia Lemos', funcao: 'Cloud Advocate', linguagem: 'JavaScript/Typescript' }));
  


// ==> Exemplo 05 -> usando optional no object

interface Pessoa04 {
    nome: string;
    funcao: string;
    linguagem: string;
    email?: string;
}


function onboarding04(pessoa: Pessoa04) {
    return (
      'Seja bem-vinda ' +
      pessoa.nome +
      '!' +
      ' Sua função aqui na empresa será ' +
      pessoa.funcao +
      '.' +
      ' Você trabalhará com a linguagem ' +
      pessoa.linguagem +
      '.'
    );
  }
  
  console.log(onboarding04({ nome: 'Glaucia Lemos', funcao: 'Cloud Advocate', linguagem: 'JavaScript/Typescript' }));

// ==> Exemplo 06 -> Propriedade 'readonly' (se deseja proibir que os devs não modifiquem um determinado objeto use o '
//readonly)

interface Pessoa05 {
    nome: string;
    funcao: string;
    linguagem: string;
    readonly email: string;
  }
  
  function onboarding05(pessoa: Pessoa05) {
    return (
      'Seja bem-vinda ' +
      pessoa.nome +
      '!' +
      ' Sua função aqui na empresa será ' +
      pessoa.funcao +
      '.' +
      ' Você trabalhará com a linguagem ' +
      pessoa.linguagem +
      '.' +
      ' Seu e-mail será ' +
      pessoa.email
    );
  }
  
  console.log(onboarding05(
    {
      nome: 'Glaucia Lemos',
      funcao: 'Cloud Advocate',
      linguagem: 'JavaScript/Typescript',
      email: 'gllemos@microsoft.com'
    }
  ));

// ==> Exemplo 07 -> tipos de extensões (heranças)

interface Mae {
    nome: string;
};

interface Pai {
    sobrenome: string;
};

interface Filho extends Pai, Mae{
    idade: number;
};

const filho: Filho = {
    nome: 'David',
    sobrenome: 'Silva',
    idade: 23
};

console.log(filho);
// ==> Exemplo 08 -> Tipos de Interseções

interface Cachorro {
    tipo: string;
};

interface Gato {
    tipo: string
};

type Animal = Cachorro & Gato;

// Exemplo 09 - Generic Objects

type Usuario = {
    nome: string;
    email: string;
};

type Admin = {
    nome: string;
    email: string;
    admin: boolean;
}

const usuario: Usuario = {
    nome: 'David Silva',
    email: 'algumacoisa@gmai.com'
};

const usuarioAdmin: Admin = {
    nome: 'David Silva',
    email: 'algumacoisa@gmai.com',
    admin: true
};

function acessarSistema<T>(usuario: T): T {
    return usuario;
}

console.log(acessarSistema<Usuario>(usuario));
console.log(acessarSistema<Admin>(usuarioAdmin));

// function acessarSistema(usuairo: Usuario): Usuario{
//     return usuairo;
// }

// console.log(acessarSistema(usuairo));