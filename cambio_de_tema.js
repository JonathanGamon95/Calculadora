let CONT_CALCULADORA = document.querySelector(".contenedor_calculadora");

const BOTON_TEMA = document.getElementById("boton_tema");
let RESULTADO = document.getElementById("resultado");
let BOTONES_NUMERICOS = document.querySelectorAll(".boton_numerico");
let OPERADORES = document.querySelectorAll(".operador");


function cambioDeTema(){
    let tema = BOTON_TEMA.getAttribute("class");

    if (tema === "tema_oscuro") {
        BOTON_TEMA.setAttribute("class", "tema_claro");

        for(let i of BOTONES_NUMERICOS) {
            i.setAttribute("class", "boton_numerico numerico_claro")
        };

        for(let k of OPERADORES) {
            k.setAttribute("class", "operador operador_claro")
        }
        CONT_CALCULADORA.style.backgroundColor = "#AED6F1";
        RESULTADO.style.color = "#1a1a1a";
        tema = "tema_claro";
    } 
    else {
        BOTON_TEMA.setAttribute("class", "tema_oscuro");

        for(let i of BOTONES_NUMERICOS) {
            i.setAttribute("class", "boton_numerico numerico_oscuro")
        };

        for(let k of OPERADORES) {
            k.setAttribute("class", "operador operador_oscuro")
        }
        CONT_CALCULADORA.style.backgroundColor = "#292929";
        RESULTADO.style.color = "#ABB2B9";
        tema = "tema_oscuro";
    }
};
BOTON_TEMA.addEventListener("click", cambioDeTema);