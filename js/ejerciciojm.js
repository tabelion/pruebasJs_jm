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

function inicio() {
    //alert("inicio");
    //document.getElementById("form_busqueda").submit();
    location.href="http://127.0.0.1:5500/curso_jonmircha/ejerciciojm.html";
}

// ========================
// todo: ejercicio 1
// ========================

function ejercicio01() {
    let cadena = document.getElementById("dato1").value;
    
    let result = contarCaracteres(cadena);
    
    document.getElementById("muestraEj01").innerHTML = `Repuesta:  ${result}`;

    console.info("resultado: " + result);  
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
    //let cadena = prompt("Digite cadena:");
    let cadena = document.getElementById("dato2").value;
    let result = recortarCadena(cadena, cadena.search(" "));

    console.info("resultado: " + result);

    document.getElementById("muestraEj02").innerHTML = `Repuesta:  ${result}`; 
}


// con arrow function
const recortarCadena = (cadena = "", longitud = undefined) => 
(!cadena) 
? `Ingrese una cadena de texto de mas de una palabra` 
: `La primera palabra es ${cadena.slice(0,longitud)} `;

// otra forma
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
    //let cadena = prompt("Digite cadena:");
    let cadena = document.getElementById("dato3").value;

    if (typeof cadena !== "string" || cadena.length === 0) {
        cadena = "soy un tipo feliz y afortunado";
        console.warn("No ingresaste ninguna cadena");
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
}

// ==========================
// todo: ejercicio 4
// ==========================


// ==========================
// todo: ejercicio 5
// ==========================

function ejercicio05() {
    //let cadena = prompt("Digite cadena:");
    let cadena = document.getElementById("dato5").value;

    if (typeof cadena !== "string" || cadena.length === 0) {
        cadena = "soy un tipo feliz y afortunado";
        console.warn("No ingresaste ninguna cadena");
    } 

    // Dividiendo la cadena "mensaje" usando el carácter espacio
    let arreglo = cadena.split(' ');
    
    let ul5 = ``;
    arreglo.forEach((elem, indi) => {
        ul5 += `<li> ${indi+1} ⏩ ${elem} </li>`;
    });
    
    document.getElementById("muestraEj05").innerHTML = ul5;
}

// ==========================
// todo: ejercicio 6
// ==========================

function ejercicio06() {
    let cadena = document.getElementById("dato6").value;

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
// todo: ejercicio 7
// ==========================

function ejercicio07() {
    let cadena = document.getElementById("dato7").value;


    document.getElementById("muestraEj07").innerHTML = cadena;
}

// ==========================
// todo: ejercicio 8
// ==========================

function ejercicio08() {
    let cadena = document.getElementById("dato8").value;


    document.getElementById("muestraEj08").innerHTML = cadena;
}

// ==========================
// todo: ejercicio 9
// ==========================

function ejercicio09() {
    let cadena = document.getElementById("dato9").value;


    document.getElementById("muestraEj09").innerHTML = cadena;
}

// ==========================
// todo: ejercicio 10
// ==========================

function ejercicio10() {
    let cadena = document.getElementById("dato10").value;


    document.getElementById("muestraEj10").innerHTML = cadena;
}

// ==========================
// todo: ejercicio 11
// ==========================

function ejercicio11() {
    let cadena = document.getElementById("dato11").value;


    document.getElementById("muestraEj11").innerHTML = cadena;
}
// ==========================
// todo: ejercicio 12
// ==========================

function ejercicio12() {
    let cadena = document.getElementById("dato12").value;


    document.getElementById("muestraEj12").innerHTML = cadena;
}
// ==========================
// todo: ejercicio 13
// ==========================

function ejercicio13() {
    let cadena = document.getElementById("dato13").value;


    document.getElementById("muestraEj13").innerHTML = cadena;
}
// ==========================
// todo: ejercicio 14
// ==========================

function ejercicio14() {
    let cadena = document.getElementById("dato14").value;


    document.getElementById("muestraEj14").innerHTML = cadena;
}
// ==========================
// todo: ejercicio 15
// ==========================

function ejercicio15() {
    let cadena = document.getElementById("dato15").value;


    document.getElementById("muestraEj15").innerHTML = cadena;
}
// ==========================
// todo: ejercicio 16
// ==========================

function ejercicio16() {
    let cadena = document.getElementById("dato16").value;


    document.getElementById("muestraEj16").innerHTML = cadena;
}

// ==========================
// todo: ejercicio 17
// ==========================

function ejercicio17() {
    let cadena = document.getElementById("dato17").value;


    document.getElementById("muestraEj17").innerHTML = cadena;
}

// ==========================
// todo: ejercicio 18
// ==========================

function ejercicio18() {
    let cadena = document.getElementById("dato18").value;


    document.getElementById("muestraEj18").innerHTML = cadena;
}

// ==========================
// todo: ejercicio 19
// ==========================

function ejercicio19() {
    let cadena = document.getElementById("dato19").value;


    document.getElementById("muestraEj19").innerHTML = cadena;
}
// ==========================
// todo: ejercicio 20
// ==========================

function ejercicio20() {
    let cadena = document.getElementById("dato20").value;


    document.getElementById("muestraEj20").innerHTML = cadena;
}

// ==========================
// todo: ejercicio 21
// ==========================

function ejercicio21() {
    let cadena = document.getElementById("dato21").value;


    document.getElementById("muestraEj21").innerHTML = cadena;
}
// ==========================
// todo: ejercicio 22
// ==========================

function ejercicio22() {
    let cadena = document.getElementById("dato22").value;


    document.getElementById("muestraEj22").innerHTML = cadena;
}
// ==========================
// todo: ejercicio 23
// ==========================

function ejercicio23() {
    let cadena = document.getElementById("dato23").value;


    document.getElementById("muestraEj23").innerHTML = cadena;
}
// ==========================
// todo: ejercicio 24
// ==========================

function ejercicio24() {
    let cadena = document.getElementById("dato24").value;


    document.getElementById("muestraEj24").innerHTML = cadena;
}
// ==========================
// todo: ejercicio 25
// ==========================

function ejercicio25() {
    let cadena = document.getElementById("dato25").value;


    document.getElementById("muestraEj25").innerHTML = cadena;
}
// ==========================
// todo: ejercicio 26
// ==========================

function ejercicio26() {
    let cadena = document.getElementById("dato26").value;


    document.getElementById("muestraEj26").innerHTML = cadena;
}

// ==========================
// todo: ejercicio 27
// ==========================

function ejercicio27() {
    let cadena = document.getElementById("dato27").value;


    document.getElementById("muestraEj27").innerHTML = cadena;
}
