function validaProc() {

    let resposta;

    do {
        let peso = prompt("Digite seu peso:");
        while (isNaN(peso) || peso <= 0) {
            peso = prompt("Digite apenas números válidos! Digite seu peso:");
        }
        let altura = prompt("Digite sua altura:");
        while (isNaN(altura) || altura <= 0) {
            altura = prompt("Digite apenas números válidos! Digite sua altura:");
        }
        // Verificação se o valor é realmente um número
        if (isNaN(peso) || isNaN(altura)) {
            alert("Digite apenas números válidos.");
        } else {
            console.log("Peso: ", peso);
            console.log("Altura: ", altura);
        }

        // Conta
        let imc = (peso / (altura * altura))

        // Resultado
        console.log("IMC: ", imc.toFixed(2));
        resposta = prompt("Seu IMC é " + imc.toFixed(2) + ". Se deseja finalizar escreva 'Finalizar', se deseja continuar digite qualquer outro caractere.");

    } while (resposta.toLowerCase() !== "finalizar")
}