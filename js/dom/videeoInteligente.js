/* 🔵 ======================================== 🔷
# 🔵  web: industriasvipe.com  🌐 vipescri.com  🔷
# 🔵  Empresa: Industrias de Software Vipescri  🔷
# 🔵  AUTORES: VILLALBA Raul Orlando y familia  🔷
#  🔵 ======================================== 🔷 */
// 🔳 🔲 🟥 🟧 🟨 🟩 🟦 🟪 ⬛ ⬜ 🟫 🔶 🔷 ✅ ❎     
// ======================== vanilla js =================

const d = document,
    w = window;

export default function smartVideo() {
    const $video = d.querySelectorAll('video[data-smart-video]');

    const cb = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.play();
            } else {
                entry.target.pause();
            }

            w.addEventListener("visibilitychange",(e) => 
                d.visibilityState === 'visible' 
                    ? entry.target.play() 
                    : entry.target.pause()
            );
        });
    }

    // recibe una callback que es una funcion que espera recibir
    const observer = new IntersectionObserver(cb, {threshold: 0.5 });

    // $sections.forEach((el) => observer.observe(el));
    $video.forEach((el => observer.observe(el)));
}