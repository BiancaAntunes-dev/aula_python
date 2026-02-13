/**Exercícios de Lógica JS: Variáveis e Algoritmos */

/**1. Calculadora de IMC: Crie um algoritmo que armazene o peso (number) e a altura
(number) de uma pessoa. Calcule o IMC e armazene o resultado em uma variável. */
const peso = 60;
const altura = 1.59;
const IMC = 60 / (1.59 * 1.59);
console.log(IMC);

/** 2. Conversor de Temperatura: Declare uma variável com a temperatura em Celsius e
converta para Fahrenheit usando a fórmula (C * 9/5) + 32. */
const Celsius = 25;
const Fahrenheit = (25 * 9/5) + 32;
console.log(Fahrenheit);

/** 3. Média Simples: Crie três variáveis para notas escolares, calcule a média aritmética e
armazene em uma variável chamada media. */
/**formúla média simples: Ms = x1+x2+x3+xn.../n */
const nota1 = 9.0;
const nota2 = 7.0;
const nota3 = 8.2;
const media = (9.0 + 7.0 + 8.2) / 3;
console.log("A média final é:" + media);

 /**4. Troca de Valores: Declare duas variáveis, a e b. Crie um algoritmo que troque os valores
entre elas de forma que a receba o valor de b e vice-versa.*/

let a = 1;
let b = 2;
let t;
console.log("Valores iniciais de A e B: ", a, b);
t = a; // a = 1; b = 2; t = 1;
a = b; // a = 2; b = 2; t = 1;
b = t; // a = 2; b = 1; t = 1;
console.log("Valores finais de A e B: ", a, b);

/**5. Calculadora de Área: Armazene o raio de um círculo em uma constante e calcule a
área (PI * raio2). */
const raio = 5;
const PI = 3.14;
const area = PI * (raio ** 2); /** da para usar também Math.PI (coloca o valor do PI automático) */
console.log(area);

/**6. Concatenador de Nome: Crie variáveis para nome e sobrenome. Gere uma terceira
variável nomeCompleto utilizando template strings. */
const nome = 'João';
const sobrenome = 'Pereira';
const nomeCompleto = nome + ' ' + sobrenome;
console.log(nomeCompleto);

/**7. Verificador de Idade: Armazene o ano de nascimento. Calcule a idade atual subtraindo
do ano corrente e armazene em uma variável. */
const ano_de_nascimento = 2010;
const ano_corrente = 2026;
const idadeAtual = ano_corrente - ano_de_nascimento;
console.log(idadeAtual);

/**8. Cálculo de Desconto: Dado um valor de produto e uma porcentagem de desconto,
calcule o preço final. */
const valorProduto = 1500;
const desconto = 0.25;
const precoFinal = valorProduto * (1- desconto);
console.log(`O preço com desconto é: R$ ${precoFinal}`);

/**9. Conversor de Moeda: Crie um algoritmo que converta um valor em Reais para Dólares,
armazenando a taxa de câmbio em uma constante.*/
const cambio = 5.05;
let real = 100;
const valorDolares = cambio / real;
console.log(`O valor em real equivale a: ${valorDolares.toFixed(2)}dólares`);

/**10. Sucessor e Antecessor: Leia um número inteiro e armazene seu antecessor e seu
sucessor em variáveis distintas. */
let numero = 15;
let antecessor = numero - 1;
let sucessor = numero + 1;
console.log(`O antecessor de ${numero} é ${antecessor} e o sucessor é ${sucessor}.`);

/**11. Dias em Horas: Converta uma quantidade de dias armazenada em uma variável para o
total de horas correspondente. */
let dias = 6;
const horasPorDia = 20;
let horasTotais = dias * horasPorDia;
console.log(`${dias} dias correspondem a ${horasTotais} horas.`);

/**12. Cálculo de Salário: Armazene o valor da hora trabalhada e a quantidade de horas no
mês. Calcule o salário bruto. */
const valorHora = 10;
let horasNoMes = 160;
let salarioBruto = valorHora * horasNoMes;
console.log(salarioBruto);

/**13. Verificador de Paridade: Crie um algoritmo que armazene o resto da divisão de um
número por 2 para identificar se ele é par.*/
let numero3 = 42;
let resto = numero3 % 2;
let ePar = resto === 0;
console.log(`O número ${numero3} é par? ${ePar} (Resto: ${resto})`);

/**14. Gorjeta do Garçom: Leia o valor de uma conta de restaurante e calcule 10% de
gorjeta, armazenando o total a pagar.*/
let valorConta = 130.0;
const taxaGorjeta = 0.10;
let gorjeta = valorConta * taxaGorjeta;
let totalPagar = valorConta + gorjeta;
console.log(`Conta: R$ ${valorConta.toFixed(2)} | Gorjeta: R$ ${gorjeta.toFixed(2)} | Total: R$ ${totalPagar.toFixed(2)}`);

/**15. Perímetro de Retângulo: Armazene largura e altura de um retângulo e calcule o
perímetro. */
const largura = 2;
const altura2 = 10;
const perimetro = 2 * (largura + altura2);
console.log(perimetro);

/**16. Conversor de Metros: Crie um algoritmo que converta um valor em metros para
centímetros e milímetros. */
const metros = 2.5;
const centimetros = metros * 100;
const milimetros = metros * 1000;
console.log(`${metros}m equivalem a ${centimetros}cm e ${milimetros}mm.`);

/**17. Cálculo de Combustível: Dada a distância percorrida e o consumo médio do carro,
calcule quantos litros foram gastos.*/
const distanciaPercorrida = 350; 
const consumoMedio = 12;
const litrosGastos = distanciaPercorrida / consumoMedio;
console.log(litrosGastos);

/**18. Reajuste Salarial: Aplique um aumento de 15% a uma variável salarioAtual.*/
let salarioAtual = 2500.00;
const percentualAumento = 0.15;
let novoSalario = salarioAtual + (salarioAtual * percentualAumento);
console.log(`O salário de R$ ${salarioAtual.toFixed(2)} com 15% de aumento passou para R$ ${novoSalario.toFixed(2)}.`);

/**19. Tempo de Viagem: Dada a distância e a velocidade média, calcule o tempo estimado
de viagem.*/ 
let distancia = 240; // km
let velocidadeMedia = 80; // km/h
let tempoEstimado = distancia / velocidadeMedia;
console.log(`O tempo estimado é de: ${tempoEstimado} horas.`);

/**20. Divisor de Conta: Armazene o valor total de uma conta e a quantidade de pessoas.
Calcule quanto cada um deve pagar.*/
let valorTotal = 180.00;
let quantidadePessoas = 4;
let valorPorPessoa = valorTotal / quantidadePessoas;
console.log(`A conta de R$ ${valorTotal.toFixed(2)} dividida para ${quantidadePessoas} pessoas fica R$ ${valorPorPessoa.toFixed(2)} cada.`);

/**21. Idade em Dias: Converta uma idade (anos) em quantidade aproximada de dias vividos.*/
let idadeAnos = 24;
const diasNoAno = 365;
let diasVividos = idadeAnos * diasNoAno;
console.log(`Com ${idadeAnos} anos, você viveu aproximadamente ${diasVividos} dias.`);

/**22. Área de Triângulo: Armazene base e altura e calcule a área usando a fórmula (base *
altura) / 2. */
const base = 20;
const altura3 = 8;
const area2 = (base * altura) / 2;
console.log(area2);

/**23. Potenciação: Crie um algoritmo que eleve um número 'base' a um expoente 'x' e
armazene o resultado.*/
const baseNum = 2;
const expoente = 2;
const resultado = baseNum ** expoente;
console.log(resultado);

/**24. Inversão de String: (Lógica) Tente pensar em como armazenar uma palavra e exibir seu
tipo e comprimento.*/
const palavra = "abacaxi";
const tipo = typeof palavra;
const comprimento = palavra.length;
console.log(palavra);
console.log(`O tipo do dado é: ${tipo}`);
console.log(comprimento);

/**25. Preço de Venda: Dado o custo de um produto e a margem de lucro desejada (%),
calcule o valor de venda.*/
let custoProduto = 50.00;
let margemLucroPercentual = 30; // 30%
let valorVenda = custoProduto + (custoProduto * (margemLucroPercentual / 100));
console.log(`Custo: R$ ${custoProduto.toFixed(2)} e a Margem: ${margemLucroPercentual}%, Venda: R$ ${valorVenda.toFixed(2)}`);
