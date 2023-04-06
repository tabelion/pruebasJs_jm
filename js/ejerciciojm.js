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
    let cadena = document.getElementById("dato2").value;
    
    if (!cadena) {
        alert("Debe digitar un texto: ");
        return;
    }    
    
    let canti = prompt("Digite cuantos caracters quiere mostrar:");
    let result = recortarCadena(cadena, canti);

    document.getElementById("muestraEj02").innerHTML = `Repuesta:  ${result}`; 
}


// con arrow function
const recortarCadena = (cadena = "", longitud = undefined) => 
(!longitud) 
? `La primera palabra es ${cadena.slice(0,cadena.search(" "))}` 
: `elegiste mostrar ${longitud} caracteres = ${cadena.slice(0,longitud)}`;

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
function ejercicio04() {
    let cadena = document.getElementById("dato4").value;
    if (typeof cadena !== "string" || cadena.length === 0) {
        alert("No ingresaste ningun texto");
        console.warn("No ingresaste ninguna cadena");
        return
    } 
    
    let canti = prompt("Digite cantidad de veces que repite el texto:");
    if (!canti) canti = 2;
    let ul4 = ``;
    for (let i = 1; i <= canti; i++) {
        ul4 += `<li> ${i} 💫 ${cadena} </li>`;
    }

    document.getElementById("muestraEj04").innerHTML = ul4;
}

// ==========================
// todo: ejercicio 5
// ==========================

function ejercicio05() {
    let cadena = document.getElementById("dato5").value;

    if (typeof cadena !== "string" || cadena.length === 0) {
        alert("No ingresaste ningun texto");
        console.warn("No ingresaste ninguna cadena");
        return
    } 

    let separarCadena = cadena.split("");
    let inviertCadena = separarCadena.reverse().join("");

    document.getElementById("muestraEj05").innerHTML = inviertCadena;
}

// ==========================
// todo: ejercicio 6
// ==========================

function ejercicio06() {
    let cadena = document.getElementById("dato6").value;

    var separarCadena = cadena.split(" ");
    let palabra = prompt("Digite palabra a buscar:");
    if (!palabra) {
        alert("debe digitar una palabra");
        return;
    };

    let canti = 0;
    for (let i = 0; i < separarCadena.length; i++) {
        if (separarCadena[i] === palabra) canti++;
    }
    
    document.getElementById("muestraEj06").innerHTML =`La cantidad de veces que existe la palabra ${palabra}  en el texto es ${canti}`;

    palabra = palabra.toLowerCase();
}

//document.write(array_word(palabra,array))

// ==========================
// todo: ejercicio 7
// ==========================

function ejercicio07() {
    let cadena = document.getElementById("dato7").value;
    if (typeof cadena !== "string" || cadena.length < 3) {
        alert("Ingresaste una palabra de 3 letras minimo");
        console.warn("No ingresaste ninguna palabra");
        return;
    } 

    // console.log(cadena);
    let separarCadena = cadena.split("");
    let inviertCadena = separarCadena.reverse().join("");
    /* // todo Junto
    const inviertCadena = cadena.split("").reverse().join("");
    */

    let resul = (cadena === inviertCadena) 
        ? `es un polidromo` 
        : `No es un polidromo`

    document.getElementById("muestraEj07").innerHTML = `La palabra ${cadena}  ${resul}`;
}

// ==========================
// todo: ejercicio 8
// ==========================

function ejercicio08() {
    let cadena = document.getElementById("dato8").value;
    if (typeof cadena !== "string" || cadena.length === 0) {
        alert("No ingresaste ningun texto");
        console.warn("No ingresaste ninguna cadena");
        return
    } 
    
    let patron = prompt("Digite patron a eliminar:");
    if (!patron) {
        alert("debe digitar un patron a eliminar");
        return;
    };
    
    let nuevoTexto = cadena;

    while (nuevoTexto.search(patron) !== -1) {
        nuevoTexto = nuevoTexto.replace(patron,"");
    }

    document.getElementById("muestraEj08").innerHTML = nuevoTexto;
}

// ? este es el ejemplo que dio JonMircha
function ejercicio08a() {
    let texto = document.getElementById("dato8").value;
    let patron = prompt("Digite patron a eliminar:");

    const eliminarCaracteres = (texto = "", patron = "") => 
    (!texto)
    ? console.warn('No ingresaste el texto')
    : console.info(texto.replace(new RegExp(patron,"ig"),""));

    eliminarCaracteres();
    eliminarCaracteres("xyz1, xyz2, xyz3, xyz4 y xyz5");
    eliminarCaracteres("xyz1, xyz2, xyz3, xyz4 y xyz5","xyz");
    eliminarCaracteres(texto,patron);

  // esta parte no funciono
    const eliminaCaracteres = (texto = "", patron = "") => 
    (!texto)
    ? 'No ingresaste el texto'
    : texto.replace(patron,"");

    document.getElementById("muestraEj08").innerHTML = eliminaCaracteres(texto,patron);
}

// const str = 'JavaScript';
// const nuevaStr = str.replace("ava", "-");
// console.log(nuevaStr);
// ? J-Script

// ? ------------
// 'Esto es una cadena'.includes('a'); // true
// 'Esto es una cadena'.includes('i'); // false
// ? ------------
// 'Esto es una cadena'.lastIndexOf('E'); // 0
// 'Esto es una cadena'.lastIndexOf('a'); // 17
// 'Esto es una cadena'.lastIndexOf('z'); // -1
// ? -----------------
// 'Esto es una cadena'.search('E'); // 0
// 'Esto es una cadena'.search('o'); // 4
// 'Esto es una cadena'.search('z'); // -1


// ==========================
// todo: ejercicio 9
// ==========================

function ejercicio09() {
    let desde = document.getElementById("dato9").value;
    let hasta = document.getElementById("dato9b").value;
    
    if (!desde || !hasta) {
        alert("digite rango de numero desde hasta");
        return;
    };
    let numd = parseInt(desde, 10);
    let numh = parseInt(hasta, 10);
    let num = Math.round(Math.random() * numh);
    let numm = numh - numd;
    
    let ul9 = ``;
    ul9 += `<li> ${num} </li>`;
    
    if (num < numd) {
        if (num < numm) {
            num += numd;
        } else {
            num += numm;
        }
        ul9 += `<li>su numero es 💫  ${num} </li>`;
    } else {
        ul9 += `<li>su numero es 💫  ${num} </li>`;
    }

    // document.getElementById("muestraEj09").innerHTML = `su numero es ${num}`;
    document.getElementById("muestraEj09").innerHTML = ul9;
}


// alert(numero+" tipo de datos:"+ typeof numero);
// || typeof(numero) != "number"

//let uni = Math.pow(10, desde.length);   
//numero = Math.round(numero)
//num = toString(numero);

// ==========================
// todo: ejercicio 10
// ==========================

function ejercicio10() {
    let numero = document.getElementById("dato10").value;
    
    if (!numero) {
        alert("digite numero");
        return;
    };

    const inviertCadena = numero.split("").reverse().join("");

    //let num = parseInt(numero, 10);
    const capicua = (numero === inviertCadena) ? `es capicua` : `No es capicua`;

    document.getElementById("muestraEj10").innerHTML = `El numero ${numero} ${capicua}`;
}

// ==========================
// todo: ejercicio 11
// ==========================

function ejercicio11() {
    let numero =  parseInt(document.getElementById("dato11").value);
    if (!numero) {
        alert("digite numero");
        return;
    };


    // if (typeof numero !== "number") {
    //     alert("digite numero");
    //     return;
    // }
    // if (Number.isInteger(numero) !== true) {
    //     alert("digite numero");
    //     //throw new Error ("Solo con numeros entero");
    // return;
    // }
    // if (num < 0) {
    //     alert("Solo con numeros positivos");
    //     //throw new Error ("Solo con numeros positivos");
    //     return;
    // }    
    const factor = factorialize(numero);

    document.getElementById("muestraEj11").innerHTML = `El factorial de ${numero} es ${factor} `;
}

function factorialize(num) {
    if (num == 0) return 1;
    
    // De otra forma, llama al procedimiento de nuevo
    return (num * factorialize(num - 1));
    
    /* 
        Segunda parte del metodo recursion
        Si el metodo toca la condicion if, y regresa 1 cuando el numero se multiplica asi mismo.
        La funcion regresara con el valor total
        
          5ª la llamada devolvera (5 * (5 - 1))     // num = 5 * 4
          4ª la llamada devolvera (20 * (4 - 1))    // num = 20 * 3
          3ª la llamada devolvera (60 * (3 - 1))    // num = 60 * 2
          2ª la llamada devolvera (120 * (2 - 1))   // num = 120 * 1
          1ª la llamada devolvera (120)             // num = 120
        
        Si sumamonos todas las llamadas en una linea, tenemos
        (5 * (5 - 1) * (4 - 1) * (3 - 1) * (2 - 1)) = 5 * 4 * 3 * 2 * 1 = 120
        */
}

//factorialize(5);
// Sin comentarios:

// ==========================
// todo: ejercicio 12
// ==========================

function ejercicio12() {
    let numero =  parseInt(document.getElementById("dato12").value);
    if (!numero) {
        alert("digite numero");
        return;
    };
    
    const esPrimo = (numero) => {
        if (numero == 0 || numero == 1 || numero == 4) return `No es `;
        for (let i = 2; i < numero /2; i++) {
            if (numero % i == 0) return 'no es';
        }
        return 'Si es ';    
    }  

    console.log('resultado=', esPrimo(num));

    document.getElementById("muestraEj12").innerHTML = `${num} ${esPrimo(num)} un numero primo`;
}

// ==========================
// todo: ejercicio 13
// ==========================

function ejercicio13() {
    let numero =  parseInt(document.getElementById("dato13").value);
    if (!numero) {
        alert("digite numero");
        return;
    };

    const esPar = (num) => {
        if (num % 2 === 0) return 'par';
        return 'impar';
    }

    document.getElementById("muestraEj13").innerHTML = `El numero ${numero} es ${esPar(numero)}`;
}
// ==========================
// todo: ejercicio 14
// ==========================

function ejercicio14() {
    //let grados = parseInt(document.getElementById("dato14").value);
    let grados =  document.getElementById("dato14").value;
    if (!grados) {
        alert("digite numero");
        return;
    };
    
    let elige = document.getElementsByName("grado");
    // =====================
    // let opcion = "";
    // for (let radio of elige) {
    //     if (radio.checked) opcion = radio.value;
    // }
    // console.log('selecionado opcion: '+opcion);
    // ! tambien se puede asi:
    let selected = Array.from(elige).find(radio => radio.checked);
    console.log('selecionado '+selected.value);
    // =====================
    let conversion = 0;
    let resultado = "";
    if (selected.value === 'celsius') {
        // ? convierte a celsius
        conversion = (grados - 32) * (5 / 9);
        resultado = `${grados} grados fahrenheit = ${conversion} grados celsius`;
    } else {
        // ? convierte a fahrenheit
        conversion = (grados * 9 / 5) + 32;
        resultado = `${grados} grados celsius = ${conversion} grados fahrenheit`;
    }

    document.getElementById("muestraEj14").innerHTML = resultado;
}
// ==========================
// todo: ejercicio 15
// ==========================

function ejercicio15() {
    let num = document.getElementById("dato15").value;
    let elige = document.getElementsByName("bindec");
    //let selected = Array.from(elige).find(radio => radio.checked);
    let selected = "";
    for (let radio of elige) {
        if (radio.checked) selected = radio.value;
    }
    // =====================
    let result = 0;
    if (selected === 'decimal') {
        result = BinarioADecimal(num)
    } else {
        result = DecimalABinario(num)
    }
    // =====================

    document.getElementById("muestraEj15").innerHTML = result;
}

function BinarioADecimal(num) {
    // let num = "11101";
    let canti = num.length - 1;
    let calcu = 0;
    for (let i = 0; i <= canti; i++) {
        calcu += num[i] * Math.pow(2, canti-i) ;
    }
    return calcu;
}

function DecimalABinario(num) {
    //let num = 29;   32 16 8 4 2 1
    let calcu = num;
    let resul = "";
    
    while (calcu > 1) {
        resul = calcu % 2 + resul;
        calcu = Math.floor(calcu / 2);
    }
    return  "1" + resul;  
}

// ==========================
// todo: ejercicio 16
// ==========================

function ejercicio16() {
    let importe = document.getElementById("dato16").value;
    let descuento = document.getElementById("dato16b").value;

    let resul = importe - (importe * (descuento /100));

    document.getElementById("muestraEj16").innerHTML = `$ ${resul}`;
}

// ==========================
// todo: ejercicio 17
// ==========================

function ejercicio17() {
    //const fechaDes = new Date(document.getElementById("dato17").value);
    const fechaDes = document.getElementById("dato17").value;
    // =========
    // let anioD = fechaDes.getFullYear(); 
    // let mesDe = fechaDes.getMonth() + 1; 
    // let diaDe = fechaDes.getDate(); 
    // console.log(diaDe,'-',mesDe,'-',anioD, fechaDes);

    const calcularEdad = (fechaDes) => {
        const fechaHoy = new Date();
        const anoActual = parseInt(fechaHoy.getFullYear());
        const mesActual = parseInt(fechaHoy.getMonth()) + 1; 
        const diaActual = parseInt(fechaHoy.getDate()); 
        // fecha digitada ej 1953-11-20
        const anoElegido = parseInt(fechaDes.slice(0,4));
        const mesElegido = parseInt(fechaDes.slice(5,7));
        const diaElegido = parseInt(fechaDes.slice(8,10));

        let edad = anoActual - anoElegido;
        if (mesActual < mesElegido) {
            edad--;
        } else if (mesActual === mesElegido){
            if (diaActual < diaElegido) edad--;
        }
        return edad;
    }

    document.getElementById("muestraEj17").innerHTML = `la edad es ${calcularEdad(fechaDes)} años` ;
}

function dif() {
    var fechaI = new Date(document.getElementById("FechaI").value);
    var fechaF = new Date(document.getElementById("FechaFin").value);
    var tiempo = fechaF.getTime() - fechaI.getTime();
    console.log(fechaI);
    var dias = Math.floor(tiempo / (1000 * 60 * 60 * 24));
    document.getElementById("Tiempo").innerHTML = dias;
    document.getElementById("Tiempo").value = dias;
  
  };


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
