//captura o botão e o menu
const botao = document.querySelector('.btn-menu');
const menu = document.querySelector('.menu');

//cria o evento de clique
botao.addEventListener('click', ()=>{
    //ativa e desativa a classe aberto (usando toggle)
    menu.classList.toggle('aberto');

});