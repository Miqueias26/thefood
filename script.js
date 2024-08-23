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

// funcao criada para efeitos css ao carregar a pagina //
document.addEventListener("DOMContentLoaded", function() {
  let container = document.querySelector(".container");
  container.style.opacity = 1;


})

// script do formulario //


// funcao que limpa os checkbox quando o Index é carregado //
window.onload = function() {
  let checkboxes = document.querySelectorAll('input[name="option"]');
  checkboxes.forEach((checkbox) => {
      checkbox.checked = false;
  });
};

 //essa funcao serve para armazenar o pedido do cliente //
function ssd(event) {
  event.preventDefault();
 
  let pedidoselecionado = document.querySelectorAll('input[name="option"]:checked'); // seleciona os valores do checkbox

  if (pedidoselecionado.length === 0) {
    alert("Se quieres continuar, seleciona un artículo mínimo!! ") //condicao criada para indentificar se os inputs foram selecionados, com uma mensagem de error
    return;
  }

  let pedidoarmazenado = []; // array que será usado para armazenamento dos valores selecionados do checkbox //
  pedidoselecionado.forEach((checkbox) => {
    pedidoarmazenado.push(checkbox.value);
  });  //funcao arrow que percorre os checkbox e envia os selecionados ao array pedidoarmazenado //

 alert(pedidoarmazenado);

 let checkboxes = document.querySelectorAll('input[name="option"]');
            checkboxes.forEach((checkbox) => {
                checkbox.checked = false; // limpa checkbox apos o envio //
            });
}


