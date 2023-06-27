/* 🔵 ======================================== 🔷
# 🔵  web: industriasvipe.com  🌐 vipescri.com  🔷
# 🔵  Empresa: Industrias de Software Vipescri  🔷
# 🔵  AUTORES: VILLALBA Raul Orlando y familia  🔷
#  🔵 ======================================== 🔷 */
// 🔳 🔲 🟥 🟧 🟨 🟩 🟦 🟪 ⬛ ⬜ 🟫 🔶 🔷 ✅ ❎     
// ======================== vanilla js =================

const d = document,
    w = window;

export default function responsiveTester(form) {
    const $form = d.getElementById(form);
    let tester;
    // let control;

    d.addEventListener("submit", (e) => {
        if (e.target === $form) {
            e.preventDefault();
            
            // control = `width=${$form.ancho.value}, height=${$form.alto.value}, scrollbars=yes, resizable=yes`
            // console.warn("control: " + control);

            tester = w.open(
                $form.direccion.value,
                "tester",
                `innerWidth=${$form.ancho.value}, innerHeight=${$form.alto.value}`
            );
        }
    });

    d.addEventListener("click", function(e) {
        if (e.target === $form.cerrar) tester.close();
    });
};

/* 
                control,
? window.open("../reportes_fpdf/listados/listaAgenda.php?cadena_busqueda=" + cadena + "&desde=" + desde);
todo: var referencia_objeto_window = window.open([url],[nombre_de_la_ventana]_blank,[configuracion_ventana]toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400);
miPopup =  window.open("ubicamapa.php?lac=" + ubilat + "&lon=" + ubilon, "miwin","top=50, left=171, width=777, height=555, scrollbars=yes");
miPopup.focus();

    Width	Ajusta el ancho de la ventana. En pixels
    Height	Ajusta el alto de la ventana
    Top	Indica la posición de la ventana. distancia entre el borde superior de la pantalla y el borde superior de la ventana.
    Left	Indica la posición de la ventana. distancia entre el borde izquierdo de la pantalla y el borde izquierdo de la ventana.
    Scrollbars	Scrollbars=YES hace que salga las barras de desplazamiento. scrollbars=NO hace que nunca salgan.
    Resizable	resizable=YES puede modificar tamaño ventana, resizable=NO tamaño fijo.

    ? Directories (barra directorios)	
    A partir de aquí se enumeran otra serie de propiedades que sirven para mostrar o no un elemento de la barra de navegación que tienen los navegadores más populares, como podría ser la barra de menús o la barra de estado.

    Cuando ponemos el atributo=YES estamos forzando a que ese elemento se vea. Cuando ponemos atributo=NO lo que hacemos es evitar que ese elemento se vea.
    Location    (barra direcciones)
    Menubar     (barra de menús)
    Status      (barra de estado)
    Titlebar    (la barra del título)
    Toolbar     (barra de herramientas)
*/