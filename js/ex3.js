let anosNasc = []
let nomes = []
let anoAtual = Number(prompt("Informe o ano atual: "))
const N = Number(prompt("Quantas pessoas deseja cadastrar?"))

for (let i = 0; i < N; i++) {
    let nome = prompt("Insira o nome da pessoa: ")
    let ano = Number(prompt(`Em que ano ${nome} nasceu?`))
    anosNasc.push(ano)
    nomes.push(nome)
}

function verificarIdades(anosNasc, anoAtual) {
    let resultados = []
    for (let i = 0; i < anosNasc.length; i++ ) {
        let idade = anoAtual - anosNasc[i]
        let status = idade >= 18 ? "Maior de idade" : "Menor de idade";
        resultados.push({nome: nomes[i], idade, status})
    }
    return resultados;
}

let resultados = verificarIdades(anosNasc, anoAtual)

for (let i = 0; i < resultados.length; i++) {
    console.log(
        `Pessoa ${i + 1}: ${resultados[i].nome} - ${resultados[i].idade} anos - ${resultados[i].status}`
    );
}

console.log(resultados)