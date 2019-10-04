function exe3a (){
    const simEsta = "Sim";
const naoEsta = ! simEsta;
const chave = "Esta aberta"

const estaDestrancada = (simEsta || naoEsta);
prompt("A Casa está destrancada?" + " " + estaDestrancada)
 prompt("O usuario consegue entrar na casa?");
} exe3a ()

//Crie um programa que pergunta para o usuário:
 //Está chovendo?
 //Tem guarda-chuva?
 //Imprima a resposta da pergunta "O usuário vai se molhar?"

 function exe3b (){
     const estaChovendo = confirm("Esta chovendo ?");
     const temGuardaChuva = confirm("Tem guarda chuva?");
     const vouMeMolhar = estaChovendo && !temGuardaChuva;

     console.log("Vou me molhar:", vouMeMolhar);
 }
