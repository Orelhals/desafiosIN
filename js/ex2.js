let continuar = true;
// No caso de ser true ele sempre executa o bloco de código com a operaçao do fatorial
while (continuar) {
    let num = Number(prompt("Informe um número que deseja saber o fatorial: "))
    if (num < 0) {
        alert("Você precisa informar um número inteiro e positivo!!!")
        perguntaValida = true
        // no caso de o número ser negativo ele vai encerrar o programa pois só aceita 
        // inteiro e positivo 
    } else {
        let fatorial = 1;
        for (let i = 1; i <= num; i++) {
        fatorial *= i;
        }
        alert(`O fatorial do ${num}, é: ${fatorial}`)
    }

    //essa outra variável foi criada para o caso da pessoa responder algo sem ser s/S ou n/N
    let perguntaValida = false;
    while (!perguntaValida) {
        
        const pergunta = prompt("Deseja continuar com a operação? (S/s ou N/n)")
        if (pergunta === "N" || pergunta === "n") {
            continuar = false;
            perguntaValida = true;
            alert("operação encerrada!");
        } else if (pergunta === "S" || pergunta === "s") {
            perguntaValida = true;
        } else {
            alert("Responda com S/s ou N/n")
            perguntaValida = false;
        }

    }
    
}


