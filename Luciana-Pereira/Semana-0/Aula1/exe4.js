function exe4 () {
const salario = parseFloat(prompt("Qual seu salario?"));

const quilowatts = parseFloat(prompt("Qual a quantidade de quilowatts consumido?"));

const valorQuilowatts = salario / 5;
console.log(valorQuilowatts);

const valorPago = valorQuilowatts * quilowatts;
console.log(valorPago);

const valorDesconto = parseFloat(0.85 * valorPago);
console.log(valorDesconto);
} exe4 ()