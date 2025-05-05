export { };

// ==> Exemplo 01 - Type Assertions (as / < >)

function exibirPrecoFinal(preco: number, desconto: number, formato: boolean): number | string{
    const precoComDesconto = preco * (1 - desconto);
    return formato ? `R$ ${precoComDesconto}` : precoComDesconto;
}

// const descontoFinal = exibirPrecoFinal(123, 0.10, true) as string;
const descontoFinal = <number>exibirPrecoFinal(123, 0.10, false);
console.log(descontoFinal);

// ==> Exemplo 02 - Type Assertions

type Humano = {
    nome: string;
    idade: number;
    idioma: string;
}

const humano = {
    idade: 23,
    idioma: 'Português'
}

const humano_02 = humano as Humano;
console.log(humano_02.nome.toUpperCase());