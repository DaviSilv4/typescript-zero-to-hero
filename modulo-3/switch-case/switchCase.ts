// ==> Exemplo 01 - Uso do switch...case

let flor = 'tulipa';

switch (flor) {
    case 'rosa':
            console.log('Rosas são vermelhas');
        break;
    case 'violeta':
            console.log('Violetas são Azuis');
        break;
    case 'tulipa':
            console.log('Tulipas são brancas');
        break;

    default:
        console.log('Por favor selecione outra flor');
        break;
}

// ==> Exemplo 02 - Uso do switch...case

let diUtilSemana = 5;

switch (diUtilSemana) {
    case 1:
        console.log('Segunda! ')
        break;
    case 2:
        console.log('Terça ')
        break;
    case 3:
        console.log('Quarta! ')
        break;
    case 4:
        console.log('Quinta! ')
        break;
    case 5:
        console.log('Sexta! ')
        break;

    default:
        console.log('Não é dia util')
        break;
}