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


    do {
        idade = parseInt(prompt("Digite a idade da "+i+"ª pessoa: "));
        while (isNaN(idade)) {
        idade = parseInt(prompt("Digite apenas números válidos! Digite a idade da "+ (i) +"ª pessoa:"));
        }
        genero = prompt("Digite o gênero da "+ (i) +"ª pessoa(f/m):");
        while (genero.toLowerCase() !== "f" && genero.toLowerCase() !== "m") {
            genero = prompt("Digite apenas caracteres válidos! Digite o gênero da "+ (i) +"ª pessoa(f/m):");
        }
        salario = parseFloat(prompt("Digite o salário da "+i+"ª pessoa: ").replace(",", "."));
        while (isNaN(salario) || salario <= 0) {
        salario = parseFloat(prompt("Digite apenas números válidos! Digite o salário da "+ (i) +"ª pessoa:").replace(",", "."));
        }

        contadorGrupo++

        console.log("Idade: ", idade);
        console.log("Gênero: ", genero);
        console.log("Salário: R$", salario);

    // Pergunta
        resposta = prompt("Se deseja finalizar escreva 'Finalizar', se deseja continuar digite qualquer outro caractere: ");

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

    } while (resposta.toLowerCase() !== "finalizar")

    mediaSalarioGrupo = somaSalarioGrupo / contadorGrupo;
    mediaIdade = somaIdade / contadorGrupo;
    mediaSalarioF = contadorF > 0 ? somaSalarioF / contadorF : 0;
    mediaSalarioM = contadorM > 0 ? somaSalarioM / contadorM : 0;

    //Resultado
    console.log("");
    console.log("A média de salário do grupo: ", mediaSalarioGrupo);
    console.log("A média de todas as idade: ", mediaIdade);
    console.log("A média de salário do gênero feminino: ", mediaSalarioF);
    console.log("A média de salário do gênero masculino: ", mediaSalarioM);
    return false;
}