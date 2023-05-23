/* 🔵 ======================================== 🔷
# 🔵  web: industriasvipe.com  🌐 vipescri.com  🔷
# 🔵  Empresa: Industrias de Software Vipescri  🔷
# 🔵  AUTORES: VILLALBA Raul Orlando y familia  🔷
#  🔵 ======================================== 🔷 */
// 🔳 🔲 🟥 🟧 🟨 🟩 🟦 🟪 ⬛ ⬜ 🟫 🔶 🔷 ✅ ❎     
// ======================== vanilla js =================
import scrollTopButton from "./dom/botonScroll.js";
import countdown from "./dom/cuentaRegresiva.js";
import hamburgerMenu from "./dom/menuHamburguesa.js";
import { digitalClock, alarma } from "./dom/reloj.js";
import { moveBall, shortcuts } from "./dom/teclado.js";


const d = document;

d.addEventListener("DOMContentLoaded",(e) => {
    hamburgerMenu(".panel-btn",".panel",".menu a"); 
    digitalClock("#reloj","#activar-reloj","#desactivar-reloj");
    alarma("../assets/car-alarm.mp3","#activa-alarma","#desactiva-alarma");
    countdown(
        "countdown",
        "Nov 20, 2023 00:00:00",
        "Happy seventy years Raul 🥂🍾  🎂"
    );
    scrollTopButton(".scroll-top-btn");
});
// "Nov 20, 2023 00:00:00",
// funciona al presionar la tecla
d.addEventListener("keydown", (e) => {
    shortcuts(e);
    moveBall(e, ".ball", ".stage");
});

// funciona al soltar la tecla
// d.addEventListener("keyup", e => {
//     shortcuts(e);
// })

// d.addEventListener("keypress", e => {
//     shortcuts(e);
// })