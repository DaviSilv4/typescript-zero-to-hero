// ==> Exemplo 01 - Optional Parameter

function informarDadosPessoa(idPessoa: number, nome: string, email?: string){
    console.log('Id Funcionário...: ', idPessoa, 'Nome...: ', nome);

    if(email != undefined) console.log('E-mail ...:', email);
}

informarDadosPessoa(2 ,'David');
  
// ==> Exemplo 02

function mensagemLog(mensagem: string, usuarioId?: number){
    const horaLog = new Date().toLocaleTimeString();

    console.log(horaLog, mensagem, usuarioId || 'Usúario(a) não conectado');
}

mensagemLog('Atualizar página')
mensagemLog('Usuário(a) logado com sucesso', 3);

// ==> Exemplo 03

type Pessoa2 = {
    idFuncionario: number;
    nome: string;
    idade?: number;
    email?: string;
}

let pessoa: Pessoa2;

pessoa = {
    idFuncionario: 23131,
    nome: 'David',
}

console.log(pessoa);