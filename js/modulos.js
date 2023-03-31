/* 🔵 ======================================== 🔷
# 🔵  web: industriasvipe.com  🌐 vipescri.com  🔷
# 🔵  Empresa: Industrias de Software Vipescri  🔷
# 🔵  AUTORES: VILLALBA Raul Orlando y familia  🔷
#  🔵 ======================================== 🔷 */

//import saluda2, {PI,conexion} from "./constantes.js";
import {PI,conexion} from "./constantes.js";
import {aritmetica as calculos} from "./aritmetica.js";

// ! Modulos import_export (33)
// 🟨 JavaScript es multiparadigma (un paradima es POO, ) los objetos tienen atributos y metodos,  un objetos es una instancia de una clase.
// ! 📕 clase es un modelo a seguir 
// todo: 📙 objeto es una instancia de una clase
// *       📗 Atributos: caracteristicas o propiedad son variables dentro de un objeto
// ?       📘 Metodo son las acciones que un objeto puede realizar (funciones dentro de un objeto)
// ========================
var cursor;

console.log(cursor);
console.log(PI);

// saluda2();

document.getElementById("muestraDato01").innerHTML = ".   archivo nro 1";



let ul3 = `
<li>Rojo</li>
<li>Verde</li>
<li>Azul</li>
<li>Amarillo</li>
`;

document.getElementById("color").innerHTML = ul3;

// =======================

const ordenCodigo = ["Importacion de Modulos","Declaracion de Varibles","Declaracion de Funciones","Ejecucion de Codigo"];

let ol = document.getElementById("lista");
ordenCodigo.forEach((elem, indi) => {
    const li = document.createElement('li');
    if (indi%2 === 0) {
        li.innerHTML = `🟠 ${elem}`;
    } else {
        li.innerHTML = `🔴 ${elem}`;
    }
    ol.append(li);
});


// ======================

console.log(conexion);
console.log(conexion.host);
console.log(conexion.user);
console.log(conexion.password);
console.log(conexion.database);

// ======================

//console.log("suma=",aritmetica.sumar(10,5));
console.log("suma=",calculos.sumar(10,5));
console.log("resta=",calculos.restar(10,4));

/*
npm install mysql o npm i mysql
npm uninstall mysql
// ? -----------------------
const mysql = require('mysql');

const conection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Vipe0753",
    database: "u193453798_junco"
}); 

conection.connect( (err) => {
    if (err) throw err;
    console.log(' la conection funciona');
})

conection.query('SELECT count(*) FROM `tbcontacto` WHERE 1', (err, rows) => {
    if (err) throw err;
    console.log('la cantidad de registro es:');
    console.log(rows);
})

conection.query('SELECT count(*) AS canti FROM `tbcontacto` WHERE 1;', function (err, rows) {
    if (err) throw err;
    console.log('la cantidad =',rows[0]['canti']);
})

let consulta = 'SELECT count(*) AS canti FROM `tbcontacto` WHERE 1;';
let callbak = function (rows) {
    //if (err) throw err;
    console.log('la cantidad3 =',rows[0]['canti']);
};

//conection.query(consulta, callbak);

let datos = conection.query(consulta, callbak);

datos;

conection.end();
*/