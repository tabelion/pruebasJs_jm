/* 🔵 ======================================== 🔷
import countdown from './cuentaRegresiva';
import { impureFinalPropsSelectorFactory } from '../../../varios/ej-m2/FT-M2-master/12-React-Redux/demo/dist/bundle';
# 🔵  web: industriasvipe.com  🌐 vipescri.com  🔷
# 🔵  Empresa: Industrias de Software Vipescri  🔷
# 🔵  AUTORES: VILLALBA Raul Orlando y familia  🔷
#  🔵 ======================================== 🔷 */
// 🔳 🔲 🟥 🟧 🟨 🟩 🟦 🟪 ⬛ ⬜ 🟫 🔶 🔷 ✅ ❎     
// ======================== vanilla js =================

const d = document,
    n = navigator,
    ua = n.userAgent;

export default function userDeviceInfo(id) {
    const $id = d.getElementById(id),
    isMobile = {
        android:() => ua.match(/android/i),
        ios:() => ua.match(/iphone|ipad|ipod/i),
        window:() => ua.match(/windows phone/i),
        any: function () {
            return this.android() || this.ios() || this.window();
        },
    },
    isDesktop = {
        linux:() => ua.match(/linux/i),
        mac:() => ua.match(/mac os/i),
        windows:() => ua.match(/windows nt/i),
        any: function() {
            return this.linux() || this.mac() || this.windows();
        },
    },
    isBrowser = {
        chrome:() => ua.match(/chrome/i),
        safari:() => ua.match(/safari/i),
        firefox:() => ua.match(/firefox/i),
        opera:() => ua.match(/opera|opera mini/i),
        ie:() => ua.match(/msie|iemobile/i),
        edge:() => ua.match(/edge/i),
        any: function() {
            return(
                this.chrome() || 
                this.safari() || 
                this.firefox() || 
                this.opera() || 
                this.ie() || 
                this.edge()
            );
        },
    };
    /*
    console.warn('userAgent:', ua);
    console.log('android:', isMobile.android());
    console.warn('ios:', isMobile.ios());
    console.log('window:', isMobile.android());
    console.warn('any:', isMobile.any()); */

    $id.innerHTML = `
        <ul>
            <li>User Agent: <b> ${ua}</b></li>
            <li>Plataforma: <b> ${isMobile.any()?isMobile.any():isDesktop.any()}</b></li>
            <li>Navegador : <b> ${isBrowser.any()}</b></li>
    
        </ul>
    `

    /* contenido exclusivo */
    if (isBrowser.chrome()) {
        $id.innerHTML += `<p><strong>Este contenido solo se ve en chrome</strong></p>`;
    }

    if (isBrowser.firefox()) {
        $id.innerHTML += `<p><mark>Este contenido solo se ve en firefox</mark></p>`;
    }

    /* redireccionar */
    if (isMobile.android()) {
        window.location.href = 'http://jonmircha.com';
    }
}