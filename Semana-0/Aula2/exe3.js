const cliente = prompt("Qual seu nome?");
const tipoDeJogo = prompt("Qual o tipo de jogo: IN ou NA");
const etapaDoJogo = prompt("Qual a etapa do jogo: SF, DT, FI");
const categoria = Number(prompt("Qual a categoria: 1, 2, 3, 4"));
const quantidadeDeIngressos = prompt("Quantos ingressos?");
const cotacaoDoDolar = 4.1;

let ingressoIndividual;

if(tipoDeJogo ==="IN"){
    if(etapaDoJogo ==="SF"){
        if (categoria === 1) {
            ingressoIndividual = 1320/cotacaoDoDolar
        } else if (categoria === 2){
            ingressoIndividual = 880/cotacaoDoDolar
        } else if (categoria === 3){
            ingressoIndividual = 550/cotacaoDoDolar
        } else if (categoria === 4){
            ingressoIndividual = 220/cotacaoDoDolar
        }
    } else if (etapaDoJogo === "DT"){
        if (categoria === 1) {
            ingressoIndividual = 660/cotacaoDoDolar
        } else if (categoria === 2) {
            ingressoIndividual = 440/cotacaoDoDolar
        } else if (categoria === 3) {
            ingressoIndividual = 330/cotacaoDoDolar
        } else if (categoria === 4) {
            ingressoIndividual = 170/cotacaoDoDolar
        }
    } else if (etapaDoJogo === "FI") {
        if (categoria===1) {
            ingressoIndividual = 1980/cotacaoDoDolar;
        } else if (categoria === 2) {
            ingressoIndividual = 1320/cotacaoDoDolar;
        } else if (categoria === 3) {
            ingressoIndividual = 880/cotacaoDoDolar;
        } else if (categoria === 4) {
            ingressoIndividual = 330/cotacaoDoDolar;
        }
    }
} else if (tipoDeJogo === "NA") {
    if (etapaDoJogo === "SF") {
        if (categoria === 1) {
            ingressoIndividual = 1320;
        } else if (categoria === 2){
            ingressoIndividual = 880;
        } else if (categoria === 3) {
            ingressoIndividual = 550;
        } else if (categoria === 4) {
            ingressoIndividual = 220;
        }
    } else if (etapaDoJogo === "DT") {
        if (categoria === 1) {
            ingressoIndividual = 660;
        } else if (categoria === 2) {
            ingressoIndividual = 440;
        } else if (categoria === 3) {
            ingressoIndividual = 330;
        } else if (categoria === 4) {
            ingressoIndividual = 170;
        }
    } else if (etapaDoJogo === "FI") {
        if (categoria === 1) {
            ingressoIndividual = 1980;
        } else if (categoria === 2) {
            ingressoIndividual = 1320;
        } else if (categoria === 3) {
            ingressoIndividual = 880;
        } else if (categoria === 4) {
            ingressoIndividual = 330;
        }
    }
} else {
    Console.log("O tipo de jogo informado e invalido");
}

Console.log ("Nome do cliente é:", cliente);
Console.log ("A etapa do jogo é", etapaDoJogo);
Console.log ("O tipo de Jogo é:", tipoDeJogo);
Console.log ("Categoria do jogo é:", categoria);
Console.log ("Quantidade de ingressos escolhidos:", quantidadeDeIngressos);

if (tipoDeJogo === "IN") {
    Console.log ("O valor do ingresso em R$ custa:", ingressoIndividual);
    Console.log ("O valor do ingresso em US $ custa:", ingressoIndividual);
    Console.log ("O valor do Total em R$ custa:",);
    Console.log ("O valor do Total em US $ custa:",);
} else if (tipoDeJogo === "NA") {
    Console.log ("O valor do ingresso", ingressoIndividual);
    Console.log ("O valor total da compra", ingressoIndividual);
}
