"use strict";
// ==> Exemplo 01: Numeric Enums (Enums Numérico)
var eIdioma;
(function (eIdioma) {
    eIdioma[eIdioma["Portugues"] = 0] = "Portugues";
    eIdioma[eIdioma["Espanhol"] = 1] = "Espanhol";
    eIdioma[eIdioma["Ingles"] = 2] = "Ingles";
    eIdioma[eIdioma["Frances"] = 3] = "Frances";
})(eIdioma || (eIdioma = {}));
console.log(eIdioma[0]);
// ==> Exemplo 02: String Enums
var eDia;
(function (eDia) {
    eDia["Segunda"] = "SEG";
    eDia["Terca"] = "TER";
    eDia["Quarta"] = "QUA";
    eDia["Quinta"] = "QUI";
    eDia["Sexta"] = "SEX";
    eDia["Sabado"] = "SAB";
    eDia["Domingo"] = "DOM";
})(eDia || (eDia = {}));
console.log(eDia);
function comida(c) {
    return `Comidas muito apetitosas ${c}`;
}
console.log(comida("Churrasco" /* eComida.Churrasco */));
console.log(comida("Churrasco" /* eComida.Churrasco */));
// console.log(comida(4));
// ==> Exemplo 04: Quando usar enum?!
var eTarefa;
(function (eTarefa) {
    eTarefa[eTarefa["Todo"] = 0] = "Todo";
    eTarefa[eTarefa["Progress"] = 1] = "Progress";
    eTarefa[eTarefa["Done"] = 2] = "Done";
})(eTarefa || (eTarefa = {}));
const concluidaTarefa = {
    id: 1,
    status: eTarefa.Done,
    descricao: 'Parabéns! Tarefa concluída com sucesso!'
};
if (concluidaTarefa.status === eTarefa.Done) {
    console.log(`Enviar email: ${concluidaTarefa.descricao}`);
}
