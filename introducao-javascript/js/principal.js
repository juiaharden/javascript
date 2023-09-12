//console.log("snhhhhhh");

//---------------Daqui para baixo começa o código

//alteração do titulo
//console.log(document);
//cria a variável titulo e armazena o conteudo da classe titulo nela
let titulo = document.querySelector(".titulo");
//console.log(titulo);
//atribuição de um novo valor na variável titulo
titulo.textContent = "Bora manga!";

//alteração da tabela
let paciente = document.querySelector("#primeiroPaciente");

let tdPeso = paciente.querySelector(".info-peso");
let tdAltura = paciente.querySelector(".info-altura");

let peso = tdPeso.textContent;
let altura = tdAltura.textContent;

let imc = peso / (altura * altura);
console.log(imc);