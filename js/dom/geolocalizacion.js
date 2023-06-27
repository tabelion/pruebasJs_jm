/* 🔵 ======================================== 🔷
# 🔵  web: industriasvipe.com  🌐 vipescri.com  🔷
# 🔵  Empresa: Industrias de Software Vipescri  🔷
# 🔵  AUTORES: VILLALBA Raul Orlando y familia  🔷
#  🔵 ======================================== 🔷 */
// 🔳 🔲 🟥 🟧 🟨 🟩 🟦 🟪 ⬛ ⬜ 🟫 🔶 🔷 ✅ ❎     
// ======================== vanilla js =================

const d = document,
    n = navigator;

export default function getGeolocation(id) {
    const $idloc = d.getElementById(id),
    options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge:0,
    };

    // funcion en caso de exito en la lectura
    // const success = function (position) {
    //     $idloc.innerHTML = position;
    //     console.log('position: ', position);
    // };
    const success = (position) => {
        let coords = position.coords;
        $idloc.innerHTML = 
        `<p><mark>Tu posicion actual es:</mark></p>
        <ul>
            <li>Latitud: <b> ${coords.latitude} </b></li>
            <li>Longitud: <b> ${coords.longitude}</b> </li>
            <li>Presición: <b> ${coords.accuracy} mts.</b> </li>
        </ul>
        <a href="https://www.google.com/maps/@-${coords.latitude},${coords.longitude},20z" target="_blank" rel="noopener">ver en Google Maps</a>
        `;
        // console.log('position: ', position, coords);
        // console.warn(`latitud: ${coords.latitude}, 
        // Longitud: ${coords.longitude}`);
    };
    // fede -31.397064, -64.227726
    // Tere y Raul -31.490587, -64.221248




    // <a href="https://www.google.com/maps/@-${coords.latitude},${coords.longitude},20z" target="_blank" rel="noopener">ver en Google Maps</a>
    //funcion en caso de error
    const error = (err) => {
        $idloc.innerHTML = `<mark>error: ${err.code} ${err.message}</mark> `;
        console.error(`error: ${err.code} ${err.message}`);
    };


    n.geolocation.getCurrentPosition(success, error, options);
    // todo: Geolocation.getCurrentPosition(): Recupera la ubicación actual del dispositivo.


    //cuando se usa para desplazamiento
    //? n.geolocation.watchPosition(success, error, options);
    // todo: Geolocation.watchPosition(): Registra una función de controlador que se llamará automáticamente cada vez que cambie la posición del dispositivo, devolviendo la ubicación actualizada.
};