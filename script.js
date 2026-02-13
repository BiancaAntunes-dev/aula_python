/*Nível 1: Operações Básicas e Variáveis
1. Boas-vindas: Crie um algoritmo que receba o nome de um usuário e exiba a
mensagem: "Olá [nome], seja bem-vindo ao curso de Programação!".*/
    const nome_usuario = prompt('Informar nome:');
    alert(`Olá ${nome_usuario}, seja bem-vindo ao curso de Programação!`)

/*2.Soma Simples: Peça dois números ao usuário e exiba a soma deles. (Cuidado
com a conversão de texto para número!).*/
    const num1 = Number(prompt('Informar o primeiro número'));
    const num2 = Number(prompt('Informar o segundo número'));
    const soma = (num1 + num2);
    alert(`A soma dos dois números é: ${soma}`);

/*3. Calculadora de Idade: Receba o ano de nascimento do usuário e o ano atual.
Calcule e mostre a idade aproximada.*/
    const ano_de_nascimento = Number(prompt('Informar o ano de nascimento'));
    const ano_atual = Number(prompt('Informar ano atual'));
    const idade_aproximada = ano_atual - ano_de_nascimento;
    alert(`Sua idade aproximada é: ${idade_aproximada}`);

/*4. Média Semestral: Peça as notas de 4 bimestres e calcule a média aritmética
final.*/
    const nota_PrimeiroBimestre = Number(prompt('Informar a nota do Primeiro bimestre:'));
    const nota_SegundoBimestre = Number(prompt('Informar a nota do Segundo bimestre:'));
    const nota_TerceiroBimestre = Number(prompt('Informar a nota do Terceiro bimestre:'));
    const nota_QuartoBimestre = Number(prompt('Informar a nota do Quarto bimestre:'));
    const media_final = (nota_PrimeiroBimestre + nota_SegundoBimestre + nota_TerceiroBimestre + nota_QuartoBimestre) / 4;
    alert(`Sua média final é: ${media_final}`);

/*5. Conversor de Medidas: Crie um programa que receba um valor em metros e
exiba o equivalente em centímetros.*/
    const metros = Number(prompt('Informar valor em metros:'));
    const centimetros = metros * 100;
    alert(`A conversão em metros para centímetros é: ${centimetros} cm`);

/*6. Gorjeta do Garçom: Leia o valor total de uma conta de restaurante e exiba o valor
de 10% da gorjeta.*/
    const conta = Number(prompt("Valor total da conta:"));
    const gorjeta = conta * 0.10; // 10%
    alert(`A gorjeta de 10% é R$ ${gorjeta.toFixed(2)}`);


/*7. Área de Retângulo: Peça a base e a altura de um retângulo e exiba sua área (Base
x Altura).*/
    const base = Number(prompt('Informa o valor da base'));
    const altura = Number(prompt('Informar o valor da altura'));
    const area_retangulo = base * altura;
    alert(`A área do retângulo é de: ${area_retangulo}`);

/*8. Antecessor e Sucessor: Receba um número inteiro e mostre quem vem antes e
quem vem depois dele.*/
    const numeroInteiro = Number(prompt("Digite um número inteiro:"));
    alert(`Antecessor: ${numeroInteiro - 1}, Sucessor: ${numeroInteiro + 1}`);

/*Nível 2: Estruturas Condicionais (Decisões)

9. Maior de Idade: Receba a idade de uma pessoa e diga se ela já é maior de idade
(18 anos ou mais).*/
    const idade = Number(prompt("Qual sua idade?"));
    if (idade >= 18) {
        alert("Você é maior de idade.");
    } else {
        alert("Você é menor de idade.");
    }

/*10. Par ou Ímpar: Crie um algoritmo que receba um número e informe se ele é par ou
ímpar (Dica: use o operador %).*/
    let numParImpar = Number(prompt("Digite um número:"));
    if (numParImpar % 2 === 0) {
        alert("O número é PAR.");
    } else {
        alert("O número é ÍMPAR.");
    }

/*11. Aprovação Escolar: Calcule a média de um aluno. Se for 7 ou mais, exiba
"Aprovado". Caso contrário, "Reprovado".*/
    let media_aluno = Number(prompt("Qual a média do aluno?"));
    if (media_aluno >= 7) {
        alert("Aprovado");
    } else {
        alert("Reprovado");
    }
/*12. Qual é o maior?: Receba dois números e exiba qual deles é o maior ou se são
iguais.*/
    let num_A = Number(prompt("Primeiro número:"));
    let num_B = Number(prompt("Segundo número:"));
    if (num_a > num_B) {
        alert(`O maior é ${num_a}`);
    } else if (num_B > num_a) {
        alert(`O maior é ${num_B}`);
    } else {
        alert("Os números são iguais.");
    }

/*13. Calculadora de IMC: Receba peso e altura. Calcule o IMC (Peso / Altura2). Se o
IMC for maior que 25, exiba "Acima do peso".*/
    let peso = Number(prompt("Seu peso (kg):"));
    let altura_pessoa = Number(prompt("Sua altura (m):")); // Ex: 1.75
    let imc = peso / (altura_pessoa * altura_pessoa);
    if (imc > 25) {
        alert(`Seu IMC é ${imc.toFixed(2)}: Acima do peso.`);
    } else {
        alert(`Seu IMC é ${imc.toFixed(2)}: Peso normal ou abaixo.`);
    }

/*14. Login Simples: Crie uma variável fixa chamada senhaCorreta = "1234". Peça ao
usuário uma senha e diga se o acesso foi "Concedido" ou "Negado".*/
    const senha_correta = "1234";
    let senha_digitada = prompt("Digite a senha:");
    if (senha_digitada === senha_correta) {
        alert("Acesso Concedido");
    } else {
        alert("Acesso Negado");
    }


/*15. Desconto de Compra: Se o valor de uma compra for maior que R$ 100,00,
aplique um desconto de 10%. Exiba o valor final.*/
let valor_compra = Number(prompt("Valor da compra:"));
if (valor_compra > 100) {
    let desconto = valor_compra * 0.10;
    let final = valor_compra - desconto;
    alert(`Desconto aplicado! Valor final: R$ ${final.toFixed(2)}`);
} else {
    alert(`Valor final: R$ ${valor_compra.toFixed(2)}`);
}

/*Nível 3: Estruturas de Repetição (Laços)
16. Contagem Regressiva: Exiba no console uma contagem de 10 até 0.*/
console.log("--- Contagem Regressiva ---");
for (let i = 10; i >= 0; i--) {
    console.log(i);
}

/**17. Tabuada Fixa: Peça um número ao usuário e exiba a tabuada dele do 1 ao 10
utilizando um laço for.*/
let numero_usuario = Number(prompt('Informe o número:'));
    for(i = 1 ; i <= 10; i++){
        
        console.log(`${numero_usuario} + ${i} = ${numero_usuario + i}`)
    }
    console.log("-----------diferença--------")
    j = 1
    while(j <=10){
        console.log(`${numero_usuario} - ${j} = ${numero_usuario - j}`)
        j++;
    }
    console.log('-------produto-------')
    k = 1;
    do{
            console.log(`${numero_usuario} x ${k} = ${numero_usuario * k}`);
            k++;

    }while (k <=10)
    
/*18. Soma Acumulada: Peça para o usuário digitar 5 números seguidos e, ao final,
exiba a soma total de todos eles.*/
let soma_total = 0;
for (let i = 1; i <= 5; i++) {
    let n = Number(prompt(`Digite o ${i}º número:`));
    soma_total += n; 
}
alert(`A soma total é: ${soma_total}`);

/*19. Números Pares: Exiba todos os números pares entre 1 e 50.*/
console.log("--- Pares de 1 a 50 ---");
for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}
/*20. Fatorial Simples: Receba um número e calcule o seu fatorial (Ex: 5! = 54321).*/
let num_fatorial = Number(prompt("Fatorial de qual número?"));
let resultado_fatorial = 1;
for (let i = num_fatorial; i >= 1; i--) {
    resultado_fatorial *= i;
}
alert(`O fatorial de ${num_fatorial} é ${resultado_fatorial}`);

/*Nível 4: Listas e Funções (Arrays e Modularização)*/

/*21. Lista de Compras: Crie um array com 3 frutas. Peça ao usuário para adicionar
uma quarta fruta e exiba a lista completa no console.*/
    let frutas = ["Uva", "Abacaxi", "Laranja"];
    const quarta_fruta = prompt('Informar uma quarta fruta');
    frutas.push(quarta_fruta);
    console.log(frutas);

/*22. Busca na Lista: Crie um array de nomes. Peça um nome ao usuário e diga se esse
nome está na lista ou não.*/
    const lista_nome = [`Eduardo` , 'Caio', "Bianca", "Camila"];
    let nome_input = prompt('Digite um nome:');
    const resultado = lista_nome.find(item => item === nome_input);

    if(resultado){
        alert(`Este aluno está inscrito ${resultado}`);
    }else {
        alert(`O ${nome_input} não está inscrito`)
    }
    lista_nome.push('André')

    lista_nome.forEach(item => console.log(item));

    lista_nome.map(item => console.log(item + " aluno Senai"));
    const lista_mista = ['Aluno', 1, true, new Array('Eduardo', 5)];
    lista_mista.forEach(item => console.log(item));

/*23. Inversão de Array: Crie um array com 5 números e exiba-os na ordem inversa.*/
    let lista_numeros = [1, 56, 89, 125.56, 69];
    alert(`A lista inversa é: ${lista_numeros.reverse()}`);

/*24. Função de Soma: Escreva uma função chamada somar(a, b) que retorne o
resultado da soma. Chame essa função passando dois números digitados pelo
usuário.*/
    function somar(a, b) {
        return a + b;
    }
    let x = Number(prompt("Número 1 para função:"));
    let y = Number(prompt("Número 2 para função:"));
    alert(`Resultado da função: ${somar(x, y)}`);

/*25. Desafio Final (Mini-Sistema): Crie um algoritmo que pergunte quantos produtos
o usuário quer cadastrar. Depois, use um laço para pedir o nome de cada produto
e, ao final, exiba todos os nomes cadastrados.*/
    let quantidade = Number(prompt("Quantos produtos vai cadastrar?"));
    let lista_produtos = [];

    for (let i = 0; i < quantidade; i++) {
        let produto = prompt(`Nome do produto ${i + 1}:`);
        lista_produtos.push(produto);
    }

    alert("Produtos cadastrados: " + lista_produtos.join(", "));
    console.log(lista_produtos);