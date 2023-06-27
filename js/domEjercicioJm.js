/* 🔵 ======================================== 🔷
# 🔵  web: industriasvipe.com  🌐 vipescri.com  🔷
# 🔵  Empresa: Industrias de Software Vipescri  🔷
# 🔵  AUTORES: VILLALBA Raul Orlando y familia  🔷
#  🔵 ======================================== 🔷 */
// 🔳 🔲 🟥 🟧 🟨 🟩 🟦 🟪 ⬛ ⬜ 🟫 🔶 🔷 ✅ ❎     
// ======================== vanilla js =================
import buttonDarkLight from "./dom/botomDark.js";
import countdown from "./dom/cuentaRegresiva.js";
import hamburgerMenu from "./dom/menuHamburguesa.js";
import scrollTopButton from "./dom/botonScroll.js";
import responsiveMedia from "./dom/objResponsive.js";
import responsiveTester from "./dom/pruebaResponsive.js";
import { digitalClock, alarma } from "./dom/reloj.js";
import { moveBall, shortcuts } from "./dom/teclado.js";
import userDeviceInfo from "./dom/deteccionDispositivo.js";
import networkStatus from "./dom/deteccionRed.js";
import webCam from "./dom/deteccionWebCam.js";
import getGeolocation from "./dom/geolocalizacion.js";
import searchFilters from "./dom/filtroBusqueda.js";
import draw from "./dom/sorteo.js";
import slider from "./dom/carrusel.js";
import scrollSpy from "./dom/scrollEspia.js";
import smartVideo from "./dom/videeoInteligente.js";


const d = document;

d.addEventListener("DOMContentLoaded",(e) => {
    // ! reloj.js
    alarma("../assets/car-alarm.mp3","#activa-alarma","#desactiva-alarma");
    // ? buttonDarkLight(".dark-theme-btn","dark-mode");
    // ! cuentaRegresiva.js 
    countdown(
        "countdown",
        "Nov 20, 2023 00:00:00",
        "Happy seventy years Raul 🥂🍾  🎂"
    );
    // ! reloj.js
    digitalClock("#reloj","#activar-reloj","#desactivar-reloj");
    // ! menuHamburguesa.js
    hamburgerMenu(".panel-btn",".panel",".menu a"); 
    // ! objResponsive.js
    responsiveMedia (
        "youtube",
        "(min-width:1024px)",
        '<a href="https://www.youtube.com/embed/l4jOzix338E" target="_blank" rel="noopener">ver videoo</a>',
        "video"
    );

    responsiveMedia(
        "myFuture",
        "(min-width:1024px)",
        '<video src="./avi_mp4/YourFuture.mkv" width="400" height="400" controls ></video>',
        "video Escritorio"
    );

    responsiveMedia(
        "gmaps",
        "(min-width:1024px)",
        '<a href="https://goo.gl/maps/RnTvCsXWEmY9g71E9?coh=178572&entry=tt" target="_blank" rel="noopener">ver mapa</a>',
        '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d96685.41276676866!2d-74.1124536!3d40.7747985!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3aa7ed1bd9d0d%3A0xf9310128da194d24!2sCaldwell%20University!5e0!3m2!1ses-419!2sar!4v1685575245218!5m2!1ses-419!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
    );

    // ! pruebaResponsive.js
    responsiveTester("responsive-tester");

    // ! botonScroll.js
    scrollTopButton(".scroll-top-btn");

    // ! deteccionDispositivo.js
    userDeviceInfo("user-device");

    // ! deteccionWebCam.js
    webCam("user-video");
    
    // ! geolocalizacion.js
    getGeolocation("geolocation");
    
    // ! filtroBusqueda.js
    searchFilters(".card-filter",".card");
    
    // ! sorteo.js
    draw("#winner-btn",".player");

    // ! carrusel.js
    slider();

    // ! scrollEspia.js
    scrollSpy();    

    // ! videoInteligente.js    
    smartVideo();
});

// ! botonScroll.js
buttonDarkLight(".dark-theme-btn","dark-mode");  // ? aca va afuera del addEve..

// ! deteccionRed.js
networkStatus();


// "Nov 20, 2023 00:00:00", Happy seventy years Raul
// "Feb 12, 2024 00:00:00"
// "Jun 25, 2023 00:00:00"
// "May 14, 2024 00:00:00"
// "Apr 10, 2024 00:00:00" Para jubilarme - to retire
// "Feb 05, 2027 00:00:00  golden wedding Tere and Raul
// funciona al presionar la tecla

d.addEventListener("keydown", (e) => {
    shortcuts(e);
    moveBall(e, ".ball", ".stage");
});

/* funciona al soltar la tecla
d.addEventListener("keyup", e => {
    shortcuts(e);
}) 

d.addEventListener("keypress", e => {
    shortcuts(e);
}) */