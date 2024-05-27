<?php
include("../config/config.php");
require_once("../$classUsuario");
require_once("../$classDb");

$db = new Db();
$db->conectar();
$db->setTabela("usuarios");
$usuario = new Usuario();

$cpf = $_REQUEST["cpf"];
$nome = $_REQUEST["nome"];
$celular = $_REQUEST["celular"];
$email = $_REQUEST["email"];
$login = $_REQUEST["login"];
$senha = md5($_REQUEST["senha"]);
$usuario->getAll($cpf, $nome, $celular, $email, $login, $senha);

$campos = "cpf ,login, senha";
$where = "cpf = '$cpf' AND login = '$login' AND senha = '$senha'";
$dados = verifiCad($db, $usuario, $campos, $where);
if (!$dados){
    $usuario->gravar($db);
    header("Location: ../index.php");
}else{
    header("Locatino: ../index?erro=existe");
}

function verifiCad($db, $usuario, $campos, $where){
    return $usuario->consultar($db, $campos, $where);
}