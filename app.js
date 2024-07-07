let numeroSecreto = 0;
let intento = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
    
    console.log(intento);
    console.log(numeroDeUsuario == numeroSecreto);
    if (numeroDeUsuario == numeroSecreto) {
        asignarTextoElemento("p", `Acertaste el número en ${intento} ${(intento == 1) ? "intento" : "intentos"}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        //el usuario no acertò
        if(numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento("p", "El numero secreto es menor");
        } else {
            asignarTextoElemento("p", "El numero secreto es mayor");
        }
        intento++;
        limpiarCaja();
    }
    return;
}
function condicionesIniciales () {
    asignarTextoElemento("h1", "Juego del número secreto!" );
    asignarTextoElemento("p", `Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intento = 1;
}
function reiniciarJuego() {
    //Limpiar la caja
    limpiarCaja();

    //indicar msj de intervalo de numero
    //generar numero aleatorio
    //Deshabilitar el boton de nuevo Juego
    condicionesIniciales();

    //inicializar el numero de intentos
    document.querySelector("#reiniciar").setAttribute("disabled", "true");
}

function limpiarCaja(){
  let valorCaja = document.querySelector("#valorUsuario")
  valorCaja.value = "";
}
function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()* numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

    //si ya sorteamos todos los numeros
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento("p", "Ya hemos sorteados todos los numeros posibles");
    } else {
        //si el numero generado esta en la lista
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return listaNumerosSorteados();

        }else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }

    }
    
}

condicionesIniciales();