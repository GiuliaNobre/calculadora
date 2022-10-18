// Variaveis de classe 
let btnNumeros = document.getElementsByClassName('btnNum');
let btnOperadores = document.getElementsByClassName('btnOpera');
// Variaveis de id
let botaoC = document.getElementById('btnApaga');
let botaoIgual = document.getElementById('btnIgual')
let visor = document.getElementById('tela');
// Valores 
let valor_salvo = null;
let operador_salvo = null;
let resultado = null;
// Adiçao de eventos 
botaoIgual.addEventListener('click', calcula_resultado);
botaoC.addEventListener("click", limpa_visor);
// laço para cada clique nos btn
for (let botao of btnNumeros)botao.addEventListener('click', clica_numero); 
// Função de clique 
function clica_numero(event){
(isNaN(visor.innerHTML) === true) ? visor.innerHTML = event.target.innerHTML : visor.innerHTML = visor.innerHTML + event.target.innerHTML;
}
// Laço para clique em botoes de operaçao
for (let botao of btnOperadores) botao.addEventListener("click", clica_operador);
// Funçao de clique em operaçao
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
// Funçao de limpar os numeros e resultados
function limpa_visor(event){
    visor.innerHTML = "";
    valor_salvo = null;
    operador_salvo = null;
}
// Funçao para calcular o resultado
function calcula_resultado(event) {
    if(valor_salvo != null && operador_salvo != null && isNaN(visor.innerHTML) === false){
        let resultado = executa_operacao(valor_salvo, operador_salvo, Number(visor.innerHTML));
        visor.innerHTML = resultado;
        valor_salvo = null;
        operador_salvo = null;
    }
}
// Funçao para executar as operaçoes 
function executa_operacao(valor1, operador, valor2){
    if (operador === "+") return valor1 + valor2;
    else if (operador === "-") return valor1 - valor2;
    else if (operador === "*") return valor1 * valor2;
    else if (operador === "/") return valor1 / valor2
    }
// Funçao para o teclado funcionar 
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
     (event.keyCode === '=') ? botaoIgual.click() : botaoC.click();
}

