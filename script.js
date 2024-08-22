// quando clicar em pedir ahora vai ocultar o formulario e vai aparecer  uma imagem ou um video deuma moto em movimento  em direcao a entrega  e um texto dentro dizendo pedido realizado com sucesso com o total do pedido e a direcao de entrega , se quiser posso tentar adicionar um cronometro com estimativa de entrega em 10 minutos//


// funcoes criadas para menu inteligente
const menu = document.querySelector('.menu')
var showmenu = document.querySelector('.showmenu');


function mostrarmenu() {
showmenu.style.display = "flex"
menu.style.display = "none"
}

function ocultarmenu() {

showmenu.style.display = "none"
menu.style.display = "flex"
  
}

document.addEventListener("DOMContentLoaded", function() {
  let container = document.querySelector(".container");
  container.style.opacity = 1;


})
