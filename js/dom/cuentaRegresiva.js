/* 🔵 ======================================== 🔷
import countdown from './cuentaRegresiva';
# 🔵  web: industriasvipe.com  🌐 vipescri.com  🔷
# 🔵  Empresa: Industrias de Software Vipescri  🔷
# 🔵  AUTORES: VILLALBA Raul Orlando y familia  🔷
#  🔵 ======================================== 🔷 */
// 🔳 🔲 🟥 🟧 🟨 🟩 🟦 🟪 ⬛ ⬜ 🟫 🔶 🔷 ✅ ❎     
// ======================== vanilla js =================

const d = document;

export default function countdown(id, limitDate, finalMessage) {
    const $countDown = d.getElementById("countDown"),
        countdownDate = new Date(limitDate).getTime();

    let countdownTempo = setInterval(() => {
        let now = new Date().getTime(),
            limitTime = countdownDate - now,
            days = Math.floor(limitTime / (1000 * 60 * 60 * 24)),
            hours = Math.floor(limitTime % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)),
            minutes = ('0' + Math.floor(limitTime % (1000 * 60 * 60) / (1000 * 60))).slice(-2),
            seconds = ('0' + Math.floor(limitTime % (1000 * 60) / 1000)).slice(-2);

        hours = ('0' + hours).slice(-2);    
        $countDown.innerHTML = `<h3>Faltan: ${days} dias ${hours} horas ${minutes} minutos ${seconds} segundos para las 70 de Raul</h3>`;    
        // para las bodas de oro de Tere y Raul
        // console.log(countdownDate, now, limitTime);
        
        if (limitTime < 0) {
            clearInterval(countdownTempo);
            $countDown.innerHTML = `<h3>${finalMessage}</h3`;
        }
    },1000);
}