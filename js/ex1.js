let a = Number(prompt("informe o valor de a: "))
let b = Number(prompt("informe o valor de b: "))
let c = Number(prompt("informe o valor de c: "))

const discriminante = (b**2) - 4*a*c 
const x1 = (-b + Math.sqrt(discriminante)) / 2
const x2 = (-b - Math.sqrt(discriminante)) / 2

if (discriminante < 0) {
    alert("A equação não possui raízes reais")
} 
else if (discriminante === 0) {
    alert("A equação tem uma raíz dupla ")
    //como as equações sao iguais, tanto faz qual valor eu vou usar!! 
    console.log("raiz dupla: ",x1, x2)
} else {
    console.log("primeira raíz: ", x1 , "segunda raíz: ", x2)
}
