//npm install prompt-sync PARA INSTALAR A BIBLIOTECA
const prompt = require('prompt-sync')();

let words = "";

//AQUI É A ENTRADA E VERIFICAÇÃO DA words SE CONTÉM SOMENTE LETRAS E ESPAÇO
while (!/^[a-zA-Z\s]+$/.test(words)) { //RegExp é esse jogo de caracteres, .TEST testa a string, 
    words = prompt("Digite a palavra:").trim(); //.TRIM remove os espaços no inicio e final do Array.
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
let valueLetters = 1;
for (let i = 0; i < repeatedLetters.length; i++) {
    valueLetters = valueLetters * fatorial(repeatedLetters[i]);
}

//FAZER O FATORIAL DO TAMANHO TOTAL DA words
let valueWords = fatorial(wordsArray.length);

//AGORA VOU FAZER A CONTA PARA VER QUANTOS ANAGRAMAS A PALAVRA TEM!
let valueAnagramas = (valueWords / valueLetters);

console.log(`A palavra ${words} tem ${valueAnagramas} anagramas!`)


//EMBARALHA AS LETRAS COM FUNÇÃO RECURSIVA
const gerarAnagramas = (prefixo, restante, resultado) => {
    if (restante.length === 0) {
        resultado.add(prefixo);
    } else {
        for (let i = 0; i < restante.length; i++) {
            if (restante.indexOf(restante[i]) !== i) continue;

            const novaRestante = restante.slice(0, i) + restante.slice(i + 1);
            gerarAnagramas(prefixo + restante[i], novaRestante, resultado);
        }
    }
};

if (words.length > 8) {
    console.log("Muitos anagramas para mostrar. Tente uma palavra menor.");
} else {
    const resultado = new Set();
    gerarAnagramas("", words, resultado);
    console.log([...resultado].join(", "));
}

