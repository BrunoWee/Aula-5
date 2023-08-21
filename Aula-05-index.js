/*
* Primeiro programa em JavaScript
* Bruno Wesley
*/

console.log("Olá mundo!");
//prompt("Qual é o seu nome?");
const VariavelA = 100;
const VariavelB = VariavelA + 50;
const VariavelC = VariavelA / VariavelB;
console.log(VariavelA);
console.log(VariavelB);
console.log(VariavelC);

//Variável let
let numero = 5;
console.log(numero);
numero =  120 + 5;
console.log(numero);

//Concatenar textos
/*
let nome = "Bruno";
let sobreNome = "Wesley";
let idade = 19;
console.log("Olá", nome, sobreNome, "você tem ", idade, "anos");
*/
//Booleana
const variavelFalsa = false;
const variavelVerdadeira = true;

console.log("Variável falsa: " + variavelFalsa);
console.log("Variável Verdadeira: " + variavelVerdadeira);

//Exercicio 1

let nome = "Bruno";
let sobrenome = "Wesley";
let idade1 = 19;

const souEstudante = true;

console.log("Olá", nome, sobrenome, "você tem ", idade1, "anos", "e o seu status de estudante é: ", souEstudante);


//typeof
console.log(typeof nome);
console.log(typeof idade);
console.log(typeof souEstudante);

let banana
console.log(typeof banana);
banana = "fruta";
console.log(typeof banana);

const vazio = null;
console.log(typeof vazio);


//PROMPT

let nome2 = prompt("Seu nome");
let idade2 = prompt("Sua idade");

console.log(typeof nome2);
console.log(typeof idade2);
