// Textos que serão digitados e apagados
const textArray = [
    "soluções web modernas.", 
    "interfaces interativas.", 
    "códigos limpos e eficientes."
];

// Configurações de velocidade (em milissegundos)
const typingDelay = 100; // Velocidade da digitação
const erasingDelay = 50; // Velocidade para apagar
const newTextDelay = 2000; // Tempo de pausa antes de apagar a frase inteira

let textArrayIndex = 0;
let charIndex = 0;

const typedTextSpan = document.querySelector(".typing-text");

function type() {
    if (charIndex < textArray[textArrayIndex].length) {
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    } else {
        // Terminou de digitar a frase, pausa e começa a apagar
        setTimeout(erase, newTextDelay);
    }
}

function erase() {
    if (charIndex > 0) {
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    } else {
        // Terminou de apagar, vai para a próxima frase
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) textArrayIndex = 0;
        setTimeout(type, typingDelay + 500);
    }
}

// Inicia o efeito assim que a página carrega
document.addEventListener("DOMContentLoaded", function() {
    if (textArray.length) setTimeout(type, newTextDelay + 250);
});