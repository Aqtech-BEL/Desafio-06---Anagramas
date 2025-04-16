//npm install prompt-sync PARA INSTALAR A BIBLIOTECA
const prompt = require('prompt-sync')();

let words = "";

//AQUI É A ENTRADA E VERIFICAÇÃO DA words SE CONTÉM SOMENTE LETRAS E ESPAÇO
while (!/^[a-zA-Z\s]*$/.test(words) || words.trim() === "") { //RegExp é esse jogo de caracteres, .TEST testa a string, .TRIM remove os espaços no inicio e final do Array.
    words = prompt("Digite a words:");
}

//AQUI TRANSFORMO UMA STRING EM UM ARRAY
const wordsArray = words.split("");

//AQUI ESTOU CONTANDO QUANTAS VEZES CADA LETRA ESTA SE REPETINDO E DEPOIS PEGANDO SOMENTE OS VALORES
let iguais = {};
for (let i = 0; i < wordsArray.length; i++) { //no .LENGTH não se coloca () depois dele. e não precisa do <= só <
    let letra = wordsArray[i];
    iguais[letra] = (iguais[letra] || 0) + 1; //Isso garante que a primeira contagem começa do zero.

}
let repeatedLetters = Object.values(iguais);

//ARROW FUNCTION FATORIAL, SEMPRE LEMBRAR QUE NÃO PODE COMECAR EM ZERO, PORQUE ZERO MULT QUALQUER NUMERO É ZERO
const fatorial = (num) => {
    let result = 1;
    for (let i = 1; i <= num; i++){
        result = result * i;
    }
    return result;
}

//AQUI ESTOU PERCORRENDO O VETOR CRIADO COM OS VALORES DAS LETRAS REPETIDAS E FAZENDO O FATORIAL UNITAIO PARA JUNTAR A CONTA
let valueLatters = 1;
for (let i = 0; i < repeatedLetters.length; i++) {
    valueLatters = valueLatters * fatorial(repeatedLetters[i]);
}

//FAZER O FATORIAL DO TAMANHO TOTAL DA words
let valueWords = fatorial(wordsArray.length);

//AGORA VOU FAZER A CONTA PARA VER QUANTOS ANAGRAMAS A PALAVRA TEM!
const valueAnagramas = (valueWords / valueLatters);

console.log(`A palavra ${words} tem ${valueAnagramas} anagramas!`)












/*COMO EU PLANEJEI
let iguais = [];
for (let i = 0; i < wordsArray.length; i++) { //no .LENGTH não se coloca () depois dele. e não precisa do <= só <
    for (let j = i + 1; j < wordsArray.length; j++){ //i em 0 e j de i + 1 até o final — pra evitar comparar o mesmo par duas vezes (ou se repetir invertido)
        if (wordsArray[i] === wordsArray[j]) {
            iguais.push([i,j]);
        }
    }
}

console.log(iguais);
*/