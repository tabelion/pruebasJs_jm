/* 🔵 ======================================== 🔷
# 🔵  web: industriasvipe.com  🌐 vipescri.com  🔷
# 🔵  Empresa: Industrias de Software Vipescri  🔷
# 🔵  AUTORES: VILLALBA Raul Orlando y familia  🔷
#  🔵 ======================================== 🔷 */
// 🔳 🔲 🟥 🟧 🟨 🟩 🟦 🟪 ⬛ ⬜ 🟫 🔶 🔷 ✅ ❎     
// ======================== vanilla js =================

const d = document,
    w = window,
    n = navigator;

export default function networkStatus() {
    const isOnLine = () => {
        const $div = d.createElement('div');
        if (n.onLine){
            $div.textContent = 'conexion restablecida';
            $div.classList.add('online');
            $div.classList.remove('offline');
        } else {
            $div.textContent = 'conexion perdida';
            $div.classList.add('offline');
            $div.classList.remove('online');
        };

        d.body.insertAdjacentElement("afterbegin", $div);
        setTimeout(() => d.body.removeChild($div),2000);
    };

    // w.addEventListener("onLine", e => console.warn("onLine.:",n.onLine));
    w.addEventListener("online", e => isOnLine());
    w.addEventListener("offline", e => isOnLine());
}