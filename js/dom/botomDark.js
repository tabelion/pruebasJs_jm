/* 🔵 ======================================== 🔷
# 🔵  web: industriasvipe.com  🌐 vipescri.com  🔷
# 🔵  Empresa: Industrias de Software Vipescri  🔷
# 🔵  AUTORES: VILLALBA Raul Orlando y familia  🔷
#  🔵 ======================================== 🔷 */
// 🔳 🔲 🟥 🟧 🟨 🟩 🟦 🟪 ⬛ ⬜ 🟫 🔶 🔷 ✅ ❎     
// ======================== vanilla js =================

const d = document,
    ls = localStorage;

export default function buttonDarkLight(btn, classDark) {
    const $themeBtn = d.querySelector(btn),
        $selectorDark = d.querySelectorAll("[data-dark]");
        // $btnDarkLight = d.getElementById("fondo-dark").style.display;

    //console.log($selectorDark);

    // console.warn($btnDarkLight);  localstore

    // let moon = "🌛",
    //     sun = "🌞";

    const darkMode = () => {
        $themeBtn.textContent = "🌞";
        $themeBtn.style.backgroundColor = "wheat";
        $selectorDark.forEach((el) => el.classList.add(classDark));
        ls.setItem("theme", "dark");
    }
    
    const lightMode = () => {
        $themeBtn.textContent = "🌛";
        $themeBtn.style.backgroundColor = "black";
        $selectorDark.forEach((el) => el.classList.remove(classDark));
        ls.setItem("theme", "light");
    }

    d.addEventListener("click", function(e) {
        if (e.target.matches(btn)) {
            ($themeBtn.textContent === "🌛") ? darkMode() : lightMode();
        }
    });

    d.addEventListener("DOMContentLoaded", (e) => {
        if (ls.getItem("theme") === null) ls.setItem("theme","light");
        if (ls.getItem("theme") === "light") lightMode(); 
        if (ls.getItem("theme") === "dark") darkMode();        }
    );   
}

