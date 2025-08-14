function validaProc() {

    let resposta;
    let i=1;
    let idade;
    let genero;
    let salario;
    let contadorGrupo=0;
    let contadorF=0;
    let contadorM=0;
    let mediaSalarioGrupo=0;
    let somaIdade=0;
    let mediaIdade=0;
    let somaSalarioF=0;
    let mediaSalarioF=0;
    let somaSalarioM=0;
    let mediaSalarioM=0;
    let somaSalarioGrupo=0;


    do {
        idade = parseInt(prompt("Digite a idade da "+i+"ª pessoa: "));
        while (isNaN(idade) || idade <= 0) {
        idade = parseInt(prompt("Digite apenas números válidos! Digite a idade da " + i + "ª pessoa:"));
        }
        genero = prompt("Digite o gênero da " + i + "ª pessoa (f/m):").toLowerCase();
        while (genero !== "f" && genero !== "m") {
        genero = prompt("Digite apenas 'f' ou 'm'. Gênero da " + i + "ª pessoa:").toLowerCase();
        }
        salario = parseFloat(prompt("Digite o salário da " + i + "ª pessoa:").replace(",", "."));
        while (isNaN(salario) || salario <= 0) {
        salario = parseFloat(prompt("Digite apenas números válidos! Salário da " + i + "ª pessoa:").replace(",", "."));
        }

        contadorGrupo++

        console.log("Idade: ", idade);
        console.log("Gênero: ", genero);
        console.log("Salário: R$", salario);

    // Condicionais
    somaSalarioGrupo += salario;
    somaIdade += idade;

    if (genero == "f") {
    contadorF++;
    somaSalarioF += salario;
    } else if (genero == "m") {
    contadorM++;
    somaSalarioM += salario;
    }

    i++; // incrementa o contador de pessoa

    // Pergunta
        resposta = prompt("Se deseja finalizar escreva 'Finalizar', se deseja continuar digite qualquer outra tecla: ");

    } while (resposta.toLowerCase() !== "finalizar");

    mediaSalarioGrupo = somaSalarioGrupo / contadorGrupo;
    mediaIdade = somaIdade / contadorGrupo;
    mediaSalarioF = contadorF > 0 ? somaSalarioF / contadorF : 0;
    mediaSalarioM = contadorM > 0 ? somaSalarioM / contadorM : 0;

    //Resultado
    console.log("");
    console.log("A média de salário do grupo: ", mediaSalarioGrupo.toFixed(2));
    console.log("A média de todas as idade: ", mediaIdade.toFixed(2));
    console.log("A média de salário do gênero feminino: ", mediaSalarioF.toFixed(2));
    console.log("A média de salário do gênero masculino: ", mediaSalarioM.toFixed(2));
    return false;
}