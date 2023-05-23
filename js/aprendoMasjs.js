/* 🔵 ======================================== 🔷
import Lang from '../../varios/ej-m2/m2-30b_FT/FT-M2-master/10-React-Forms/demo/src/components/Ejemplo';
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
console.log('**** Elemento del documento ****');
console.log(document);
console.log(document.head);
console.log(document.body);
// la etiqueta html seria asi:
console.log(document.documentElement);
console.log(document.doctype);
console.log(document.characterSet);
console.log(document.title);
console.log(document.links);
console.log(document.images);
console.log(document.styleSheets);
console.log(document.scripts);
// setTimeout(() => {
//     console.log(document.getSelection().toString());
// },3000);
document.write("<h3>Hola Raul desde el DOM</h3>");
console.clear();
console.log('**** Fin Elementos del dom ****');

// ! las variables del dom es bueno que empiecen con $ y se declaren como constantes.
const $linkDOM = document.querySelector(".link-dom");
// ========================

function inicio() {
    //alert("inicio");
    //document.getElementById("form_busqueda").submit();
    location.href="http://127.0.0.1:5500/curso_jonmircha/indexDom.html";
}
function indice() {
    location.href="http://127.0.0.1:5500/curso_jonmircha/indexMasJs.html";
}

// 🔳 🔲 🟥 🟧 🟨 🟩 🟦 🟪 ⬛ ⬜ 🟫 🔶 🔷 ✅ ❎     
// ========================
// todo: ejercicio 44
// ========================

let temporizador;

function ejercicio44() {
    // setTimeout(() => {

    // },timeout)   // tiempo expresado en milisegundo
/*
    setTimeout(() => {
        console.log("Ejecutando un setTimeout, esto se ejecuta una sola vez");
    },1000);

    console.warn("================================");
    setInterval(() => {
        console.log("Ejecutando un setInterval, esto se ejecuta indefinidamente cada cierto intervalo de tiempo");
    },1000);
    */

/*
    ? para cancelar el setTimeout hay que ponerlo dentro de una variable
    let temporizador = setTimeout(() => {
        console.log(`Es la hora: ${new Date().toLocaleTimeString()}`);
    },1000);

    clearTimeout(temporizador);
    console.warn("================================");
*/

    temporizador = setInterval(() => {
        document.getElementById("muestraEj44").innerHTML = `Es la hora: ${new Date().toLocaleTimeString()}`;
    },1000);

}

function ej44_stop() {
    clearInterval(temporizador);
    document.getElementById("muestraEj44").innerHTML = `fin del reloj`;
}

// ========================
// todo: ejercicio 45
// ========================
/* // ! Importantes conocer algunos conceptos de js
*  Procesamiento Single thread y Multi thread.
*  Operaciones  concurrentes y paralelas .
*  Operaciones  Bloquentes  y no bloquentes.
*  Operaciones  Sincronas  y Asincronas.
*  Operaciones  de C.P.U. y de I/O.
*/
/*
event loop   -- bucle de eventos
triger   --  desencadenar - disparador

*/
function ejercicio45() {
    alert("ej 45");
    // codigo Sincrono Bloqueante
    (() => {
        console.log("codigo sincrono");
        console.log("inicio");

        function dos() {
            console.log("dos");
        }

        function uno() {
            console.log("uno");
            dos()
            console.log("tres");
        };

        uno();
        console.log("fin");
    })();
    console.warn("================================");
    // codigo Asincrono No Bloqueante
    (() => {
        console.log("codigo Asincrono");
        console.log("inicio");

        function dos() {
            setTimeout(() => {
                console.log("dos");
            },1000);
        }

        function uno() {
            setTimeout(() => {
                console.log("uno");
            },0);
            dos()
            console.log("tres");
        }

        uno();
        console.log("fin");

    })();

}

// ========================
// todo: ejercicio 46
// ========================
function ejercicio46() {
    let valor =   parseInt(document.getElementById("dato46").value);
    console.log(valor);

    //let resultado = 25;
    function cuadradoCallbak(value,callback) {
       setTimeout(() => {
        callback(value, value * value);
       },0 | Math.random() * 100); 
    };

    let ul46 = ``;
    ul46 += `<li>  what is "callback hell" </li>`;
    ul46 += `<li>  cuadrado de un numero </li>`;

    //what is "callback hell"    
    cuadradoCallbak(valor,(value,result) => {
        console.log("inicia callbak: ");
        console.log(`Callback: ${value} ${result}`);
        ul46 += `<li> valor: ${value} resultado = ${result} </li>`;
        cuadradoCallbak(1,(value,result) => {
            console.log(`Callback: ${value} ${result}`);
            ul46 += `<li> valor: ${value} resultado = ${result} </li>`;
            cuadradoCallbak(2,(value,result) => {
                console.log(`Callback: ${value} ${result}`);
                ul46 += `<li> valor: ${value} resultado = ${result} </li>`;
                cuadradoCallbak(5,(value,result) => {
                    console.log(`Callback: ${value} ${result}`);
                    ul46 += `<li> valor: ${value} resultado = ${result} </li>`;
                    document.getElementById("muestraEj46").innerHTML = ul46;
                });
            });
        });
    });

    document.getElementById("muestraEj46").innerHTML = `resultado:`;
    // ${resultado}`;
}

// ========================
// todo: ejercicio 47
// ========================
function ejercicio47() {
    let valor = parseInt(document.getElementById("dato47").value);
    console.log(valor);

    function cuadradoPromise(value) {
        if (typeof value !== "number" || isNaN(value)) { 
            return Promise.reject("El valor ingresado no es un numero")
        };

        return new Promise(function(resolve, reject) {
            setTimeout(() => {
                resolve({
                    value, 
                    result: value * value
                }) 
            },0 | Math.random() * 100); 
        });
    };

    let ul47 = ``;
    ul47 += `<li>  what is "Promise" </li>`;
    ul47 += `<li>  cuadrado de un numero </li>`;

    //what is "Promesa"    
    cuadradoPromise(valor)
        .then((obj) => {
            //console.log(obj);
            console.log("Inicio Promise");
            ul47 += `<li> valor: ${obj["value"]} resultado = ${obj.result} </li>`;
            return cuadradoPromise(valor+1);
        })
        .then((obj) => {
            ul47 += `<li> valor: ${obj["value"]} resultado = ${obj.result} </li>`;
            return cuadradoPromise(valor+2);
        })
        .then((obj) => {
            ul47 += `<li> valor: ${obj["value"]} resultado = ${obj.result} </li>`;
            return cuadradoPromise(valor+3);
        })
        .then((obj) => {
            ul47 += `<li> valor: ${obj["value"]} resultado = ${obj.result} </li>`;
            return cuadradoPromise(valor+4);
        })
        .then((obj) => {
            ul47 += `<li> valor: ${obj["value"]} resultado = ${obj.result} </li>`;
            return cuadradoPromise(valor+5);
        })
        .then((obj) => {
            ul47 += `<li> valor: ${obj["value"]} resultado = ${obj.result} </li>`;
            document.getElementById("muestraEj47").innerHTML = ul47;
            console.log("Final Promise");
        })
        .catch(err => {
            console.error(err);
            ul47 += `<li> ${err} </li>`;
            document.getElementById("muestraEj47").innerHTML = ul47;
            console.log("Final Promise");
        });
        
}

// ========================
// todo: ejercicio 48
// ========================
function ejercicio48() {
    let valor = parseInt(document.getElementById("dato48").value);
    console.log(valor);

    function cuadradoPromise(value) {
        if (typeof value !== "number" || isNaN(value)) { 
            return Promise.reject("El valor ingresado no es un numero")
        };

        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({
                    value, 
                    result: value * value
                }) 
            },0 | Math.random() * 100); 
        });
    };

    let ul48 = ``;
    ul48 += `<li> Async - Await </li>`;
    ul48 += `<li>  cuadrado de un numero </li>`;

    async function funcionAsincronaDeclarada() {
        try {
            console.log('Inicio Async Function');
            
            let obj = await cuadradoPromise(valor);
            console.log(`Async Function: ${obj.value}, ${obj.result} `);
            ul48 += `<li> Async Function: ${obj.value}, ${obj.result} </li>`;

            obj = await cuadradoPromise(valor + 1);
            ul48 += `<li> Async Function: ${obj.value}, ${obj.result} </li>`;
            
            obj = await cuadradoPromise(valor + 2);
            ul48 += `<li> Async Function: ${obj.value}, ${obj.result} </li>`;

            obj = await cuadradoPromise(valor + 3);
            ul48 += `<li> Async Function: ${obj.value}, ${obj.result} </li>`;

            obj = await cuadradoPromise(valor + 4);
            ul48 += `<li> Async Function: ${obj.value}, ${obj.result} </li>`;

            obj = await cuadradoPromise(valor + 5);
            ul48 += `<li> Async Function: ${obj.value}, ${obj.result} </li>`;

            document.getElementById("muestraEj48").innerHTML = ul48;
            console.log('Fin de  Async Function');
        } catch (e) {
            document.getElementById("muestraEj48b").innerHTML = e;
            console.error(e);
        }
    }

    
    
    let ul48b = ``;
    // ul48b += `<li> Async - Await </li>`;
    // ul48b += `<li>  functionAsincronaExpresada </li>`;
    
    const functionAsincronaExpresada = async () => {
        try {
            console.log('Inicio Async Function');
            
            let obj = await cuadradoPromise(valor);
            console.log(`Async Function: ${obj.value}, ${obj.result} `);
            ul48 += `<li> Async Function Ex: ${obj.value}, ${obj.result} </li>`;
            
            obj = await cuadradoPromise(valor + 1);
            ul48 += `<li> Async Function ex: ${obj.value}, ${obj.result} </li>`;
            
            obj = await cuadradoPromise(valor + 2);
            ul48 += `<li> Async Function ex: ${obj.value}, ${obj.result} </li>`;
            
            obj = await cuadradoPromise(valor + 3);
            ul48 += `<li> Async Function ex: ${obj.value}, ${obj.result} </li>`;
            
            obj = await cuadradoPromise(valor + 4);
            ul48 += `<li> Async Function ex: ${obj.value}, ${obj.result} </li>`;
            
            obj = await cuadradoPromise(A);
            ul48 += `<li> Async Function ex: ${obj.value}, ${obj.result} </li>`;
            
            document.getElementById("muestraEj48").innerHTML = ul48;
            console.log('Fin de  Async Function');
        } catch (e) {
            document.getElementById("muestraEj48b").innerHTML = e;
            console.error(e);
        }
    }
    
    funcionAsincronaDeclarada();
    functionAsincronaExpresada();

}

// ========================
// todo: ejercicio 49
// ========================
function ejercicio49() {
    //alert("ej49");
    let valor = parseInt(document.getElementById("dato49").value);
    console.log(valor);

    let id1 = "hola";
    let id2 = "hola";

    let id3 = Symbol("hola");
    let id4 = Symbol("hola");

    let id5 = Symbol("id1");
    let id6 = Symbol("id2");

    console.log('id1=id2',id1 === id2, id1,id2);
    console.log('id3=id4',id3 === id4, id3, id4);
    console.log('id5=id6',id5 === id6,id5,id6);
    console.log('type id1,id2', typeof id1, typeof id2);

    const NOMBRE = Symbol("nombre");
    const SALUDAR = Symbol("saludar");

    const persona = {
        [NOMBRE]: "Raul",
        edad: 35
    }

    console.log('persona', persona);
    
    persona.NOMBRE = "Raul Villalba";
    console.log('persona', persona);
    console.log('persona.NOMBRE', persona.NOMBRE);
    console.log('persona[NOMBRE]', persona[NOMBRE]);
    
    console.warn('==========================================');
    persona[SALUDAR] = function () {
        console.log('persona.SALUDAR', 'Hola');
    }
    console.log('persona', persona);
    console.warn('==========================================');
    
    persona[SALUDAR]();
    console.warn('==========================================');
    for (const propiedad in persona) {
        console.log('propiedad: ', propiedad);
        console.log('persona[propiedad]', persona[propiedad]);
    }
    
    console.log('Object', Object.getOwnPropertySymbols(persona));

}

// ========================
// todo: ejercicio 50
// ========================
function ejercicio50() {
    /*
    let duplicado = {
        original: arr,
        sinDuplicar: arr.filter((ele, ind, self) => self.indexOf(ele) === ind),
        
        ? noDuplicado: [... new Set(arr)],
    };
    */
    const set = new Set([1,2,3,3,4,5,true,false,false,{},{},"hola","HOLa"]);
    console.warn("set:",set);
    console.log("set.size:",set.size);
    
    const set2 = new Set();
    set2.add(1);
    set2.add(2);
    set2.add(2);
    set2.add(3);
    set2.add(true);
    set2.add(false);
    set2.add(true);
    set2.add("Hola");
    set2.add({});
    console.warn("set:",set2);
    console.log("set.size:",set2.size);

    for (const iterator of set2) {
        console.warn("set.iterator:",iterator);
    };

    set.forEach(element => {
        console.log("element:",element);
    });

    // un set parece un array pero para usarlo como array hay que convertirlo con from array El set es la coleccion de datos unico.
    let arr = Array.from(set)
    console.warn("Array.from:", arr);
    console.log("Array.from:", arr[1]);

    console.warn("set.has: hola ", set.has("hola"));
    console.log("set.has: chau ", set.has("chau"));

    
    console.warn("set:",set2);
    set2.clear();
    console.log("set:",set2);
}

// ========================
// todo: ejercicio 51
// ========================
function ejercicio51() {
    let mapa = new Map();
    // agregar datos en un mapa
    mapa.set("nombre", "Raul");
    mapa.set("apellido", "Villalba");
    mapa.set("edad", 69);
    
    console.warn(mapa);
    console.log('size:',mapa.size);
    console.warn('has-nombre:',mapa.has("nombre"));
    console.log('has-correo:',mapa.has("correo"));
    
    console.warn('get(nombre):',mapa.get("nombre"));
    mapa.set("nombre", "Raul Orlando");
    console.log('get(nombre):',mapa.get("nombre"));
    
    //recorrer un mapa
    for (const iterator of mapa) {
        console.log('recorrer:', iterator);
    }

    for (const [key,value] of mapa) {
        console.log(`llave: ${key}, valor: ${value}`);
    }
    
    //borrar de mapa
    mapa.delete("apellido");
    console.warn(mapa);
    
    const mapa2 = new Map([
        ["nombre", "Gino"],
        ["edad", 10],
        ["cumpleanio", "05/04"],
        ["club", "Talleres"]
    ]);
    
    const llaveMapa2 = [...mapa2.keys()];
    const valorMapa2 = [...mapa2.values()];
    
    console.log('mapa2:', mapa2);
    console.warn('Llave:',llaveMapa2);   
    console.log('Llave:',llaveMapa2);   
}

// ========================
// todo: ejercicio 52
// ========================
function ejercicio52() {
    // ? WeakSets & WeakMaps (set debiles y mapas debiles)
    // no podemos iterar, y eliminar solo lo podemos hacer de a uno

    const ws = new WeakSet();

    let valor1 = {"valor1": 1};
    let valor2 = {"valor2": 2};
    let valor3 = {"valor3": 3};
    
    ws.add(valor1);
    ws.add(valor2);
    ws.add(valor3);
    console.log(ws);
    console.warn(ws.has(valor1));
    console.log(ws.has(valor3));

    console.warn("================================================");
    console.log("WeakMaps");
/* // ! ASI NO 
    const wm = new WeakMap([
        ["nombre", "yack"], ["edad", 7], ["animal", "perro"], [null, "nulo"]
    ]); */

    const wm = new WeakMap();
    let llave1 = {};
    let llave2 = {};
    let llave3 = {};

    wm.set(llave1,1);
    wm.set(llave2,2);
    console.warn(wm);
    wm.set(llave3,3);
    
    console.log(wm.get(llave1));
    console.warn(wm.get(llave2));
    console.log(wm.get(llave3));

}

// ========================
// todo: ejercicio 53
// ========================
function ejercicio53() {
    // 53.Iterables & Iterators
    const iterable = [1,2,3,3,2,4,5,7,7,8];
    const iterabl2 = "Hola mundo";
    const iterabl3 = new Map([["nombre","Raul"], ["edad",69]]);

    //accedemos al itereador de iterable
    const iterador = iterable[Symbol.iterator]();
    const iterado2 = iterabl2[Symbol.iterator]();

    console.log("ite:",iterable);
    console.warn("it:",iterador);
    console.log("i2:",iterado2);
    console.warn("i3:",iterabl3);

    // console.warn(iterador.next());
    // console.log(iterador.next());
    // console.warn(iterador.next());
    // console.log(iterador.next());
    // console.warn(iterador.next());
    // console.log(iterador.next());
    
    // ? value: 5, done: false}
    // ? value: undefined, done: true

    // ? otra forma de hacer estos next
    let next = iterador.next();

    while (next.done === false) {
        // * otra forma de hacer estos (!next.done)
        console.log("value:",next.value);
        next = iterador.next();
    }

}

// ========================
// todo: ejercicio 54
// ========================
function ejercicio54() {
    //  54.Generators 🔷

    function * iterable() {
        // yield es como un return
        yield "hola";
        console.warn("Hola consola");
        yield "hola2";
        console.warn("seguimos con mas instrucciones de nuestro codigo");

        yield "hola3";
        yield "hola4";
    
    }

    let iterador = iterable();
    console.log(iterador.next());
    console.log(iterador.next());
    console.log(iterador.next());
    console.warn(iterador.next());
    console.log(iterador.next());

    let arr =[...iterable()];
    console.warn(arr);

    // <<<<<<<<<<<<<<<<<<<<<<<<<<<
    function cuadrado(valor) {
        setTimeout(() => {
            // console.log(`${valor}, resultado: ${valor * valor}`);
            return console.log({valor, resultados: valor * valor});
        }, Math.random() * 1000);

        // return {
        //     valor, resultado: valor * valor
        // }
    }
     
    console.log("********************************");

    function * generador() {
        console.warn("inicia Generador");
        yield cuadrado(0);
        yield cuadrado(1);
        yield cuadrado(2);
        yield cuadrado(3);
        yield cuadrado(4);
        yield cuadrado(5);

        console.warn("finaliza Generador");
    }

    let gen = generador();
    for (const y of gen) {
        console.log(y);
    }
}

// ========================
// todo: ejercicio 55
// ========================
function ejercicio55() {
    // crea un objeto basado en uno obj literal inicial
    const persona = {
        nombre: "",
        apellido: "",
        edad: 0 
    }

    const manejador = {
        set(obj, prop, valor){
            if (Object.keys(obj).indexOf(prop) === -1) {
                return console.error(`La propiedad ${prop} no esiste en el objeto persona`);
            }

            if ((prop === "nombre" || prop === "apellido") && !(/^[a-zA-ZÑñáéíóúüÜ\s]+$/g.test(valor))) {
                return console.error(`La propiedad ${prop} solo acepta letras y espacios en blanco`);
            }
            obj[prop] = valor;
        }
    }

    const raul = new Proxy(persona, manejador);
    raul.nombre = 'Raúl';
    raul.apellido = 'Villalba';
    raul.edad = 69;
    raul.twitter = '@vipescri';
    console.log(raul);
}

// ========================
// todo: ejercicio 56  
// ! textos.md  
//? Los archivos en Markdown se guardan con la extensión . md y se pueden abrir en un editor de texto. Se utilizan para escribir documentación también en texto sin formato, por lo que pueden convertirse al formato HTML.
// ========================
function ejercicio56() {
    // ? 56.Propiedades Dinámicas de los Objetos 🔷
    let aleatorio = Math.round(Math.random() * 100 + 5);
    const objUsuario = {
        propiedad: "valor",        
        [`ìd_${aleatorio}`]:"valor Aleatorio"
    };
    console.log('objUsu:',objUsuario);
    
    const usuarios = ["Raul", "Teresa", "Federico", "Mauricio", "Francisco"];
    
    usuarios.forEach((usuario, index) => objUsuario[`id_${index}`] = usuario);
    
    console.warn('objUsu2:',objUsuario);

}

// ========================
// todo: ejercicio 57
// ========================
function ejercicio57() {
    // 🔶 57.this 🔶
    console.log('this:',this);
    console.warn('win:',window);
    console.log('this = win:',this === window);

    this.nombre = "Global Context";
    console.warn('this.nombre =',this.nombre);

    function imprimir(){
        console.log('imprimir this.nombre =',this.nombre);
    }

    imprimir();

    const obj = {
        nombre: "Context Obj",
        imprimir: function () {
            console.warn("Context Obj:", this.nombre);
        }
    }

    obj.imprimir();

    const obj2 = {
        nombre: "Context Objeto 2",
        imprimir
    }

    obj2.imprimir();

    const obj3 = {
        nombre: "Context Obj 3",
        imprimir: () => {
            console.warn("Context Obj3:", this.nombre);
        }
    }

    obj3.imprimir();

    // clouse 
    function Persona(nombre) {
        this.nombre = nombre;
    
        //return console.log("persona1:",nombre);

        // return function () {
        //     console.log("persona:",this.nombre);
        // }
        
        return () => console.log(this.nombre);
    }

    let raul = new Persona("Raul");

    raul();
}

// ========================
// todo: ejercicio 58
// ? 58.call,apply, bind 🔷
// ========================
function ejercicio58() {
    console.log(this);
    this.lugar = "Contexto Global";

    function saludar(saludo, aQuien) {
        console.warn(` ${saludo} ${aQuien} desde el ${this.lugar}`);
    }

    saludar("bay","xxx");

    const obj = {
        lugar: "Contexto Objeto",
    }

    saludar.call(obj,"Hello","Raul");
    saludar.call(null,"Hello","Raul");

    saludar.apply(obj,["Hola","Tere"]);
    saludar.apply(this,["Hola","Tere"]);

    const persona = {
        nombre: "Gino",
        saludar: function () {
            console.log(`te saludo ${this.nombre}`)
        }
    }

    persona.saludar();

    const otraPersona = {
        saludar: persona.saludar.bind(persona)
    }

    otraPersona.saludar();

    // =============================
    // ? otro ejercicio como usar .call, apply, bind 🔷
    const business = {
        name: 'Busines XX'
    };

    const usuario  = {
        name: 'Bonifacio',
    };

    function showInfo(like, friends) {
        if (!this.name) {
            return `anonimo tiene ${like} likes y ${friends} amigos`;
        }
        return `${this.name} tiene ${like} likes y ${friends} amigos`;
    }

    // diferncia entre 🔷 call y apply 🔷
    console.error(showInfo(10,5));   //no muestra porque el this no esta direccionado
    console.warn(showInfo.call(usuario,10,5));
    console.log(showInfo.apply(business,[10,5]));

    // bind regresa una funcion despues de haber asociado el objeto
    const newFunction = showInfo.bind(business);

    console.warn(newFunction(10,15));
    // ? este ultimo metodo (bind) se usa en React & Redux


}

// ========================
// todo: ejercicio 59 🔶 59.JSON 🔶
// ========================
function ejercicio59() {
    // antes de Json existia el xml que es un lenguaje de marcado
    const json = {
        cadena: "Raul",
        numero: 69,
        booleano: true,
        arreglo: [
            "correr",
            "programar",
            "arreglar la casa"
        ],
        objeto: {
            twitter: "@vipescri",
            email: "vipescri@gmail.com"
        },
        nulo: null
    }
    
    console.warn(json)
    console.log(JSON);
    console.warn(JSON.parse("{}"));
    console.log(JSON.parse("[1,2,3]"));
    console.log(JSON.parse("19"));
    //console.log(JSON.parse("'Hola mundo'"));

    // convierte los objetos a cadena de textos
    console.warn(JSON.stringify(true));

}

// ========================
// todo: ejercicio 60
// ? 🔷 60.WEB APIs 🔷
// ========================
function ejercicio60() {
    console.log(window);
    console.warn(document);

    let texto2 = "Hola querida Tere estoy preparando la pelicula para que veas con Raul";

    let texto = "Tere ya esta lista la pelicula, apaga la luz y sentate al lado de Raul";


    //let texto = "Hola Tita hoy te vi cuando fuite a la sala de computadora";

    const hablar = (texto) => speechSynthesis.speak(new SpeechSynthesisUtterance(texto));

    console.log("finalizing");

    hablar(texto);
}

//🔘 ⭕ 🔴 🟠 🟡 🟢 🔵 🟣 ⚫ ⚪ 🟤 🌎 🌐 🛑 💧
