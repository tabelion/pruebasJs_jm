/* 🔵 ======================================== 🔷
# 🔵  web: industriasvipe.com  🌐 vipescri.com  🔷
# 🔵  Empresa: Industrias de Software Vipescri  🔷
# 🔵  AUTORES: VILLALBA Raul Orlando y familia  🔷
#  🔵 ======================================== 🔷 */
// 🔳 🔲 🟥 🟧 🟨 🟩 🟦 🟪 ⬛ ⬜ 🟫 🔶 🔷 ✅ ❎     
// ======================== vanilla js =================

export default function hamburgerMenu(panelBtn, panel, menuLink) {
    const d = document;
    
    
    d.addEventListener('click', (e) => {

        if (e.target.matches(panelBtn) || e.target.matches(`${panelBtn} *`)) {
            d.querySelector(panel).classList.toggle('is-active');
            d.querySelector(panelBtn).classList.toggle('is-active');

            if (d.getElementById("menuAbre").style.display === 'none') {
                d.getElementById("menuAbre").style.display = 'block';
                d.getElementById("menuCierra").style.display = 'none';
            } else {
                d.getElementById("menuAbre").style.display = 'none';
                d.getElementById("menuCierra").style.display = 'block';
            }    
            
        }

        if (e.target.matches(menuLink)) {
            d.querySelector(panel).classList.remove('is-active');
            d.querySelector(panelBtn).classList.remove('is-active');

            d.getElementById("menuAbre").style.display = 'block';
            d.getElementById("menuCierra").style.display = 'none';
        }

    })

}
    

