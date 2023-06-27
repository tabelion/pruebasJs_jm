/* 🔵 ======================================== 🔷
# 🔵  web: industriasvipe.com  🌐 vipescri.com  🔷
# 🔵  Empresa: Industrias de Software Vipescri  🔷
# 🔵  AUTORES: VILLALBA Raul Orlando y familia  🔷
#  🔵 ======================================== 🔷 */
// 🔳 🔲 🟥 🟧 🟨 🟩 🟦 🟪 ⬛ ⬜ 🟫 🔶 🔷 ✅ ❎     
// ======================== vanilla js =================

const d = document;
let x = 0,
    y = 0;

export function moveBall(e, ball, stage) {
    const $ball = d.querySelector(ball),
        $stage = d.querySelector(stage),
        limitsBall = $ball.getBoundingClientRect(),
        limitsStage = $stage.getBoundingClientRect();
    let pelota = '20px';
    // console.warn('ball:',limitsBall);
    // console.log('stage:',limitsStage);

    switch (e.keyCode) {
        case 37:
            //console.log("⏪",x,y,"left"); 
            if (limitsBall.left > limitsStage.left) {
                pelota = '20px 33px 0 0';
                e.preventDefault(e.keyCode);
                x--;
            }
            break;
        case 38:
            //console.log("⏫",x,y,"up");
            if (limitsBall.top > limitsStage.top) {
                pelota = '0'; 
                e.preventDefault(e.keyCode);
                y--;
            }   
            break;
        case 39:
            //console.log("⏩",x,y,"right"); 
            if (limitsBall.right < limitsStage.right) {
                pelota = '20px 0 0 33px';
                e.preventDefault(e.keyCode);
                x++;
            };   
            break;
        case 40:
            //console.log("⏬",x,y,"down");
            if (limitsBall.bottom < limitsStage.bottom) {
                pelota = '40px 0 0 0';
                e.preventDefault(e.keyCode);
                y++;
            } 
            break;
    
        default:
            //console.log("💥"); 
            break;
    } 

    d.getElementById('pelota').style.padding = pelota;
    $ball.style.transform = `translate(${x * 10}px, ${y * 10}px)`;   
}

export function shortcuts(e) {
    /*
    console.warn('evento tipo:',e.type);
    console.log(`ctrl: ${e.ctrlKey}`);
    console.warn(`alt: ${e.altKey}`);
    console.log(`shift: ${e.shiftKey}`);
    console.warn(`------`);
    console.log(e); */
    // console.warn('valor keyCode:',e.keyCode);
    // console.log('tecla key:',e.key);

    let pulsaste;
    let colorFondo;
    // let pelota = '20px';
    if (e.key === 'a' && e.altKey) {
        pulsaste = `Pulsaste "alt + a"`;
        colorFondo = "blue";
    }
    
    if (e.key === 'y' && e.altKey) {
        pulsaste = `Pulsaste "alt + y"`;
        colorFondo = "yellow";
    }

    // if (e.key === 'i' && e.altKey) {
    //     pelota = '0';
    // }

    // if (e.key === 'm' && e.altKey) {
    //     pelota = '40px 0 0 0';
    // }

    // if (e.key === 'j' && e.altKey) {
    //     pelota = '20px 33px 0 0';
    // }

    // if (e.key === 'l' && e.altKey) {
    //     pelota = '20px 0 0 33px';
    // }

    // d.getElementById('pelota').style.padding = pelota;
    d.getElementById("teclaPulsada").style.backgroundColor = colorFondo;
    d.getElementById("teclaPulsada").innerHTML = pulsaste;
}

//   padding: 40px 0 0 0;  /* abajo */
//   padding-top: 0; /* arriba */
//   padding: 20px 30px 0 0;  /* izq */
//   padding: 20px 0 0 30px; /* der */