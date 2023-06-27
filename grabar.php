<?php
## ===================================================
# industriasvipe.com  * "vipescri.com" * Indu_soft_ViP
# Industrias de Software VIP Villalba Petrelli e hijos
# IDEAS Y DESARROLLO DE: VILLALBA Raul Orlando e hijos 
# ====================================================
// include_once "../b_control/controlPermiso.php";
// require_once("../b_clase/clasePrincipal.php");
# ====================================================
// $trae = new traerTablas();
# ====================================================
print_r($_POST);
# print_r($_FILES);
# print_r($_GET);
# ====================================================
/*  
$idClave = $_POST["nClave"];	//=> 274 
$nombre = cadena::convierteTilde(trim($_POST["nNombre"]));	//=> nuevo inmueble 1
$dFecha = date('Y-m-d');
$idprop = $_POST["cbpropi"];	//=> 0
$nCatas = $_POST["nCatast"];	//=> 3116
$idhabi = $_POST["cbhabit"];	//=> 0
$NRenta = $_POST["nNumDgr"];	//=> 1101
# ----------
$Domici = cadena::convierteTilde($_POST["nDomici"]);
# ----------
$idDest = $_POST["cbdesti"];	//=> 0
$idluga = $_POST["cblugar"];	//=> 1
$idSbar = $_POST["cbsubar"];	//=> 1
$nualco = $_POST["nAlaCom"];	//=> 
$idProv = $_POST["cbprovi"];	//=> 1
$CodPos = $_POST["nCodpos"];	//=> 5000
//$idNaci = $_POST["cbnacio"];
$Ubilat = $_POST["nUbilat"];	//=>  cnUbilat  cnUbilon  caUbicac
$Ubilon = $_POST["nUbilon"];
# ----------
$idoper = $_POST["cbopera"];	//=> 0
$idEsta = $_POST["cbestad"];	//=> 0
# ----------
$nummza = $_POST["nDmanza"];	//=> 0
$numlte = $_POST["nDloten"];	//=> 0
$PHNume = $_POST["nPHNume"];	//=> 0
$PorcPH = $_POST["nPorcPH"];	//=> 0.000
$Superf = $_POST["nSuperf"];	//=> 0.00
# ----------
$idCons = $_POST["cbconso"];	//=> 0
# ----------
$FaAgua = $_POST["nUFAgua"];	//=>
$ConEle = $_POST["nEElect"];	//=>

$Moneda = $_POST["nMoneda"];	//=>$
$precio = $_POST["nPrecio"];	//=>0.00
# ----------
$observ = cadena::convierteTilde($_POST["nObserv"]);
# ----------
$idActo = $_POST["cbopera"];	//=>0 idActoju
$Extras = $_POST["nIextra"];	//=>0.00
$Actual = $_POST["nActual"];	//=>0
$Comisi = $_POST["nComisi"];	//=>0.00
$impFij = $_POST["nImpFij"];	//=>0.00
# ----------
$uhaCgo = $_POST["nUhaCgo"];	//=>
$codbar = $_POST["nCgobar"];	//=>
# ========================================
if (isset($_POST["cadena_busqueda"])) {
	$cadena = $_POST["cadena_busqueda"];
}
# ======================================== 
$idFoto = cadena::rellenaCeros($idClave, 8);
# =====
$foto = $_FILES["foto4x4"]["name"];
$temp = $_FILES["foto4x4"]["tmp_name"];
$bite = $_FILES["foto4x4"]["size"];
$tipo = $_FILES["foto4x4"]["type"];
# ========================================
$kbyte = $bite / 1024; //con esto temenos la cantidad en kb
if ($kbyte > 200) {
	echo "<script type='text/javascript'>
				 alert('Foto muy grande. No debe superar los 200 kb');
			  </script>";
} else {
	$reFoto = $idFoto . ".jpg";
	//echo "<br>foto ".$reFoto;
	if ($tipo == "image/jpeg") {
		if (!copy($temp, "../b_fotos/$reFoto")) {
			echo "<br>error al subir foto  $reFoto";
		}
	}
}
# ===================================================
$consulta = "UPDATE tbinmueble 
SET caNombre ='$nombre', idPropie = $idprop, idConsor = $idCons, idOperac = $idoper, idHabita = $idhabi, caDomici ='$Domici', idSubbar = $idSbar, idLocali = $idluga, idProvin = $idProv, caCodPos ='$CodPos', cnUbilat ='$Ubilat', cnUbilon ='$Ubilon', caCataMu ='$nCatas', caNCtRen ='$NRenta', caConEle ='$ConEle', caFaAgua ='$FaAgua', idEstado = $idEsta , idDestin = $idDest , imPorcPH = $PorcPH, imSuperf = $Superf, caDManza = $nummza, caDLoteN = $numlte, caPHNume = $PHNume, caAlarCo ='$nualco', txObserv ='$observ', imPrecio = $precio, caMoneda ='$Moneda', caActual = $Actual, caExtras = $Extras, caComisi = $Comisi, caimpFij = $impFij, caUhacgo ='$uhaCgo', caCodigo ='$codbar', daHecho = '$dFecha' WHERE idClave=$idClave";
$resul = $trae->abmRegistros($consulta, $dbase);
 echo "<br>" . $consulta . "  base= ".$dbase;
# ===================================================
*/
?>
<!DOCTYPE html>
<html lan=es>

<head>
	<title>vipescri</title>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<link type="text/css" rel="stylesheet" href="../b_css/estilosVip.css">
	<link type="text/css" rel="stylesheet" href="../b_css/estiloBotones.css">
	<!--	para usar fuentes distintas	  -->
	<!-- <link type='text/css' href='https://fonts.googleapis.com/css?family=Indie+Flower' rel='stylesheet'> -->

	<!-- jQuery Plugins: Alertify -->
	<!-- <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script> -->
	<script src="../b_js/alertify/libs/jquery/1.11.1/jquery.min.js"></script>
	<script src="../b_js/alertify/alertify.min.js"></script>

	<!-- <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css"> -->
	<link rel="stylesheet" href="../b_css/alertify/alertify.core.css">
	<link rel="stylesheet" href="../b_css/alertify/alertify.default.css">
	<link rel="stylesheet" href="../b_css/alertify/alertify.bootstrap.css">
	<!-- Fin jQuery Plugins: Alertify -->

	<script language="javascript">
		var cursor;
		if (document.all) {
			// Está utilizando EXPLORER
			cursor = 'hand';
		} else {
			// Está utilizando MOZILLA/NETSCAPE
			cursor = 'pointer';
		}

		function cerrar() {
			var resul = "<?php echo $resul; ?>";
			var id = <?php echo $idClave ?>;
			var cadena = "<?php echo $cadena ?>";
			// permite enviar el id encriptado
			var ide = btoa(id);

			// window.alert('cadena=' + cadena + '  id='+id);
			if (resul == 1) {
				location.href = "ficha.php?id=" + id + "&cadena_busqueda=" + cadena + "&ok=true";
			} else {
				alertify.alert("¡No pudieron guardarse los datos!", function() {
					location.href = "ficha.php?id=" + id + "&cadena_busqueda=" + cadena + "&ok=false";
				});
			}
		}
	</script>
</head>

<body onload="cerrar()">

	<div class="boton">
		<a href="#" onClick="cerrar()" title="Regresa">
			<img img src="../b_img/regresa2.png" width="25" height="25">
		</a>
	</div>
	<!--
		header.location => se ejecuta del lado del servidor 
		window.location => se ejecuta del lado del cliente 	
	-->
	<!--/* FINAL DE UNA FICHA PUEDE HABER VARIAS *******-	-->

</body>

</html>