
var botao = document.getElementById('mostrarConteudo');
    var conteudo = document.getElementById('conteudo');
    botao.addEventListener('click', function() {
        if (conteudo.style.display === 'none') {
            conteudo.style.display = 'block';
        } else {
            conteudo.style.display = 'none';
        }
    });