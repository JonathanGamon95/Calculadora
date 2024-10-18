const BOTON_RETROCESO = document.getElementById("boton_retroceso");

let valorActual = "";
let signoActual = "";
let exRegular = /.*[0-9]$/;


// agrega numeros
function agregarNumero(numero) {
    if (numero == "0" && valorActual == "") {

    } else {
        valorActual += numero;
        mostrarEnPantalla()
        ultimoNumero()
    }
};

// agrega signos
function agregarSigno(signo) {
    if (valorActual == "0" || valorActual == "") {

    } else {
        signoSumados()
        signosRepetido()
        valorActual += signo;
        signoActual += signo;
        mostrarEnPantalla()
        ultimoNumero()
    }
};

// elimina signos sumados. ejemplo: "++" = "+"
function signoSumados() {
    if (exRegular.test(valorActual) == false) {
        valorActual = valorActual.slice(0, -1)
    }
};

// verifica que no haya signo repetidos
function signosRepetido() {
    valorActual = valorActual.replace(/([+*/-])\1+/g, '$1');
};

//verifica que el ultimo indice sea un numero  <<<<<<<
function ultimoNumero() {
    let ultimoIndice = valorActual[valorActual.length - 1];
    return !isNaN(ultimoIndice);
}

// verifica error de division por 0
function verificacion(evaluacion) {
    try {
        let valor = eval(evaluacion);
        if (valor === Infinity) {
            throw new Error("division por cero");
        };
        RESULTADO.innerText = valor;
    } catch (error) {
        RESULTADO.innerText = error;
    }
};

// verifica los requisitos de la opeacion antes de ejecutar
function opeacion() {
    if (valorActual === "" || signoActual === "" || ultimoNumero() === false) {

    } else {
        verificacion(valorActual);
        valorActual = "";
        signoActual = "";
    }
};

// elimina todo el contenido y reincia a los valores predeterminado
function borrado() {
    valorActual = "";
    signoActual = "";
    RESULTADO.innerText = "0";
};

// elimina el ultimio indice
function retroceso() {
    valorActual = valorActual.slice(0, -1);
    mostrarEnPantalla();
    if(valorActual == "") {
        RESULTADO.innerText = "0";
    }
};


function mostrarEnPantalla() {
    RESULTADO.innerText = valorActual;
};