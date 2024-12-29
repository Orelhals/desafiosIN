//colatando do usuário o valor em real a ser convertido!
let real = Number(prompt("Insira o valor a ser convertido (em reais): ")).toFixed(2)

//definindo os valores do euro e dollar
const euro = Number(6.1)
const dollar = Number(5.7)

//funçao que converte em euro e retorna para o escopo global o valor da operação
function converterEuro() {
    let conversaoEuro = real/euro
    return conversaoEuro
}

//funçao que converte em dollar e retorna para o escopo global o valor da operação
function converterDollar() {
    let conversaoDollar = real/dollar
    return conversaoDollar
    // o motivo do return é q ele está sendo retornado para fora da funçao e guardado na variavel;
}

const convertidoEuro = converterEuro().toFixed(2)
const convertidoDollar = converterDollar().toFixed(2)

console.log(`R$${real} equivale a € ${convertidoEuro}`)
console.log(`R$${real} equivale a € ${convertidoDollar}`)