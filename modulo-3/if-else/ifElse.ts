// ==> Exemplo 01 - Uso do if

const numeroMaximo = 100;

let contador = 100;

if(contador < numeroMaximo){
    contador++;
}

console.log(contador);

// ==> Exemplo 02 - Uso do if

const permissaoIdadeDirigir = 18;

if(permissaoIdadeDirigir >= 18){
    console.log('Pode dirigir!');
}

// ==> Exemplo 03 - Uso do if-else

const permissaoIdadeDirigir01 = 17;

if(permissaoIdadeDirigir01 >= 18){
    console.log('Pode dirigir!');
}else {
    console.log('Não pode dirigir!')
}



//==> Exemplo 04 - if... else if

let desconto;
const itemContador = 14;

if(itemContador > 0 && itemContador <= 5){
    desconto = 5;
    
} else if(itemContador > 5 && itemContador <= 10){
    desconto = 10
}else{
    desconto = 15;
}

console.log("Você teve um desconto de... : " + desconto);
// ==> Exemplo 05 - Ternário (? :) - if...else

// const idadeVotacao = 18;

// if(idadeVotacao >= 18) {
//     console.log('Pode votar!');
// }else {
//     console.log('Não pode votar');
// }

// ==> Ternário

const idadeVotacao = 18;
const podeVotar = (idadeVotacao >= 18) ? 'Pode votar' : 'Não pode votar';
console.log(podeVotar); 