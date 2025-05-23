// ==> Exemplo 01

function somarNumeros(...numeros: number[]){
    let total = 0;

    numeros.forEach((numeros) => (total += numeros));
    return total;
}

console.log(somarNumeros(3, 5, 6));
// ==> Exemplo 02

function listarFrutas(frase: string, ...frutas: string[]){
    return frase + ' ' + frutas.join(',');
}

console.log(listarFrutas(
    'Glaucia, você precisa ir na feira para comprar...:',
    '🥥',
    '🍓',
    '🍌',
    '🍍',
))


// ==> Exemplo 03

class Produtos {
    public exibirProdutos(...produtos: string[]): void {
        for (const produto of produtos) {
            console.log(produto);
        }
    }
}

const departamentoInformatica: Produtos = new Produtos();

console.log('Todos os produtos do departamento de Informatica disponíveis no estoque...: ');

departamentoInformatica.exibirProdutos(
    'Mouse',
    'Notebook',
    'USB',
    'Monitor',
    'Teclado',
    'WebCam',
  );