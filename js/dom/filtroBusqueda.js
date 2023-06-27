/* 🔵 ======================================== 🔷
# 🔵  web: industriasvipe.com  🌐 vipescri.com  🔷
# 🔵  Empresa: Industrias de Software Vipescri  🔷
# 🔵  AUTORES: VILLALBA Raul Orlando y familia  🔷
#  🔵 ======================================== 🔷 */
// 🔳 🔲 🟥 🟧 🟨 🟩 🟦 🟪 ⬛ ⬜ 🟫 🔶 🔷 ✅ ❎     
// ======================== vanilla js =================

const d = document;

export default function searchFilters(input, selector) {
    d.addEventListener('keyup', (e) => {
        if (e.target.matches(input)) {
            //console.log('Search:', e.key, e.target.value);

            if (e.key === 'Escape') e.target.value = '';

            d.querySelectorAll(selector).forEach((el) => 
                el.textContent.toLowerCase().
                includes(e.target.value)
                ? el.classList.remove("filter")
                : el.classList.add("filter")
            );
        }
    });
}