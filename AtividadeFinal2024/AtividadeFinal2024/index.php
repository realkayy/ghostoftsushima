<?php
include("config/config.php");
$pagina = file_get_contents($paginaLogin);
$mensagemErro = "<p>Login Invalodo</p>";
if (isset($_GET["erro"]) && $_GET["erro"] == "loginInvalido") {
    $pagina = str_replace("#resultado",$mensagemErro, $pagina);
}else{
    $pagina = str_replace("#resultado", "", $pagina);
}
echo $pagina;