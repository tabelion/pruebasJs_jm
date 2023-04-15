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
    let fechaIni = new Date(document.getElementById("dato17").value);
    let fechaHoy = new Date();
    let difFecha = difFec(fechaIni, fechaHoy);
    alert ("dias: " + difFecha);
    // =========
    const fechaDes = document.getElementById("dato17").value;
    // =========
    // let anioD = fechaDes.getFullYear(); 
    // let mesDe = fechaDes.getMonth() + 1; 
    // let diaDe = fechaDes.getDate(); 
    // console.log(diaDe,'-',mesDe,'-',anioD, fechaDes);

    const calcularEdad = (fechaDes) => {
        //const fechaHoy = new Date();
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

function difFec(fechaIni, fechaFin) {
    var tiempo = fechaFin.getTime() - fechaIni.getTime();
    console.log(fechaIni);
    var dias = Math.floor(tiempo / (1000 * 60 * 60 * 24));
    return dias;
};


// ==========================
// todo: ejercicio 18
// ==========================

function ejercicio18() {
    let cadena = document.getElementById("dato18").value;
    if (!cadena) {
        console.warn("debes ingresar un cadena de texto");
        return
    }

    if (typeof cadena !== "string") {
        console.error("La cadena ingresada no es una cadena de texto");
        return;
    }

    let vocales = 0,
        consonantes = 0;
    let array = cadena.split("");
    
    for (let i = 0; i < array.length; i++) {
        console.log(`${i} 💥 ${array[i]}`);
    }
    console.log('---------------------');
    array.forEach((letra, indi) => {
        if (/[AEIOUaeiouáéíóúü]/.test(letra)) 
            console.log(`${indi} ⭐ ${letra}`);
        if (/[BCDFGHJKLMNPQRSTVXYZbcdfghjklmnpqrstvwxyz]/.test(letra))
            console.log(`${indi} ⏩ ${letra}`);      
    });
    console.log('---------------------');
    cadena = cadena.toLocaleLowerCase();
    for (let letra of cadena) {
        if (/[aeiouáéíóúü]/.test(letra)) vocales++;
        if (/[bcdfghjklmnpqrstvwxyz]/.test(letra)) consonantes++;
    }

    let ul18 = ``;
    ul18 += `<li> 💫 vocales: ${vocales} </li>`;
    ul18 += `<li> 🌟 consonantes: ${consonantes} </li>`;

    console.log(`vocales: ${vocales} 
    consonantes: ${consonantes}`);

    document.getElementById("muestraEj18").innerHTML = ul18;
}

// ==========================
// todo: ejercicio 19
// ==========================

function ejercicio19() {
    let nombre = document.getElementById("dato19").value;
    if (!nombre) {
        console.warn("No ingresaste un nombre");
        return;
    }

    if (typeof nombre !== "string") {
        console.error("El valor ingresado no es una cadena de texto");
        return;
    }

    let result = validaNombre(nombre);

    document.getElementById("muestraEj19").innerHTML = `El nombre ${nombre} ${result}`;
}
// ==========================
// todo: ejercicio 20
// ==========================

function ejercicio20() {
    let email = document.getElementById("dato20").value;
    if (!email) {
        console.warn("No ingresaste un dato");
        return;
    }

    let result = validaEmail(email);

    document.getElementById("muestraEj20").innerHTML = `El email ${email} ${result}`;
}

// ==========================
// todo: ejercicio 21
// ==========================

function ejercicio21() {
    let cadena = document.getElementById("dato21").value;
    let expReg = /^[0-9,\s]+$/.test(cadena);
    //let expReg2 = /[0-9,\s]/.test(cadena);

    if (!expReg) {
        alert("No ese una cadena validada");
        return;
    }
    let arr = cadena.split(','); 

    let doubles = arr.map(function(num) {return num * 2});
    let cuadrado = arr.map(num => Math.pow(num,2)); 

    console.log(doubles);

    document.getElementById("muestraEj21").innerHTML =  cuadrado;
}

// ==========================
// todo: ejercicio 22
// ==========================

function ejercicio22() {
    let cadena = document.getElementById("dato22").value;
    if (/^[0-9,-\s]+$/.test(cadena) === false) {
        alert("No ese una cadena validada");
        return;
    }
    console.log(Math.max(cadena));
    let arr = cadena.split(',');
    console.log(Math.max(...arr));
    console.log(Math.min(...arr));

    let ul22 = ``;
    ul22 += `<li> 💫 Numero mas bajo: ${Math.min(...arr)} </li>`;
    ul22 += `<li> 🌟 Numero mas alto: ${Math.max(...arr)} </li>`;

    document.getElementById("muestraEj22").innerHTML = ul22;
}
// ==========================
// todo: ejercicio 23
// ==========================

function ejercicio23() {
    let cadena = document.getElementById("dato23").value;
    if (/^[0-9,\s]+$/.test(cadena) === false) {
        alert("No ese una cadena validada");
        return;
    }

    let array = cadena.split(',');
    let nupar = [];
    let impar = [];

    array.forEach((numero, index) => {
        if (numero % 2 === 0) {
            nupar.push(numero);
        } else {
            impar.push(numero);
        }
    })

    console.info('Par:', nupar, 'Impar:', impar);
 
    // =================================================================
    let arr = cadena.split(',');
    // devuelve un objeto
    let numParImpar = {
        numImpDes: arr.map(num => num % 2 !== 0),
        numPar: arr.filter(num => num % 2 === 0),
        numImp: arr.filter(num => num % 2 !== 0).sort()
    };

    console.info("Pares:",numParImpar['numPar'],"Impares:",numParImpar['numImp'], "Impares Desordenados:",numParImpar['numImpDes']); 

    let ul23 = ``;
    ul23 += `<li> 💫 Numero impares: ${numParImpar['numImp']} </li>`;
    ul23 += `<li> 🌟 Numero pares: ${numParImpar['numPar']} </li>`;

    document.getElementById("muestraEj23").innerHTML = ul23;
}
// ===================================
// todo: ejercicio 24 Ordenar arreglo
// ===================================

function ejercicio24() {
    let cadena = document.getElementById("dato24").value;
    if (/^[0-9,\s]+$/.test(cadena) === false) {
        alert("No ese una cadena validada");
        return;
    }

    //let arr = cadena.split(',');
    let arreglo = cadena.split(',').map(ele => parseInt(ele, 10));
    console.log('arreglo:',arreglo);
    // ===========
    //console.log('ejemplo:',array);
    let ordenado = {
        asc: arreglo.map(ele => ele).sort(),
        des: arreglo.map(ele => ele).sort().reverse()
    };
    // ===========
    let ul24 = ``;
    ul24 += `<li> 💫 Ordenado Ascendente: ${ordenado['asc']} </li>`;
    ul24 += `<li> 🌟 Ordenado descendente: ${ordenado['des']} </li>`;
    document.getElementById("muestraEj24").innerHTML = ul24;
}
// ==========================
// todo: ejercicio 25
// ==========================

function ejercicio25() {
    let cadena = document.getElementById("dato25").value;
    // if (!cadena) {
    //     alert("Debe digitar el dato solicitado");
    //     return;
    // }
    if (cadena === undefined) return console.warn("No ingreso una arreglo de numeros");

    if (/[,]/.test(cadena) === false) {
        return console.error("No ese una cadena validada");
        // alert("No ese una cadena validada");
        // return;
    }

    let arr = cadena.split(',').map(ele => parseInt(ele, 10));
    if (arr.length <= 1) {
        alert("El arreglo debe tener mas de un elemento");
        return; 
    }

    // if (!(arr instanceof Array)) {
    //     alert("El dato solicitado no es un arreglo");
    //     return;
    // }

    // devuelve un objeto
    let duplicado = {
        original: arr,
        sinDuplicar: arr.filter((ele, ind, self) => self.indexOf(ele) === ind),
        noDuplicado: [... new Set(arr)],
    };

    console.info("Original:",duplicado['original'],"No duplicados:",duplicado['sinDuplicar']); 

    let ul25 = ``;
    ul25 += `<li> 💫 Original: ${duplicado['original']} </li>`;
    ul25 += `<li> 🌟 Sin Duplicar: ${duplicado['sinDuplicar']} </li>`;
    ul25 += `<li> 💥 NO Duplicado: ${duplicado['noDuplicado']} </li>`;
    document.getElementById("muestraEj25").innerHTML = ul25;
}

// ==========================
// todo: ejercicio 26 
// ==========================

function ejercicio26() {
    let cadena = document.getElementById("dato26").value;
    if (/^[0-9,.\s]+$/.test(cadena) === false) {
        alert("No ese una cadena validada");
        console.warn("No ingreso una arreglo de numeros");
        return;
    }

    let arr = cadena.split(',').map(ele => parseInt(ele, 10));

    if (arr.length <= 1) {
        alert("El arreglo debe tener mas de un elemento");
        return; 
    }

    let promedio = arr.reduce((total, num, index, arr) => {
        total += num;
        if (index === arr.length - 1) {
            return `El promedio ${arr.join('+')} es ${(total / arr.length).toFixed(2)}`;
        } else { 
            return total;
        }
    });
    document.getElementById("muestraEj26").innerHTML = promedio;
}

// ! =========================================================
// todo los Métodos de Arrays en JavaScript que debo conocer.
// https://dev.to/gdcodev/25-metodos-de-arrays-en-javascript-que-todo-desarrollador-debe-conocer-4a2d
// ! =========================================================
// 0️⃣ 1️⃣ 2️⃣ 3️⃣ 4️⃣ 5️⃣ 6️⃣ 7️⃣ 8️⃣ 9️⃣ #️⃣

// ? #️⃣1️⃣ map() : Permite recorrer el array y modificar los elementos presentes en él, retornando un nuevo array con la misma longitud que el original.
/*
   let arr = cadena.split(',');
    let ejemplo = arr.map(function(el) { 
        return el + 10 
    };

   // devuelve un objeto
    let ordenado = {
        asc: arr.map(ele => ele).sort(),
        des: arr.map(ele => ele).sort().reverse()
    };

    console.info("Orden Ascendente:",ordenado['asc'],"Descendente:",ordenado['des']);    
 
    let ul24 = ``;
    ul24 += `<li> 💫 Ordenado Ascendente: ${ordenado['asc']} </li>`;
    ul24 += `<li> 🌟 Ordenado descendente: ${ordenado['des']} </li>`;
    document.getElementById("muestraEj24").innerHTML = ul24;
*/

// ? #️⃣2️⃣ filter() : Recorre el array y retorna un nuevo array con aquellos elementos que pasen una determinada condición.

// * const result = array.filter(element => element === 3 || element === 7);
// [3, 7]

// ? #️⃣3️⃣ forEach() : Permite iterar el contenido de un array. Recibe un callback que toma como parámetro el elemento actual de la iteración y el indice del mismo

// * const result = 

// ? #️⃣4️⃣ find() : Recorre el array y retorna la primera coincidencia del elemento que se busca

// * const result = array.find(el => el > 3)
// * [4]

// ? #️⃣5️⃣ sort() : Ordena los elementos del array y retorna el arreglo ordenado. Los elementos se ordenarán en orden ascendente (de la A a la Z) por defecto.

// * const result = array.sort()    
    // let ordenado = {
    //     asc: arr.map(ele => ele).sort(),
    //     des: arr.map(ele => ele).sort().reverse()
    // };

// * #️⃣6️⃣ some() : Itera el array y retorna un booleano si como mínimo uno de los elementos presentes en el array pasa una condición determinada. Recibe un callback que se encargara de preguntar aquello que queremos dentro del array.

// * const result = 

// * #️⃣7️⃣ every() : Es similar al some(), ya que itera el array y retorna un booleano. Pero esta vez, para que dicho booleano sea true todos los elementos del array deberán pasar la condición dada

// * const result = 

// ? #️⃣8️⃣ concat() : Se utiliza para unir dos o más arrays. Este método no cambia los arrays existentes, sino que devuelve un nuevo array.

// * const result = 

// * #️⃣9️⃣ includes() : Determina si un array incluye un determinado elemento y retorna un booleano según corresponda.

// * const result = 

// ? 1️⃣0️⃣ join() : Une todos los elementos de un array en una cadena. Podemos pasarle como parámetro el carácter de separación que debe agregar entre los elementos.

// * const result = 

// ? 1️⃣1️⃣ reduce() : Aplica una función a un acumulador y a cada valor de una array (de izquierda a derecha) para reducirlo a un único valor.

// * const result = 

// ? 1️⃣2️⃣ indexOf() : Retorna el primer índice en el que se puede encontrar un elemento dado en el array, ó retorna -1 si el elemento no esta presente.

// * const result = 

// * 1️⃣3️⃣ findIndex() : Retorna el índice del primer elemento de un array que cumpla con la función de prueba proporcionada. En caso contrario devuelve -1.

// * const result = 

// * 1️⃣4️⃣ fill() : Cambia todos los elementos de un array por un valor estático, desde el índice de inicio hasta el índice final. Retorna el array modificado.

// * const result = 

// ? 1️⃣5️⃣ push() : Añade uno o más elementos al final de un array y devuelve la nueva longitud del array.

// * const result = 

// ? 1️⃣6️⃣ pop() : Elimina el último elemento de un array y lo devuelve. Este método cambia la longitud del array.

// * const result = 

// ? 1️⃣7️⃣ shift() : Elimina el primer elemento del array y lo retorna. Este método modifica la longitud del array.

// * const result = 

// ? 1️⃣8️⃣ unshift() : Agrega uno o más elementos al inicio del array, y devuelve la nueva longitud del array.

// * const result = 

// ? 1️⃣9️⃣ slice() : Devuelve una copia de una parte del array dentro de un nuevo array empezando por inicio hasta fin (fin no incluido). El array original no se modificará.

// * const result = 

// ? 2️⃣0️⃣ reverse() : Invierte el orden de los elementos de un array. El primer elemento pasa a ser el último y el último pasa a ser el primero.

// * const result = 

// ? 2️⃣1️⃣ splice() : Cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos.

// * const result = 

// * 2️⃣2️⃣ lastIndexOf() : Busca un elemento en un array y devuelve su posición. Comienza buscando por el final del array. Retorna -1 si el elemento no se encontrara.

// * const result = 

// * 2️⃣3️⃣ flat() : Crea una nuevo array con todos los elementos de sub-array concatenados recursivamente hasta la profundidad especificada.

// * const result = 

// ? 2️⃣4️⃣ isArray() : Determina si el valor pasado es un Array.

// * const result = 

// * 2️⃣5️⃣ from() : Crea una nueva instancia de Array a partir de un objeto iterable.

// * const result = 

// ==========================
// todo: ejercicio 27
// ==========================

function ejercicio27() {
    let idImdb = document.getElementById("idImdb").value;
    if (validarMDB(idImdb) === false) return;

    let titulo = document.getElementById("titulo").value;
    if (validaCadena(titulo, 100) === false) return;
        
    let direct = document.getElementById("direct").value;
    if (validaCadena(direct, 50) === false) return;
    
    let anioes = document.getElementById("anioes").value;
    if (validaAnios(anioes) === false) return;

    let paises = document.getElementById("paises").value;
    if (validaCadena(paises, 100) === false) return;
        
    let genero = document.getElementById("genero").value;
    let califi = document.getElementById("califi").value;
    let fictec = document.getElementById("fictec").value;

    class Pelicula {
        constructor(id, titu, dire, anio, pais, gero, cali) {
            this.id = id;
            this.titu = titu;
            this.dire = dire;
            this.anio = anio;
            this.pais = pais;
            this.gero = gero;
            this.cali = cali;
        };


    };

    // tt0075148
    // tt0019130
 
    const peli = new Pelicula({
        id: idImdb,
        titulo: titulo, 
        direct: direct, 
        anioes: anioes, 
        paises: paises,  
        genero: genero,
        califi: califi, 
    });


    let ul27 = ``;
    ul27 += `<li> 🌟 id IMDB.....: ${idImdb} </li>`;
    ul27 += `<li> Titulo:</li>`;
    ul27 += `<li> 💫 ..... ${titulo} </li>`;
    ul27 += `<li> Director:</li>`;
    ul27 += `<li> 💫 ..... ${direct} </li>`;
    ul27 += `<li> Año estreno:</li>`;
    ul27 += `<li> 💫 ..... ${anioes} </li>`;
    ul27 += `<li> Pais/es:</li>`;
    ul27 += `<li> 💫 ..... ${paises} </li>`;
    ul27 += `<li> Genero:</li>`;
    ul27 += `<li> 💫 ..... ${genero} </li>`;
    ul27 += `<li> Calificación:</li>`;
    ul27 += `<li> 💫 ..... ${califi} </li>`;
    //ul27 += `<li> 💥 fictec:${fictec}  </li>`;

    document.getElementById("muestraEj27").innerHTML = ul27;
}


/* http://www.imdb.com/
Programa una clase llamada pelicula
    la clase recibe un objeto al momento de instanciarse con los siguientes datos:
    ?   id de la pelicularla en V DB, titulo, director, año de extreno, pais origen, genero y calificacion IMDB.
        - Todos los datos del objeto son obligaorios
        - Valida que el id IMDB tenga 9 caracteres (los 2 primeros letras y los 7 restantes numeros)
        - Valida que el titulo no rebase los 100 caracteres
        - Valida que el director no rebase los 50 caracteres
        - Valida que el año sea de 4 digitos
        - Valida que el pais o paices sea en forma de arreglo
        - Valida que el genero sea en forma de arreglo
        - Valida que el genero sea dentro de los generos aceptados.
        - Crea un metodo estatico que devuelva los generos aceptados
        - Valida que la calificacion sea un numero entre 0 y 10 pudiendo ser decimal de una posicion
        - Crea un metodo que devuelva toda la ficha tecnica de la pelicula
        - A partir de un arreglo con la informacion de 3 peliculas genera 3 instancias de la clase de forma automatizada e imprime la ficha tecnica de cada pelicula

    * Generos aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary, Drama, Family, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Talk-Show, Thriller, War, Western. 
*/

// ********************************************************
// ! valida datos
// ********************************************************
function validaImporte(numero) {
    return (!/^([\.0-9])*$/.test(numero)) 
        ? false
        : true;
}

function validaAnios(anioes) {
    if (!/^[0-9]$/ || anioes.length !== 4) {
        console.warn(`La cadena ${anioes} no es valida"`);
        return false; 
    }
    let fechaHoy = new Date();
    const anoActual = parseInt(fechaHoy.getFullYear()); 

    if (anioes > anoActual || anioes < 1800) {
        console.warn(`${anioes} no es un año valido"`);
        return false;
    }
    return true;
}

function validarMDB(id) {
    if (!(/^([a-z]){2}([0-9]){7}$/.test(id))) {
        console.error(`IMDB id "${id}" no es valido, debe tener 9 caracteres, los 2 primeros letras minusculas, los 7 restantes números`);
        return false;
    };
    return true;
};

// todo: Las expresiones regulares son patrones que se utilizan para hacer coincidir combinaciones de caracteres en cadenas. En JavaScript, las expresiones regulares también son objetos. Estos patrones se utilizan con los métodos exec() y test() de RegExp, y con match(), matchAll(), replace(), replaceAll() (en-US), search() y split() métodos de String. Este capítulo describe las expresiones regulares de JavaScript. 
/*
Expresión regular	        Descripción
            \s	            Espacio en blanco
            \S	            Cualquier carácter, excepto espacio en blanco
        [a-zA-Z0-9]+	    Uno o más caracteres alfanuméricos
([a-z] {2,} [0-9] {3,5})	Dos o más letras seguidas por tres a cinco números
*/
function validaNombre(nombre = "") {
    let expReg = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/.test(nombre);
    return (expReg) 
    ? 'Es un nombre valido'
    : 'No es un nombre valido'
}

function validaCadena(cadena = "", valor = 3) {
    if (cadena.length < 3 || cadena.length > valor) {
        console.warn(`La cadena ${cadena} esta vacia o su tamaño es mayor a "${valor}"`);
        return false; 
    }
    return true;
}

function validaEmail(correo) {
    //? otro: let expReg = /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z](2,15)/.test(correo);
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,10})+$/.test(correo)) 
        return 'Es un email valido';
    return 'No es un email valido';
}

function validaCadenaDeNumeros(texto) {
    //alert('texto');
    var RegExPattern = "[1-9]";
    
    if (texto.match(RegExPattern)) {
        return false;
    } else {
        return true;
    }
}

function validaComa(numero) {
    var posi = numero.indexOf(','); // posicion = 3

    if (posi > 0) return false;
    return true;
}

function numeroFormat(numero, decimales, punto_dec, separa_miles) {
    numero = (numero + '').replace(/[^0-9+\-Ee.]/g, '');
    let n = !isFinite(+numero) 
        ? 0 
        : +numero;

    let prec = !isFinite(+decimales) 
        ? 0 
        : Math.abs(decimales);
    
    let sep = (typeof separa_miles === 'undefined') 
        ? ',' 
        : separa_miles;
    
    let dec = (typeof punto_dec === 'undefined') 
        ? '.' 
        : punto_dec;
    
    let s = '';

    let toFixedFix = function(n, prec) {
        var k = Math.pow(10, prec);
        return '' + (Math.round(n * k) / k).toFixed(prec);
    };

    // Fix for IE parseFloat(0.55).toFixed(0) = 0;
    s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');

    if (s[0].length > 3) {
        s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
    }

    if ((s[1] || '').length < prec) {
        s[1] = s[1] || '';
        s[1] += new Array(prec - s[1].length + 1)
            .join('0');
    }
    return s.join(dec);
}

