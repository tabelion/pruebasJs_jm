/* 🔵 ======================================== 🔷
# 🔵  web: industriasvipe.com  🌐 vipescri.com  🔷
# 🔵  Empresa: Industrias de Software Vipescri  🔷
# 🔵  AUTORES: VILLALBA Raul Orlando y familia  🔷
#  🔵 ======================================== 🔷 */
// 🔳 🔲 🟥 🟧 🟨 🟩 🟦 🟪 ⬛ ⬜ 🟫 🔶 🔷 ✅ ❎     
// ======================== vanilla js =================

const d = document,
    w = window;

export default function scrollTopButton(btn) {
    const $scrollBtn = d.querySelector(btn);

    w.addEventListener("scroll",(e) => {
        let scrollTop = w.pageYOffset || d.documentElement.scrollTop;
        //636
        if (scrollTop > 600) {
            $scrollBtn.classList.remove("hidden");
        } else {
            $scrollBtn.classList.add("hidden");
        }
            
        console.warn(w.pageYOffset, d.documentElement.scrollTop);
    });

    d.addEventListener("click", e => {
        if (e.target.matches(btn)) {
            w.scrollTo({
                behavior: "smooth",
                top: 0,
            });
        }
    });
}