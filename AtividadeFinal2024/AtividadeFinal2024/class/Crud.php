<?php

class Crud{
    private $idPost;
    private $tituloPost;
    private $contPost;
    private $tagPost;
    public function getAll($tituloPost, $contPost, $tagPost){
        $this->tituloPost = $tituloPost;
        $this->contPost = $contPost;
        $this->tagPost = $tagPost;
    }
    public function gravaPost(Db $db){
        $dados = [];
        $dados["tituloPost"] = $this->tituloPost;
        $dados["contPost"] = $this->contPost;
        $dados["tagPost"] = $this->tagPost;
        $db->gravar($dados);
    }
    public function consultaPost(Db $db, $campos, $where){
        $dados = $db->consultar($campos, $where);
        return $dados;
    }
    public function alterar(db $db,$dados,$where){
        $db->alterar($where,$dados);
    }
    public function exlcluir(db $db,$where){
        $db->excluir($where);
    }
}