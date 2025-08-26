const form = document.getElementById("formContato");
if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();                 // impede o reload
    alert("Mensagem enviada com sucesso!");
    this.reset();                       // limpa os campos
  });
}