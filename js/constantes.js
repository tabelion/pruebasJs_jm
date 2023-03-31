/* 🔵 ======================================== 🔷
# 🔵  web: industriasvipe.com  🌐 vipescri.com  🔷
# 🔵  Empresa: Industrias de Software Vipescri  🔷
# 🔵  AUTORES: VILLALBA Raul Orlando y familia  🔷
#  🔵 ======================================== 🔷 */

export const PI = Math.PI;

// export const mysql = require('mysql');
/*
export const conection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Vipe0753",
    database: "u193453798_junco"
}); */

export const conexion = {
    host: "localhost",
    user: "root",
    password: "Vipe0753",
    database: "u193453798_junco"
};

export default function saluda2() {
    console.log("Hola Modulos -ES6");
}

// ! las funciones expersadas son las que se guardan en variables

const hello = () => console.log("hello");