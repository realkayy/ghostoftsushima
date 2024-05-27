<?php
session_start();
include("../config/config.php");
require_once("../$classUsuario");
require_once("../$classDb");

$db = new Db();
$db->conectar();
$db->setTabela("usuarios");
$usuario = new Usuario();

$login = $_REQUEST["login"];
$senha = md5($_REQUEST["senha"]);

$campos = 'login, senha';
$where = "login = '$login' AND senha = '$senha'";
$dados = consultarDados($db, $campos, $where, $usuario);
if ($dados){
    $_SESSION["login"] = $login;
    $_SESSION["loagdo"] = true;
    header("Location: menu.php");
}else{
    header("Location: ../index.php?erro=loginInvalido");
}
function consultarDados($db, $campos, $where, $usu){
    return $usu->consultar($db, $campos, $where);
}