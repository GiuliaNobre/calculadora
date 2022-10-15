let visor = document.getElementById('visor');

let valor_salvo = null;
let operador_salvo = null;
let resultado = null;

let btnNumeros = document.getElementsByClassName('botao-numero');

for (let botao of btnNumeros) {
    botao.addEventListener('click', clica_numero);
}

function clica_numero(event){
    (isNaN(visor.innerHTML) === true) ? visor.innerHTML = event.target.innerHTML : visor.innerHTML = visor.innerHTML + event.target.innerHTML;
    }

function clica_operador(event){
    if (isNaN(visor.innerHTML) === false){
        if (valor_salvo === null){
            valor_salvo = Number(visor.innerHTML);
        }else{
            let result = executa_operacao(valor_salvo,operador_salvo,Number(visor.innerHTML));
            valor_salvo = result;
        }
    }
    visor.innerHTML = event.target.innerHTML;
    operador_salvo = event.target.innerHTML;
}

let btnOperadores = document.getElementsByClassName('botao-operador');
for (botao of btnOperadores) {
    botao.addEventListener('click', clica_operador);

}

// botão C
let C = document.getElementsByClassName('C')[0];
C.addEventListener('click', limpa_visor);
function limpa_visor(event) {
    visor.innerHTML = "";
}
// botão resultado
let botaoResultado = document.getElementById('btnResultado')
botaoResultado.addEventListener('click', calcula_resultado);
function calcula_resultado(event) {
    if(valor_salvo != null && operador_salvo != null && isNaN(visor.innerHTML) === false){
        let resultado = executa_operacao(valor_salvo, operador_salvo, Number(visor.innerHTML));
        visor.innerHTML = resultado;
        valor_salvo = null;
        operador_salvo = null;
    }
}

function limpa_visor(event){
    visor.innerHTML = "";
    valor_salvo = null;
    operador_salvo = null;
}

function calcula_resultado(event) {
    if(valor_salvo != null && operador_salvo != null && isNaN(visor.innerHTML) === false){
        let resultado = executa_operacao(valor_salvo, operador_salvo, Number(visor.innerHTML));
        visor.innerHTML = resultado;
        valor_salvo = null;
        operador_salvo = null;
    }
}

let body = document.getElementById(`body`);
body.addEventListener('keypress', pressionou_tecla);
function pressionou_tecla(event) {
    if (event.key === "+") {
        visor.innerHTML = `+`;
    }
}

function executa_operacao(valor1, operador, valor2){
    if (operador === "+") return valor1 + valor2;
    else if (operador === "-") return valor1 - valor2;
    else if (operador === "*") return valor1 * valor2;
    else if (operador === "/") return valor1 / valor2
    }

document.getElementsByTagName('body')[0].addEventListener('keydown', pressiona_tecla);
function pressiona_tecla(event) {
     (event.key === '*') ? document.getElementById('multiplicacao').click() :
     (event.key === '1') ? document.getElementById('1').click() :
     (event.key === '2') ? document.getElementById('2').click() :
     (event.key === '3') ? document.getElementById('3').click() :
     (event.key === '4') ? document.getElementById('4').click() :
     (event.key === '5') ? document.getElementById('5').click() :
     (event.key === '6') ? document.getElementById('6').click() :
     (event.key === '7') ? document.getElementById('8').click() :
     (event.key === '9') ? document.getElementById('9').click() :
     (event.key === '0') ? document.getElementById('0').click() :
     (event.key === '-' )? document.getElementById('subtracao').click() :
     (event.key === '+' )? document.getElementById('adicao').click() :
     (event.key === '/') ? document.getElementById('divisao').click() :
     (event.key === '.') ? document.getElementById('ponto').click() :
     (event.keyCode === '=') ? botaoResultado.click() : botaoC.click();
}