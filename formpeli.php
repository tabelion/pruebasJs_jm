<?php
#  🔵 ======================================== 🔷
# 🔵  web: industriasvipe.com  🌐 vipescri.com  🔷
# 🔵  Empresa: Industrias de Software Vipescri  🔷
# 🔵  AUTORES: VILLALBA Raul Orlando y familia  🔷
#  🔵 ======================================== 🔷 
# include_once "../b_control/controlPermiso.php";
# require_once("../b_clase/clasePrincipal.php");
# ======================================================
print_r($_POST);
# print_r($_FILES);
# print_r($_GET); 
# ====================================================
//$idImdb = $_POST['idImdb'];
// $titulo = $_POST['titulo'];
// $direct = $_POST['direct'];
// $anioes = $_POST['anioes'];
// $paises = $_POST['paises'];
// $genero = $_POST['genero'];
// $califi = $_POST['califi'];
//$fictec = $_POST['fictec'];
//echo "titulo: " . $titulo;
# =======================================================
// $nummza = ""; // 0;
// if (isset($_GET["mz"])) {
// 	$nummza = $_GET["mz"];
// }

# ======================================================
# FIN
# ======================================================
?>


<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicios en JS</title>
    <!-- entre 55 y 65 caracteres para el titulo -->
    <meta name="description" content="En esta pagina estamos aprendiendoe los fundamentes del html en el comentario no mas de 165 caracteres">
    <link type="image/x-icon" rel="shortcut icon" href="./img/logo_vip.png">
    <link type="text/css" rel="stylesheet" href="./css/stylo_first.css">

    <script type="text/javascript" language="javascript">
        let idImdb = "<?php echo $idImdb; ?>";
        let titulo = "<?php echo $titulo; ?>";
        let direct = "<?php echo $direct; ?>";
        let anioes = "<?php echo $anioes; ?>";
        let paises = "<?php echo $paises; ?>";
        let genero = "<?php echo $genero; ?>";
        let califi = "<?php echo $califi; ?>";
        let fictec = "<?php echo $fictec; ?>";

        class Pelicula {
            constructor(id, titulo, direct, anioes, paises, genero, califi) {
                this.id = id;
                this.titulo = titulo;
                this.direct = direct;
                this.anioes = anioes;
                this.paises = paises;
                this.genero = genero;
                this.califi = califi;

                this.validarMDB(id);
            };

            validarMDB(id) {

            }
        };

        // tt0075148
        // tt0019130
        // tt4154
        // tt4158

        const peli = new Pelicula({

        });
    </script>
</head>

<body>


</body>

</html>