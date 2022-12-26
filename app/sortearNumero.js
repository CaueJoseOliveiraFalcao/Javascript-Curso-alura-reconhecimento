'use strict'
const MaiorValor = 100;
const MenorValor = 1;
document.querySelector('#menor-valor').innerHTML = MenorValor
document.querySelector('#maior-valor').innerHTML = MaiorValor
const NumeroAleatorio = gerarNumAleatorio();

function gerarNumAleatorio(){
    return Math.floor(Math.random() * MaiorValor+1)
};

