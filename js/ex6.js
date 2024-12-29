const n = Number(prompt("Informe quantos elementos deseja ver na sequencia de Fibonacci: "));

let a = 0;
let b = 1;

function fibonacci(n){
  for (let i = 0; i < n; i++) {
    console.log(a);
    a = b;
    b = c;
    let c = a + b;
    }
}
fibonacci(n);