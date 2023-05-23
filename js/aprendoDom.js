/* 🔵 ======================================== 🔷
# 🔵  web: industriasvipe.com  🌐 vipescri.com  🔷
# 🔵  Empresa: Industrias de Software Vipescri  🔷
# 🔵  AUTORES: VILLALBA Raul Orlando y familia  🔷
#  🔵 ======================================== 🔷 */
// 🔳 🔲 🟥 🟧 🟨 🟩 🟦 🟪 ⬛ ⬜ 🟫 🔶 🔷 ✅ ❎     
// ======================== vanilla js =================
/*
let hola = "Hello! Raul";
console.log(hola);
document.getElementById("hola").innerHTML = hola; 
import Lang from '../../varios/ej-m2/m2-30b_FT/FT-M2-master/10-React-Forms/demo/src/components/Ejemplo';
*/

// ========================
// todo: ejercicio 61
// ========================

function ejercicio61() {
    var cursor;
    console.log('**** Elemento del documento ****');
    console.log(document);
    console.log(document.head);
    console.log(document.body);
    // la etiqueta html seria asi: documentElement
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
    //document.write("<h3>Hola Raul desde el DOM</h3>");
    //console.clear();
    console.log('**** Fin Elementos del dom ****');
    
}
const $linkDOM = document.querySelector(".link-dom");
// ========================

// ! las variables del dom es bueno que empiecen con $ y se declaren como constantes.
function inicioDom() {
    //alert("inicio");
    //document.getElementById("form_busqueda").submit();
    location.href="http://127.0.0.1:5500/curso_jonmircha/indexDom.html";
}

function indice() {
    location.href="http://127.0.0.1:5500/curso_jonmircha/indexMasJs.html";
}

// ========================
// todo: ejercicio 62
// ========================
function ejercicio62() {
    // estos tres han sido reeplazados por
    let cadena1 = document.getElementsByTagName("li");
    let cadena2 = document.getElementsByClassName("card"); 
    let cadena3 = document.getElementsByName("nombre");
    console.log("cadena1:", cadena1);
    console.warn("cadena2:", cadena2);
    console.info("cadena3:", cadena3);

    //! el querySelector es mas lento que el getElementById
    let cadena4 = document.querySelector("#menu");
    let cadena41 = document.querySelectorAll("#menu");
    console.warn("cadena4:", cadena4);
    console.log("cadena4:", cadena41);

    // ? este se usa mucho getElementById
    let cadena5 = document.getElementById("menu");
    console.warn("resultado: " + cadena5);
    
    let cadena6 = document.querySelector("a");
    console.info("cadena6:", cadena6);
    let cadena7 = document.querySelectorAll("a");
    console.warn("cadena7:", cadena7);
    
    let cadena8 = document.querySelectorAll("a").length;
    console.info("cadena8:", cadena8);
    
    document.querySelectorAll("a").forEach(el => console.log(el));
    // console.warn("cadena6c:", cadena6d);

    let cadena9 = document.querySelector(".card");
    console.warn("cadena9:", cadena9);

    let cadena0 = document.querySelectorAll(".card");
    console.error("cadena0:", cadena7);

    //? querySelector devuelven NodeList
    document.getElementById("muestraEj62").innerHTML = 'enviando datos desde js';
}

// ========================
// todo: ejercicio 63
// ? 63.DOM_Atributos y Data-Attributes 🔷
// ========================

function ejercicio63() {
    console.log("⚪ ",document.documentElement.lang);
    console.log("⚫ ",document.documentElement.getAttribute("lang"));
    console.error("--------------------------------");
    console.log("🟤 ",document.querySelector(".link-dom").href);
    console.warn("--------------------------------");
    console.log("🔵 ",document.querySelector(".link-dom").getAttribute("href"));
    console.error("--------------------------------");
    document.documentElement.lang = "mx";
    console.log("🟣 ",document.documentElement.lang);
    console.warn("--------------------------------");
    document.documentElement.setAttribute("lang","es");
    console.log("🟢 ",document.documentElement.getAttribute("lang"));
    console.error("--------------------------------");
    
    // ! las variables del dom es bueno que empiecen con $ y se declaren como constantes.
    //const $linkDOM = document.querySelector(".link-dom");

    $linkDOM.setAttribute("target", "_blank");
    $linkDOM.setAttribute("rel", "noopener");
    $linkDOM.setAttribute("href", "http://www.industriasvipe.com");
    console.log("🔴 ",$linkDOM.hasAttribute("target"));
    $linkDOM.removeAttribute("target");
    console.log("",$linkDOM.hasAttribute("target"));

    // ? Data-Attributes
    console.log("⭕ ",$linkDOM.getAttribute("data-description"));
    console.log("🟠 ",$linkDOM.dataset);
    console.log("🟡 ",$linkDOM.dataset.description);
    $linkDOM.setAttribute("data-description", "Modelo de Objeto del Documento");
    console.log("🔴",$linkDOM.getAttribute("data-description"));
    console.error("--------------------------------");
    
}

// ========================
// todo: ejercicio 64
// todo 🔶 64.DOM_Estilos y Variables CSS 🔶
// ========================

function ejercicio64() {
    //! variable declarada
    //const $linkDOM = document-querySelector('.link-dom');

    console.log("🟣 ",$linkDOM.style);

    console.warn("--------------------------------");
    console.log("⚪ ",$linkDOM.getAttribute("style"));
    console.warn("--------------------------------");
    console.log("🟤 ",$linkDOM.style.backgroundColor);
    // console.warn("--------------------------------");
    // console.log("🔵 ",$linkDOM.style.backgroundColor);
    console.error("--------------------------------");
    console.log("🌎 ",window.getComputedStyle($linkDOM));
    console.warn("--------------------------------");
    console.log("🟢",getComputedStyle($linkDOM).getPropertyValue("Color"));
    console.error("--------------------------------");
    $linkDOM.style.setProperty("text-decoration","none");
    $linkDOM.style.setProperty("display","block");
    $linkDOM.style.width="50%";
    $linkDOM.style.textAlign="center";
    $linkDOM.style.borderRadius=".5rem";
    $linkDOM.style.marginLeft="10%";

   // $linkDOM.style.backgroundColor = "transparent";
    $linkDOM.style.backgroundColor = "yellow";
    $linkDOM.style.color = "blue";
    console.error("--------------------------------");

    // Variables CSS - Custom Properties CSS
    const $html = document.documentElement,
        $body = document.body;

    let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color"),
        varYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color"); 

    console.log(varDarkColor,varYellowColor);    
    
    $body.style.backgroundColor = varDarkColor;
    $body.style.color = varYellowColor;
    
    $html.style.setProperty("--dark-color", "blue");
    
    varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color")
    
    //$body.style.backgroundColor = varDarkColor;  o
    $body.style.setProperty("backgroundColor", varDarkColor);
    console.warn("-xx-------------------------------");
}

// ========================
// todo: ejercicio 65
// ? 🔷 65.DOM_Clases CSS 🔷
// ========================

function ejercicio65() {
    const $card = document.querySelector('.card');
    console.log('card:',$card);
    //console.log('card-E:',$card.DOCUMENT_POSITION_CONTAINS);


    console.log('card-name:',$card.className);
    console.log('card-list:',$card.classList);
    console.log('card-list:',$card.classList.contains('rotate-45'));
    
    // ? agregar una clase add
    //$card.classList.add('rotate-45');
    // ? remove lo saca
    //$card.classList.remove('rotate-45');
    // ? toggled si no lo tiene lo agrega y si tiene lo saca
    $card.classList.toggle('rotate-45');
    console.log('card-list:',$card.classList.contains('rotate-45'));

    // ? reemplazar una clase
    $card.classList.replace('rotate-45','rotate-33');

    // ? se puede agregar mas de una clase por vez solo separarlas por coma
    $card.classList.add('opacity-80','sepia');
    // $card.classList.remove('opacity-80','sepia');
    // $card.classList.toggle('opacity-80','sepia');


    console.warn("-fin 65-------------------------------");
}

// ========================
// todo: ejercicio 66
// todo 🔶 66.DOM_Texto y HTML 🔶
// ========================

function ejercicio66() {
    const $whatlsDOM = document.getElementById("que-es");
    const $whatTeDOM = document.getElementById("con-te");
    const $whatInDOM = document.getElementById("innert");
    
    let texto = ` 
    <p>
        El modelo de Objetos del Documento(<b><i>DOM - Document Object Model</i></b>) ese un API para documentos HTML y XML.
    </p>
    <p>
        Este provee una represntacion extructural dle cocumento, permitiendo modificar su contenido y preesentacion visual mediante codigo JS.
    </p>
    <p>
        <mark>El DOM es parte de la especificacion de JavaScript, es una API para los navegadores. </mark>
    </p>`;

    $whatInDOM.innerText = texto;
    $whatlsDOM.innerHTML = texto;
    $whatTeDOM.textContent = texto;

    document.getElementById("muestraEj66").innerHTML = texto;

    
    
    console.warn("-fin 66-------------------------------");
}

// ========================
// todo: ejercicio 67
// ? 🔷 67.DOM_Traversing_ Recorriendo el DOM 🔷
// ========================

function ejercicio67() {
    const $cards = document.querySelector(".cards");
    const $figu = document.querySelector(".figu");
    console.log(`cards: ${$cards}`);
    console.warn(`children: ${$cards.children}`);
    console.log(`childre2: ${$cards.children[2]}`);
    console.warn(`parend: ${$cards.parentElement}`);
    console.log(`childre1: ${$cards.children[1]}`);

    $cards.children[2].classList.add('rotate-33');
    $figu.children[1].classList.add('rotate-45');
    
    console.warn("--------------------------------");
    console.log('first card:',$cards.firstChild);
    console.log('firstelem:',$cards.firstElementChild);
    $cards.firstElementChild.classList.add('rotate-45');
    $cards.lastElementChild.classList.add('rotate-45'); 

    console.warn("-fin 67-------------------------------");
}

// ========================
// todo: ejercicio 68
// todo 🔶 68.DOM_Creando Elementos y Fragmentos 🔶
// ========================

function ejercicio68() {
    // creando etiqueta de manera dinamica
    const $figure = document.createElement('figure'),
        $img = document.createElement('img'),
        $figcaption = document.createElement('figcaption'),
        $figcaptionText = document.createTextNode('rio'),
        $figuras = document.querySelector('.figuras');

    $img.setAttribute('src', "../img/fotos/ayuda2.JPG");
    $img.setAttribute('alt', "Naturaleza");
    $img.setAttribute('width', "200");
    $img.classList.add('margin-left-20');
    $figcaption.classList.add('margin-left-20');
    $img.classList.add('card');
    $figuras.classList.add('card');
    // $figure2.classList.add('card');

    $figcaption.classList.add('card');
    $figuras.classList.add('rotate-33');
    //$img.classList.add('rotate-33');

    // agregar en el arbol del DOM
    $figcaption.appendChild($figcaptionText);
    $figuras.appendChild($img);
    $figuras.appendChild($figcaption);
    $figuras.appendChild($figure);
    //$figuras.appendChild($figure2);

    //document.write("<h3>Estaciones del Año</h3>");
    const muTitu = "<h3>Estaciones del Año</h3>";
    const diasSemana = ["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"];
    const estaciones = ["Primavera","Verano","Otoño","Invierno"];
    const continentes = ["Africa","America","Asia","Europa","Oceania"];
    
    document.getElementById("muestraTitu").innerHTML = muTitu;
    
    // =================================
    let ul4 = `
    <li> Primavera </li>
    <li> Verano </li>
    <li> Otoño </li>
    <li> Invierno </li>
    `;
    
    document.getElementById("muestraEj68").innerHTML = ul4;
    // =================================fibonacci
    const $ol = document.getElementById("genera-ol");
    diasSemana.forEach((elem, indice) => {
        const $li = document.createElement('li');
        $li.innerHTML = `${indice} ⏩ ${elem}`;
        $ol.append($li);
    });
    
    // =================================jonmircha
    const $ul = document.createElement('ul'),
        $listado = document.querySelector('.muestraLista');

    //$ul.classList.add('.muestraLista');

    document.body.appendChild($ul);
    //$listado.appendChild($listado);
    continentes.forEach((elem) => {
        const $li = document.createElement('li');
        $li.textContent = elem;
        $ul.appendChild($li);
    });
    
    //document.getElementById("muestraEj68b").innerHTML = $ul;
    console.warn("-fin 68-------------------------------");
}

// ========================
// todo: ejercicio 69
// ?🔷 69.DOM_Templates HTML 🔷
// ========================

function ejercicio69() {
    const $tarjeta = document.querySelector('.tarjeta'),
        $template = document.getElementById('template-card').content,
        $fragment = document.createDocumentFragment(),
        cardContent = [
            {
                title: 'Arquitectura',
                img: "../img/fotos/100_1989.JPG",
            },
            {
                title: 'Auto',
                img: "../img/fotos/IMG_20150609_091844.jpg",
                
            },
            {
                title: 'Barco',
                img: "../img/fotos/100_2096.JPG",
            },
            {
                title: 'Paisaje',
                img: "../img/fotos/20150609_jesus-orlando.jpg",
            },
            {
                title: 'Compromiso',
                img: "../img/fotos/aNovio3.JPG",
            }
        ]

    cardContent.forEach(el => {
        $template.querySelector("img").setAttribute("src",el.img);
        $template.querySelector("img").setAttribute("alt",el.title);
        $template.querySelector("img").setAttribute("width",'200');
        $template.querySelector("figcaption").textContent = el.title;

        let $clone = document.importNode($template,true);
        $fragment.appendChild($clone);
    });

    $tarjeta.appendChild($fragment);
    console.warn("-fin 69-------------------------------");
}

// ========================
// todo: ejercicio 70
// todo 🔶 70.DOM_Modificando Elementos (Old Style) 🔶 
// ========================

function ejercicio70() {
    const $tarjeta = document.querySelector('.tarjeta'),
        $newCard = document.createElement('figure'),
        $newCard2 = document.createElement('figure'),
        $cloneCard = $tarjeta.cloneNode(true);

    $newCard.innerHTML = `
        <img src= "../img/fotos/2722334455.jpg" alt="Fotos" width="200" />
        <figcaption>Tere</figcaption>
    `;
    $newCard.classList.add('card');

    $newCard2.innerHTML = `
        <img src= "../img/fotos/10853611.jpg" alt="Fotos" width="200" />
        <figcaption>Raul</figcaption>
    `;
    $newCard2.classList.add('card');

    $tarjeta.insertBefore($newCard2,$tarjeta.firstElementChild);
    //$tarjeta.removeChild($newCard2,$tarjeta.lastElementChild);
    $tarjeta.replaceChild($newCard,$tarjeta.children[5]);

    document.body.appendChild($cloneCard);



    console.warn("-fin 70-------------------------------");
}

// ========================
// todo: ejercicio 71
// ?🔷 71.DOM_Modificando Elementos (Cool Style) 🔷 
// ========================
/* === InsertAdjacente
    .insertAdjacentElement(position, ele)
    .insertAdjacentHTML(position, html)
    .insertAdjacentText(position, text

    === Posiciones
    beforebegin(hermano anterior)
    afterend(hermano siguiente)
    
    afterbegin(primer hijo)
    beforeend(ultimo hijo)
*/

function ejercicio71() {
    const $tarjeta = document.querySelector('.tarjeta'),
        $newCard = document.createElement('figure'),
        $newCard2 = document.createElement('figure');

    $newCard.innerHTML = `
        <img src= "../img/fotos/2722334455.jpg" alt="Fotos" width="200" />
        <figcaption>Tere</figcaption>
    `;
    $newCard.classList.add('card');

    $newCard2.innerHTML = `
        <img src= "../img/fotos/10853611.jpg" alt="Fotos" width="200" />
        <figcaption>Raul</figcaption>
    `;
    $newCard2.classList.add('card');
    //hermanos
    $tarjeta.insertAdjacentElement("afterend", $newCard2);
    $tarjeta.insertAdjacentElement("beforebegin", $newCard);
    
    // =====================
    let $contenCard = `
        <img src= "../img/fotos/alegria2.JPG" alt="Fotos" width="200" />
        <figcaption></figcaption>
    `
    let $contenCard2 = `
        <img src= "../img/fotos/anovio4.JPG" alt="Fotos" width="200" />
        <figcaption></figcaption>
    `
    //hijo
    $newCard.insertAdjacentHTML("afterbegin", $contenCard);
    $newCard.querySelector("figcaption").insertAdjacentText("afterbegin","nuevo texto");

    $contenCard2.classList.add("card");
    //$tarjeta.prepend("beforend", $contenCard2);
    $tarjeta.insertAdjacentElement("beforend", $contenCard2);

}

// ========================
// todo: ejercicio 72
// todo 🔶 72.DOM_Manejadores de Eventos 🔶 
// ========================

function ejercicio72() {
    const $eventoSemantico = document.getElementById('eventoSem'),
        $eventoMultiple = document.getElementById('evenMultiple');
    $eventoSemantico.onclick = evento72;
    $eventoSemantico.onclick = function () {
        console.warn('Evento nuevo');
        alert('Evento nuevo');
    }

    $eventoMultiple.addEventListener("click", (e) => {
        alert('Evento ultiple');
        console.log('Evento ultiple');
        console.warn(e);
        console.warn(e.target);
        console.warn(e.type);
    });
}

function evento72() {
    alert('Ejercicio72');
    console.log(Event);
}
// ========================
// todo: ejercicio 73
// ?🔷 73.DOM_Eventos con Parámetros y Remover 
// ========================

function ejercicio73() {
    const $eventoMultiple = document.getElementById('eventoMultiple'),
        $eventoMRemover = document.getElementById('eventoMRemover');
    
    function saludar(nombre = "desconocid@") {
        alert(`Hello ${nombre}`);
        console.log(event);
    }

    $eventoMultiple.addEventListener("click",() => {
        saludar();
        saludar("Raul");
    });  

    const removerDobleClick = (e) => { 
        alert(`Removiendo el evento de tipo ${e.type}`);
        console.log(e);
        $eventoMRemover.removeEventListener('dblclick', removerDobleClick);
        $eventoMRemover.disabled = true;
    };
    
    $eventoMRemover.removeEventListener("dblclick",removerDobleClick);
}

// ========================
// todo: ejercicio 74
// todo 🔶 74.DOM_Flujo de Eventos(Burbuja y Captura) 🔶 
// ========================

function ejercicio74() {
    const $divsEventos = document.querySelectorAll('.eventos-flujo div');
    
    function flujoEventos(e) {
        console.log(`Hola flujoEventos ${this.className}, el clic lo origino ${e.target.className}`);
    }
    
    console.log($divsEventos);

    $divsEventos.forEach(function(div){
        //fase de burbuja
        //div.addEventListener('click', flujoEventos);
        div.addEventListener('click', flujoEventos,false);
        //fase de captura
        div.addEventListener('click', flujoEventos,true);

        div.addEventListener('click', flujoEventos, {
            capture: false,
            once: true,
        });
    })
}

// ========================
// todo: ejercicio 75
// ?🔷 75.DOM_stopPropagation & preventDefault 🔷 
// ========================

function ejercicio75() {
    const $divEventos = document.querySelectorAll('.eventos-flujos div'),
        $linkEventos = document.querySelector('.eventos-flujos a');
    
    function flujosEventos(e) {
        console.log(
            `Hola flujoEventos ${this.className}, el clic lo origino ${e.target.className}`
        );
        //e.stopPropagation();
    }
    
    console.warn($divEventos);

    $divEventos.forEach(function(div){
        //fase de burbuja
        div.addEventListener('click', flujosEventos,false);
        

    });

    $linkEventos.addEventListener("click", function(e) {
        alert("Hello Raul Villalba");
        e.preventDefault();
    })


}

// ========================
// todo: ejercicio 76
// todo 🔶 76.DOM_Delegación de Eventos 🔶 
// ========================

function ejercicio76() {
    const $eventosDivs = document.querySelectorAll('.evento-flujo div'),
        $eventosLink = document.querySelector('.evento-flujo a');
    
    function flujosEventos(e) {
        console.log(
            `Hola flujoEventos ${this.className}, el clic lo origino ${e.target.className}`);
        //? no necesita -- e.stopPropagation();
    }
    
    document.addEventListener("click", function(e) {
        console.warn("Click en ",e.target);

        if (e.target.matches(".evento-flujo div")) {
            flujosEventos(e)
        }

        if (e.target.matches(".evento-flujo a")) {
            alert("Hello Raul");
            e.preventDefault();
        }
    });

}

// ========================
// todo: ejercicio 77
// ?🔷 77.BOM_Propiedades y Eventos 🔷
// ========================

function ejercicio77() {
    window.addEventListener("resize", (e) => {
        console.clear();
        console.warn("******* Evento resize *******");
        console.log(window.innerWidth);
        console.warn(window.innerHeight);
        console.log(window.outerWidth);
        console.warn(window.outerHeight);
        // console.log("sx ",window.scrollX);
        // console.warn("sy:",window.scrollY);
        console.log(e);
    });

    window.addEventListener("scroll", e => {
        console.clear();
        console.warn("******* Evento scroll *******");
        console.log("sx ",window.scrollX);
        console.warn("sy:",window.scrollY);
        console.log(e);
    });

    window.addEventListener("load", (e) => {
        //console.clear();
        console.warn("******* Evento load *******");
        console.log("sx ",window.screenX);
        console.warn("sy:",window.screenY);
        console.log(e);
    });

    //este segun do es mas apropiado de usar que load
    window.addEventListener("DOMContentLoaded", (e) => {
        //console.clear();
        console.warn("******* Evento DOMContentLoad *******");
        console.log("sx ",window.screenX);
        console.warn("sy:",window.screenY);
        console.log(e);
    });

}

// ========================
// todo: ejercicio 78
// todo 🔶 78.BOM_Métodos 🔶
// ========================

function ejercicio78() {
    //! Browser Object Models - BOM
    //window.alert("Alerta");
    //let acepta = window.confirm("confirmacion");
    
    // let mensaje;
    // (acepta == true) ? mensaje = "Aceptado" : mensaje = "Rechazado";
    // alert("dice:",mensaje);

    // if (acepta) {
    //     alert("Acetado");
    // } else {
    //     alert("Rechazado");
    // }

    let $nombre = window.prompt("nombre","Raul");
    document.getElementById("muestraNombre").innerHTML = `My name es  ${$nombre}`;
    // ===================
    const $btnAbre = document.getElementById("abrir-ventana"),
        $btnCierra = document.getElementById("cerrar-ventana"),
        $btnImprime = document.getElementById("imprimir-ventana");

    let ventana;    
    $btnAbre.addEventListener("click", function(e) {
        //ventana = open("https://jonmircha.com");
        // !window.open(URL,nombre_de_la_ventana,forma_de_la_ventana) 
        ventana = window.open("constanciaJubilaRaul.pdf" , "Informe" , "width=620,height=600,fullscreen=yes,scrollbars=NO") 
        //parent.opener=top;
        //opener.close();
    });  

    $btnCierra.addEventListener("click", (e) => {
        // ? cierra la ventana que estoy
        // close();
        // ? para cerrar la ventana abierta
        ventana.close();
    });  

    $btnImprime.addEventListener("click", e => {   
        window.print();
    });  

}

// ========================
// todo: ejercicio 79
// ?🔷 79.BOM_Objetos_ URL, Historial y Navegador 🔷 
// ========================

function ejercicio79() {
    console.warn("******* Objeto URL (location) *******");
    console.log(location);
// !-------------------
    console.log('origin:',location.origin);
    //origin: http://127.0.0.1:5500
    console.log('',location.protocol);
    // http:
    console.log('host:',location.host);
    // host: 127.0.0.1:5500
    console.log('hostname:',location.hostname);
    // hostname: 127.0.0.1
    console.log('port:',location.port);
    // port: 5500
    console.log('href:',location.href);
    // href: http://127.0.0.1:5500/curso_jonmircha/indexDom.html#dom77
    console.log('hash:',location.hash);
    // hash: #dom77
    console.log('pathname:',location.pathname);
    // pathname: /curso_jonmircha/indexDom.html
    console.log('pathname:',location.search);

    console.warn("******* Objeto Historial (history) *******");
    console.log(history);
// !-------------------
    console.log('length:',history.length);
    console.log('length:',history.back(1));
    console.log('length:',history.forward(1));
    console.log('length:',history.go(-1));

    console.warn("******* Objeto Navegador (navigator) *******");
    console.log(navigator);
// !-------------------
    console.log('connection:',navigator.connection);
    console.log('geolocation:',navigator.geolocation);
    console.log('mediaDevices:',navigator.mediaDevices);
    console.log('mimeTypes:',navigator.mimeTypes);
    console.log('onLine:',navigator.onLine);
    console.log('serviceWorker:',navigator.serviceWorker);
    console.log('storage:',navigator.storage);
    console.log('usb:',navigator.usb);
    console.log('userAgent:',navigator.userAgent);
}

/*
// ========================
// todo: ejercicio 1
// ========================

function ejercicio01() {
    let cadena = document.getElementById("dato1").value;
    
    let result = contarCaracteres(cadena);
    
    document.getElementById("muestraEj01").innerHTML = `Repuesta:  ${result}`;

    console.info("resultado: " + result);  
}
*/
    //🔘 ⭕ 🔴 🟠 🟡 🟢 🔵 🟣 ⚫ ⚪ 🟤 🌎 🌐 🛑 💧