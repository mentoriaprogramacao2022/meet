var minhavar = function() {
    console.log('chamou minha var')
};
var valor1 = 10;
var valor2 = 20;
var soma = valor1 + valor2;

var exibirAlerta = function() {
    alert('Olá, aqui é o grupo de Mentoria de Programação em 2022');
}

var perguntarSexo = function() {
    var sexo = prompt('Qual seu sexo?');

    if (sexo == 'M') {
        alert('Masculino');
    } else if (sexo == 'F') {
        alert('Feminino');
    } else {
        alert('Indefinido');
    }
}