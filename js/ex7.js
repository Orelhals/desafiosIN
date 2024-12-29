// programa para ver se a frase inserida é um palindromo

//coletando do usuário o valor em real a ser convertido!
let frase = prompt("Insira a frase a ser verificada: ").trim().toLowerCase()

let fraseInvertida = frase.split("").join("")
let fraseContrario = ""

//  por opçao de aprendizado, podia ter usado o metodo reverse() para inverter a string..
for (let i = fraseInvertida.length -1; i >= 0; i--) {
    fraseContrario += fraseInvertida[i]
}
console.log(fraseContrario)

if (frase === fraseContrario) {
    console.log("A frase é um palindromo!")
} else {
    console.log("A frase não é um palindromo!")
}
