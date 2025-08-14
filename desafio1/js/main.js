function validaProc(){
      
    if(document.frmnumero.txtnum1.value=="") {
        alert("Preencha o campo primeiro número");
        document.frmnumero.txtnum1.focus();
        return false;

    } else if (document.frmnumero.txtnum2.value=="") {
        alert("Preencha o campo segundo número");
        document.frmnumero.txtnum2.focus();
        return false;

    } else {

    // Pega os valores dos inputs
        let num1 = parseFloat(document.frmnumero.txtnum1.value);
        let num2 = parseFloat(document.frmnumero.txtnum2.value);

    // Verificação se o valor é realmente um número
        if (isNaN(num1) || isNaN(num2)) {
            alert("Digite apenas números válidos.");
            return false;
        } else {
            console.log("Primeiro número: ", num1);
            console.log("Segundo número: ", num2);
            }
        
    // Conta
        let resultado = (num1 + num2)

    // Pergunta da conta
        let resposta = prompt("Qual é a soma dos dois números?:");
        let respostaNum = parseFloat(resposta);

    // Repete enquanto for incorreta ou inválida
    while (isNaN(respostaNum) || respostaNum !== resultado) {
        resposta = prompt("Resposta incorreta! Tente novamente! Qual é a soma dos dois números?");
        respostaNum = parseFloat(resposta);
    }

    alert("Resultado correto!");
    console.log("Resultado: ", resultado);
    return false;
}
}