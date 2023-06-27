/* 🔵 ======================================== 🔷
# 🔵  web: industriasvipe.com  🌐 vipescri.com  🔷
# 🔵  Empresa: Industrias de Software Vipescri  🔷
# 🔵  AUTORES: VILLALBA Raul Orlando y familia  🔷
#  🔵 ======================================== 🔷 */
// 🔳 🔲 🟥 🟧 🟨 🟩 🟦 🟪 ⬛ ⬜ 🟫 🔶 🔷 ✅ ❎     
// ======================== vanilla js =================

const d = document,
    n = navigator;


export default function webCam(id) {
    const $video = d.getElementById(id);
    // console.log(`webCam`,n.mediaDevices.getUserMedia);

    if (n.mediaDevices.getUserMedia){
        n.mediaDevices.getUserMedia({
            video:true, 
            audio:false,
        }).then(stream => {
            console.warn(stream);
            $video.srcObject = stream;
            $video.play();
        }).catch((err) => {
            $video.insertAdjacentHTML("afterend",`<mark>${err}</mark>`);
            console.log(`¡Sucedio el siguiente error!: ${err}`);
        });
    }
} 