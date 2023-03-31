/* 🔵 ======================================== 🔷
# 🔵  web: industriasvipe.com  🌐 vipescri.com  🔷
# 🔵  Empresa: Industrias de Software Vipescri  🔷
# 🔵  AUTORES: VILLALBA Raul Orlando y familia  🔷
#  🔵 ======================================== 🔷 */
/*
let hola = "Hello! Raul";
console.log(hola);
document.getElementById("hola").innerHTML = hola; */
// ======================== vanilla js =================
var cursor;
// ========================



// ========================
// todo: ejercicio 1
// ========================

function ejercicio01() {
    let cadena = document.getElementById("dato1").value;
    let result = miFuncion2(cadena);
    
    document.getElementById("muestraEj01").innerHTML = `resultado = ${result}`;

    result = contarCaracteres(cadena);

    console.info("resultado: " + result);  
    
}

function miFuncion2(cadena) {
    if (typeof cadena !== "string" || cadena.length === 0) {
        return "digite un string";
    } else {
        return `El string tiene ${cadena.length} Caracteres`;
    } 
}

// con arrow function
const contarCaracteres = (cadena = "") => 
    (!cadena) 
    ? `Digite una cadena ` 
    : `La cadena tiene ${cadena.length} caracteres`;

// ==========================
// todo: ejercicio 2
// ==========================

function ejercicio02() {
    let cadena = prompt("Digite cadena:");
    /*
    if (typeof cadena !== "string" || cadena.length <= 2) {
        cadena = "digite un string de mas de una palabla";
    } */ 

    let result = cadena;
    canti = cadena.search(" ");
    if (canti > 0)  result = `La primera palabra ${cadena.slice(0,canti)} `;

    document.getElementById("muestraEj02").innerHTML = result; 
    //`La primera palabra ${cadena.slice(0,canti)} `;
    
    let texto = cadena.toLowerCase();
    // canti = buscaCaracter(texto);
    
    
    console.log(canti); 

    // recortarCadena
    result = recortarCadena(texto,canti);
    console.info("resultado: " + result);

}


// con arrow function
const recortarCadena = (cadena = "", longitud = undefined) => 
(!cadena) 
? `Ingrese una cadena de texto` 
: `La primera palabra ${cadena.slice(0,longitud)} `;

const buscaCaracter = (texto) => {
    for(i=0; i<texto.length; i++){
        if (texto.charAt(i) === " ") {
            return i;
        }
    }
    return 0;
}

// ==========================
// todo: ejercicio 3
// ==========================

function ejercicio03() {
    let cadena = prompt("Digite cadena:");
    if (typeof cadena !== "string" || cadena.length === 0) {
        cadena = "soy un tipo feliz y afortunado";
        console.warn("No ingresaste ninguna cadesn");
    } 

    // Dividiendo la cadena "mensaje" usando el carácter espacio
    let arreglo = cadena.split(' ');
    
    // El arreglo
    //console.log(arreglo); // ["Soy", "un", "tipo", "feliz", "y", "afortunado"]

    let ol = document.getElementById("muestraEj03");
    arreglo.forEach((elem, indi) => {
        const li = document.createElement('li');
        li.innerHTML = `${indi} ⏩ ${elem}`;
        ol.append(li);
    });

    return;
}

// ==========================
// todo: ejercicio 4
// ==========================

function ejercicio04() {
    let cadena = prompt("Digite cadena:");
    if (typeof cadena !== "string" || cadena.length === 0) {
        cadena = "no es un string.";
    } 
   
    let ul4 = `
    <li> ${cadena} </li>
    <li> ${cadena} </li>
    <li> ${cadena} </li>
    `;
    
    document.getElementById("muestraEj04").innerHTML = ul4;

}

// ==========================
// todo ejercicio 5
// ==========================

function ejercicio05() {
    let cadena = prompt("Digite cadena:");
    if (!cadena) {
        alert("debe digitar un texto");
        return;
    };
    var separarCadena = cadena.split("");
    var invierteArray = separarCadena.reverse();
    var unirElArreglo = invierteArray.join("");

    document.getElementById("muestraEj05").innerHTML = unirElArreglo;

}

// ==========================
// todo ejercicio 6
// ==========================

function ejercicio06() {
    let cadena = document.getElementById('dato6').value;
    var separarCadena = cadena.split(" ");
    let palabra = prompt("Digite cadena:");
    if (!palabra) {
        alert("debe digitar una palabra");
        return;
    };
    let canti = 0;
    for (let i = 0; i < separarCadena.length; i++) {
        if (separarCadena[i] === palabra) canti++;
    }

    document.getElementById("muestraEj06").innerHTML =`La cantidad de veces que existe esa palabra en el texto es ${canti}`;

}

// ==========================
// todo ejercicio 7
// ==========================

function ejercicio07() {
    let cadena = prompt("Digite una palabra:");
    if (!cadena) {
        alert("debe digitar un texto");
        return;
    };
    var separarCadena = cadena.split(" ");
    //console.log(separarCadena.length);
    if (separarCadena.length > 1) {
        alert("debe digitar una sola palabra");
        return;
    }

    const strReversed = cadena.split("").reverse().join("");
    let result = "no es palindromo";
    if (cadena === strReversed) result = "es palindromo";

    document.getElementById("muestraEj07").innerHTML = `La palabra ${cadena} ${result}`;

}


function palindromeChecker(str) {
    const strReversed = str.split("").reverse().join("");
    
    return strReversed === str ? "es palindromo" : "no es palindromo";
}
// ==========================
// todo ejercicio 8
// ==========================

function ejercicio08() {


}

// ==========================
// todo ejercicio 9
// ==========================

function ejercicio09() {
    let numero = prompt("Digite un rango aleatorio:");

    if (!numero) {
        alert("debe digitar un numero " + numero);
        return;
    };

    numero = Math.round(numero)
    let tipo = typeof(numero);
    console.log(tipo);

    if (tipo !== "number") { 
        console.log(numero);
    }

    let num = toString(numero);
    console.log("numero:",num,num.length);

    //let a = Math.round(Math.random() * 100) + 500 ;
    for (let i = 0; i < 10; i++) {
        console.log("el numero es:",Math.round(Math.random() * 100) + numero);
    }
    
}

// ==========================
// todo ejercicio 10
// ==========================

function ejercicio10() {

}

// ==========================
// todo ejercicio 11
// ==========================

function ejercicio11() {

}

// ==========================
// todo ejercicio 12
// ==========================

function ejercicio12() {

}

// ==========================
// todo ejercicio 13
// ==========================

function ejercicio13() {

}

// ==========================
// todo ejercicio 14
// ==========================

function ejercicio14() {

}

// ==========================
// todo ejercicio 15
// ==========================

function ejercicio15() {

}

// ==========================
// todo ejercicio 16
// ==========================

function ejercicio16() {

}

// ==========================
// todo ejercicio 17
// ==========================

function ejercicio17() {

}

// ==========================
// todo ejercicio 18
// ==========================

function ejercicio18() {

}

// ==========================
// todo ejercicio 19
// ==========================

function ejercicio19() {

}

// ==========================
// todo ejercicio 20
// ==========================

function ejercicio20() {

}

// ==========================
// todo ejercicio 21
// ==========================

function ejercicio21() {

}

// ==========================
// todo ejercicio 22
// ==========================

function ejercicio22() {

}

// ==========================
// todo ejercicio 23
// ==========================

function ejercicio23() {

}

// ==========================
// todo ejercicio 24
// ==========================

function ejercicio24() {

}

// ==========================
// todo ejercicio 25
// ==========================

function ejercicio25() {

}

// ==========================
// todo ejercicio 26 
// ==========================

function ejercicio26() {

}

// ==========================
// todo ejercicio 27
// ==========================

function ejercicio27() {

}


// ? ==========================
// todo funciones generales 
// ? ==========================

function ejercicio00() {

}

// ==========================
// ! otros ejercicios
// ==========================

var numeros="0123456789";

function tiene_numeros(texto){
    for(i=0; i<texto.length; i++){
        if (numeros.indexOf(texto.charAt(i),0)!=-1){
            return 1;
        }
    }
    return 0;
}

var letras="abcdefghyjklmnñopqrstuvwxyz";
function tiene_letras(texto){
    texto = texto.toLowerCase();
    for(i=0; i<texto.length; i++){
        if (letras.indexOf(texto.charAt(i),0)!=-1){
            return 1;
        }
    }
    return 0;
 }

function busca_caracter(texto){
    texto = texto.toLowerCase();
    for(i=0; i<texto.length; i++){
        if (texto.charAt(i) === " ") {
            return i;
        }
    }
    return 0;
}



//console.log("resultado:",resultado);
