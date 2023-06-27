/* 🔵 ======================================== 🔷
# 🔵  web: industriasvipe.com  🌐 vipescri.com  🔷
# 🔵  Empresa: Industrias de Software Vipescri  🔷
# 🔵  AUTORES: VILLALBA Raul Orlando y familia  🔷
#  🔵 ======================================== 🔷 */
// 🔳 🔲 🟥 🟧 🟨 🟩 🟦 🟪 ⬛ ⬜ 🟫 🔶 🔷 ✅ ❎     
// ======================== vanilla js =================

const d = document;

export default function draw(btn, selector) {
    const getWinner = (selector) => {
        const $players = d.querySelectorAll(selector),
            ramdom = Math.floor(Math.random() * $players.length),
            winner = $players[ramdom];
            //elegido = winner.textContent;

        //console.warn($players, "ramdom:", ramdom, "winer:", winner.textContent);

        return winner.textContent;
    }

    d.addEventListener("click", (e) => {
        if (e.target.matches(btn)) {
            let result = getWinner(selector);
            console.log(`El ganador es ${result}`);
            //alert(`El ganador es ${result}`);

            //if (e.key === 'Escape') e.target.value = '';

            d.querySelectorAll(selector).forEach((el) => {
                // console.log('result:',el.textContent, result);
                // if (el.textContent === result) {
                //     el.classList.add("elegido")
                // } else {
                //     el.classList.remove("elegido")
                // }
                (el.textContent === result) 
                ? el.classList.add("elegido") 
                : el.classList.remove("elegido")

                d.addEventListener('keyup', (e) => {
                    console.log('pulso.:', e.key);
                    if (e.key === 'Escape') el.classList.remove("elegido");
                });
            });    
        }
    })

}

/*
const getWinnerComment = (selector) => {
    const $players = document.querySelectorAll(selector),
        ramdom = Math.floor(Math.random() * $players.length),
        winner = $players[ramdom];
        //console.warn($players, "ramdom:", ramdom, "winer:", winner.textContent);

    return `El ganador es ${winner.textContent}`;
};

getWinnerComment("ytd-comment-thread-renderer #author-text span");
*/