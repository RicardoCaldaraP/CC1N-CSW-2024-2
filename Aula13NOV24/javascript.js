function enviarResposta() {
    var texto = document.getElementById("nome").value + " " + document.getElementById("sobrenome").value;
    document.getElementById('resposta').innerHTML = texto;
}