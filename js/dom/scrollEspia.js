/* 🔵 ======================================== 🔷
# 🔵  web: industriasvipe.com  🌐 vipescri.com  🔷
# 🔵  Empresa: Industrias de Software Vipescri  🔷
# 🔵  AUTORES: VILLALBA Raul Orlando y familia  🔷
#  🔵 ======================================== 🔷 */
// 🔳 🔲 🟥 🟧 🟨 🟩 🟦 🟪 ⬛ ⬜ 🟫 🔶 🔷 ✅ ❎     
// ======================== vanilla js =================

const d = document;

export default function scrollSpy() {
    const $sections = d.querySelectorAll("section[data-scroll-spy]");
    
    const cb = (entries) => {
        //console.warn('entries', entries);

        entries.forEach((entry) => {
            //console.log('entry:', entry);
            const id = entry.target.getAttribute('id');
            //console.warn('id:', id);
            if (entry.isIntersecting) {
                d.querySelector(`a[data-scroll-spy][href="#${id}"]`).
                classList.add('active');
            } else {
                d.querySelector(`a[data-scroll-spy][href="#${id}"]`).
                classList.remove('active');
            }
        })
    }


    const observer = new IntersectionObserver(cb, {
        //root
        // ? para seleccionar 
        //rootMargin: "-250px"
        // ? otra forma que va de 0 a 1 con max y min
        threshold: [0.5,0.75],
    });
    //console.log("observer:",observer);

    $sections.forEach((el) => observer.observe(el));
    
}