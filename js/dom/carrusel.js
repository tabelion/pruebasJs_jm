/* 🔵 ======================================== 🔷
import countdown from './cuentaRegresiva';
# 🔵  web: industriasvipe.com  🌐 vipescri.com  🔷
# 🔵  Empresa: Industrias de Software Vipescri  🔷
# 🔵  AUTORES: VILLALBA Raul Orlando y familia  🔷
#  🔵 ======================================== 🔷 */
// 🔳 🔲 🟥 🟧 🟨 🟩 🟦 🟪 ⬛ ⬜ 🟫 🔶 🔷 ✅ ❎     
// ======================== vanilla js =================

const d = document;

export default function slider() {
    const $nextBtn = d.querySelector('.slider-btn .next'),
        $prevtBtn = d.querySelector('.slider-btn .prev'),
        $slider = d.querySelectorAll('.slider-slide');

        let i = 0;
        
        d.addEventListener('click', function(e) {
            if (e.target === $prevtBtn) {
                e.preventDefault();
                $slider[i].classList.remove('active');
                i--;
            };

            if (i < 0) {
                i = $slider.length -1;
            };

            $slider[i].classList.add('active');

            // ==========

            if (e.target === $nextBtn) {
                e.preventDefault();
                $slider[i].classList.remove('active');
                i++;
            };

            if (i >= $slider.length ) {
                i = 0;
            };

            $slider[i].classList.add('active');
        })
    }