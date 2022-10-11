let visor = document.getElementById('visor');

let btnNumeros = document.getElementsByClassName('botao-numero');

for (let botao of btnNumeros) {
    botao.addEventListener('click', clica_numero);
}

function clica_numero(event) {
    visor.innerHTML = visor.innerHTML + event.target.innerHTML;
}

let btnOperadores = document.getElementsByClassName('botao-operador');
for (botao of btnOperadores) {
    botao.addEventListener('click', clica_operador);

}
function clica_operador(event) {
    visor.innerHTML = event.target.innerHTML;
}

let C = document.getElementsByClassName('C')[0];
C.addEventListener('click', limpa_visor);
function limpa_visor(event) {
    visor.innerHTML = "";
}

let body = document.getElementById(`body`);
body.addEventListener('keypress', pressionou_tecla);
function pressionou_tecla(event) {
    if (event.key === "+") {
        visor.innerHTML = `+`;
    }
}