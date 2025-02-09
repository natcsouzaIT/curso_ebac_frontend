const form = document.getElementById ('formulario');
form.addEventListener ('submit', function(e) {
    e.preventDefault();
    
const primeiroCampo = document.getElementById ('primeiro-campo');
const segundoCampo = document.getElementById ('segundo-campo');
const primeiroValor = (primeiroCampo.value);
const segundoValor = (segundoCampo.value);

if (primeiroValor < segundoValor) {
    alert ('O formulário é válido, o primeiro valor é menor do que o segundo');
}
else {
    alert ('O segundo valor deve ser maior do que o primeiro')
}
})

console.log (form)