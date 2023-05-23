/* 🔵 ======================================== 🔷
# 🔵  web: industriasvipe.com  🌐 vipescri.com  🔷
# 🔵  Empresa: Industrias de Software Vipescri  🔷
# 🔵  AUTORES: VILLALBA Raul Orlando y familia  🔷
#  🔵 ======================================== 🔷 */
// 🔳 🔲 🟥 🟧 🟨 🟩 🟦 🟪 ⬛ ⬜ 🟫 🔶 🔷 ✅ ❎     
// ======================== vanilla js =================
const d = document;

export function digitalClock(clock, btnPlay, btnStop) {
    let clockTempo;
    const $bellTone = d.createElement('audio');
    $bellTone.src = "../../assets/tono-mensaje-3-.mp3";

    d.addEventListener('click', function(e) {
        // con el metodo matchet veo que btn origino el evento.
        
        if (e.target.matches(btnPlay)) {
            clockTempo = setInterval(function() {
                let clockHour = new Date().toLocaleTimeString();
                d.querySelector(clock).innerHTML = `<h3> ${clockHour} </h3>  `
            },1000);

            $bellTone.play();

            // deshabilitamos el btn
            e.target.disabled = true;
            d.querySelector(btnStop).disabled = false;
        }

        if (e.target.matches(btnStop)) {
            clearInterval(clockTempo);
            d.querySelector(clock).innerHTML = null;
            $bellTone.play();
            // habilitamos el btn
            d.querySelector(btnPlay).disabled = false;
            e.target.disabled = true;
        }
    })
}

export function alarma(sonido, btnPlay, btnStop) { 
    let alarmaTempo;
    const $alarm = d.createElement('audio');
    $alarm.src = sonido;     //    "../../assets/iphone-notificacion.mp3";
    
    d.addEventListener('click', e => {
        // con el metodo matchet veo que btn origino el evento.

        if (e.target.matches(btnPlay)) {
            alarmaTempo = setTimeout(() => {
                $alarm.play();
            }, 2000);
            
            // deshabilitamos el btn
            e.target.disabled = true;
            d.querySelector(btnStop).disabled = false;
        }

        if (e.target.matches(btnStop)) {
            clearInterval(alarmaTempo);
            // detiene sonido
            $alarm.pause();
            // habilitamos el btn
            d.querySelector(btnPlay).disabled = false;
            e.target.disabled = true;
            $alarm.currentTime();
        }
    });
};


