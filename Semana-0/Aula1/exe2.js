function exe2a(){
    const temperatura = parseInt(prompt("Qual a temperatura?"));

const farenheit=((temperatura * 1.8)+ 32);
console.log("A temperatura em Farenheit é:" +" " + farenheit +"ºF");

const celsius=((farenheit - 32)* 5 / 9);
console.log("A temperatura em Celsius é:" + " " + celsius + "ºC" );

const kelvin= parseFloat((farenheit -32)* 5/9 + 273,15);
console.log("A temperatura em Kelvin é:" + " " + kelvin + "ºK" );
} exe2a()

function exe2b () {
    const nome = prompt ("Por favor, informe seu primeiro nome:");

    const sobrenome = prompt ("Por favor, informe seu sobrenome completo:");
    
    const nomeCompleto = nome + " " + sobrenome
    console.log ("Seu nome completo  é:" + " " + nomeCompleto);
} exe2b ()

function exe2c () {
    const rua = prompt("Por favor, informe o nome da Rua:");

const numero = prompt("Por favor, informe o numero do endereço:");

const complemento = prompt("Por favor, informe se possui complemento no endereço: Ex Bloco A, Casa B");

const bairro = prompt("Por favor, informe o Bairro:");

const cidade = prompt("Por favor, informe a Cidade:");

console.log ("Seu endereço completo é: Rua"+ rua + "," + "n" + numero + "-" + complemento + "-" + bairro + "," + " " + cidade);
} exe2c ()