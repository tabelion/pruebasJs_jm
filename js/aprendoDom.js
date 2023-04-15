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
// ========================

function inicio() {
    //alert("inicio");
    //document.getElementById("form_busqueda").submit();
    location.href="http://127.0.0.1:5500/curso_jonmircha/indexDom.html";
}

// ========================
// todo: ejercicio 61
// ========================

function ejercicio61() {
    // estos tres han sido reeplazados por
    let cadena1 = document.getElementsByTagName("li");
    let cadena2 = document.getElementsByClassName("card"); 
    let cadena3 = document.getElementsByName("nombre");
    console.info("cadena2-3-4:", cadena1,cadena2.cadena3);
    //! el querySelector es mas lento que el getElementById
    let cadena4 = document.querySelector("#menu");
    let cadena41 = document.querySelectorAll("#menu");
    console.warn("cadena4:", cadena4);
    console.log("cadena4:", cadena41);
    
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