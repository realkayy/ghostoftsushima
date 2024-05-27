<?php
session_start();
include("../config/config.php");
if (isset($_SESSION["logado"]) && $_SESSION["logado"] == true){
    $pagina = file_get_contents("../html/home.html");
    $nomeUsuario = $_SESSION["login"];
    $pagina = str_replace("#usuario", $nomeUsuario, $pagina);
    echo $pagina;
}else{
    header("Location: ../index.php?erro=loginInvalido");
}