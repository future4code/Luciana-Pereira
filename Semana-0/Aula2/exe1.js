function exe1a () {
const numero1 = Number (Prompt("Digite um numero"));
const numero2 = Number (Prompt("Digite um outro numero diferente do anterior"));

if (numero1 === numero1) {
    console.log ("Os numeros digitados devem ser diferentes");
} else if (numero > numero2) {
    console.log (numero1, numero2);
} else {
    console.log (numero1, numero2);
}
} exe1a ()

function exe1b () {
    const numero1 = Number (Prompt("Digite um numero"));
const numero2 = Number (Prompt("Digite um outro numero diferente do anterior"));
const numero3 = Number (Prompt("Digite  um novo numero diferente dos anteriores"));

if (numero1 === numero2 || numero1 === numero3 || numero2 === numero3){
    console.log("Os numeros digitados devem ser diferentes");
}else if (numero1 > numero2 && numero1 > numero3){
    if(numero2 > numero3) {
        console.log (numero1, numero2, numero3);
    } else {
        console.log (numero1, numero3, numero2);
    }
} else if (numero2, numero1 && numero2 > numero3){
    if (numero1 > numero3) {
        Console.log (numero2, numero1, numero3);
    } else {
        console.log (numero2, numero3, numero1);
    }
} else {
    if (numero1 > numero2) {
        console.log (numero3, numero1, numero2);
    } else {
        console.log(numero3, numero2, numero1);
    }
}
} exe1b ()