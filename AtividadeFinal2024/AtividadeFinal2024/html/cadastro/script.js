function validarCampos() {
    var cpf = document.getElementById("cpf").value;
    var nome = document.getElementById("nome").value;
    var telefone = document.getElementById("telefone").value;
    var email = document.getElementById("email").value;
    var login = document.getElementById("login").value;
    var senha = document.getElementById("senha").value;

    if (cpf === "" || nome === "" || telefone === "" || email === "" || login === "" || senha === "") {
        document.getElementById("aviso").classList.remove("hidden");
        return false;
    }

    return true;
}
