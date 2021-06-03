let inputAdultos = document.getElementById("adultos")
let inputCriancas = document.getElementById("criancas")
let inputDuracao = document.getElementById("duracao")

let resultado = document.getElementById("resultado")

function calculaResultado() {
    let carne = 0.4;
    let cerveja = 1.2 / 0.355;
    let refrigerante = 1 / 2;

    if (inputDuracao.value >= 6) {
        carne = 0.65
        cerveja = 2 / 0.335;
        refrigerante = 1.5 / 2;
    }

    let adultos = inputAdultos.value * 1;
    let criancas = inputCriancas.value * 0.5;

    let calcCarne = (adultos + criancas) * carne;
    let calcCerveja = adultos * cerveja;
    let calcRefrigerante = (adultos + criancas) * refrigerante;

    resultado.innerHTML = `
    <h2>Você vai precisar de:</h2>
    <p>${calcCarne.toFixed(1)} Kg de Carne</p>
    <p>${Math.ceil(calcCerveja.toFixed(2))} Latas de Cerveja</p>
    <p>${Math.ceil(calcRefrigerante.toFixed(2))} Garrafas de Refrigerante</p>
   `
}