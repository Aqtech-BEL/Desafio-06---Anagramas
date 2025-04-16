//npm install prompt-sync PARA INSTALAR A BIBLIOTECA
const prompt = require('prompt-sync')();

let palavra = "";

while (!/^[a-zA-Z\s]*$/.test(palavra) || palavra.trim() === "") { //RegExp é esse jogo de caracteres, .TEST testa a string, .TRIM remove os espaços no inicio e final do Array.
    palavra = prompt("Digite a palavra:");
}

const palavraArray = palavra.split(""); //TRANFORMA MINHA STRING EM ARRAY

let iguais = {};
for (let i = 0; i < palavraArray.length; i++) { //no .LENGTH não se coloca () depois dele. e não precisa do <= só <
    let letra = palavraArray[i];
    iguais[letra] = (iguais[letra] || 0) + 1; //Isso garante que a primeira contagem começa do zero.

}
let repeatedLetters = Object.values(iguais);
console.log(palavraArray.length);
















/*COMO EU PLANEJEI
let iguais = [];
for (let i = 0; i < palavraArray.length; i++) { //no .LENGTH não se coloca () depois dele. e não precisa do <= só <
    for (let j = i + 1; j < palavraArray.length; j++){ //i em 0 e j de i + 1 até o final — pra evitar comparar o mesmo par duas vezes (ou se repetir invertido)
        if (palavraArray[i] === palavraArray[j]) {
            iguais.push([i,j]);
        }
    }
}

console.log(iguais);
*/