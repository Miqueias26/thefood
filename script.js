// quando clicar em pedir ahora vai ocultar o formulario e vai aparecer  uma imagem ou um video deuma moto em movimento  em direcao a entrega  e um texto dentro dizendo pedido realizado com sucesso com o total do pedido e a direcao de entrega , se quiser posso tentar adicionar um cronometro com estimativa de entrega em 10 minutos//


// funcoes criadas para menu inteligente
const menu = document.querySelector('.menu')
var showmenu = document.querySelector('.showmenu');
var imgt = document.querySelector('.container');


function mostrarmenu() {
showmenu.style.display = "flex"
menu.style.display = "none"
imgt.style.display = "none"
}

function ocultarmenu() {

showmenu.style.display = "none"
menu.style.display = "flex"
imgt.style.display = "flex"
imgt.style.alignSelf = 'center'; // Centraliza verticalmente
imgt.style.justifyContent = 'center'; // Centraliza horizontalmente
imgt.style.margin = 'auto'; // Garante que a imagem fique no centro
  
}
/* funcao que oculta a parte inicial 
de displays e mostra a segunbda etapa de seguimento do fluxo de telas para o cliente 

function dispcliente() {
  let ocultaformulario = document.getElementById('form-oficial');
  let mostrarformulario2 = document.getElementById('leftposition2parte')
  let rightposition = document.querySelector('.right-position')
  rightposition.style.display = "none"
  ocultaformulario.style.display = "none"
  mostrarformulario2.style.display = "flex"
  mostrarformulario2.style.opacity = 1;


  
}
  */

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
    var error1 = document.getElementById('errorCheckBoxNull')
    error1.innerHTML = ' ⚠️ ¡Revisa la solicitud! ⚠️ <hr> Tu coche se encuentra vacio. 🛒'
    error1.style.display = false;
    error1.style.paddingBottom = "10px";
    return;
   
  }

  

  let pedidoarmazenado = []; // array que será usado para armazenamento dos valores selecionados do checkbox //
  pedidoselecionado.forEach((checkbox) => {
    pedidoarmazenado.push(checkbox.value);
    var qtdinside = document.getElementById('qtdinside') // mostra a quantidade de itens selecionados  de forma ativa no display para o cliente//
    qtdinside.textContent = pedidoselecionado.length;
   

    

    

  });  //funcao arrow que percorre os checkbox e envia os selecionados ao array pedidoarmazenado //
  

 

            
  //objeto criado para armazenar os valores dos produtos
const valoresdositens = {
  "La Baconita": 11.90,
  "X-Todo": 12.30,
  "La Suprema": 13.45,
  "Furiosa": 15.00,
  "Gold Star": 18.50,
  "Coca-Cola 300ml": 3.00,
  "Pepsi 300ml" : 2.90,
  "Fanta Naranja 300ml": 2.40,
  "Zumo Granini Naranja 200ml": 3.00


};



  // Calcula o preço total dos itens selecionados e armazenados dentro do array e guarda dentro da variavel precioapagar //
  let precioapagar = 0;
  pedidoarmazenado.forEach((item) => {
    precioapagar += valoresdositens[item];

  });

  // resgata os itens selecionados e imprime na tela para o cliente //

  let articulos = document.getElementById('articulos');
  articulos.innerHTML = `${pedidoarmazenado}`;
  
  


  // adiciona e transfere o valor dos articulos no arquivo html //
  let precio = document.getElementById('precio')
 precio.innerHTML = `${precioapagar.toFixed(2)}€`;

 // adiciona um preço fixo de delivery de 5,00€ na tag em branco //

  let delivery = document.getElementById('delivery');
    deliverynatela = 5;
  delivery.innerHTML = `${deliverynatela.toFixed(2)}€`;


  // adiciona o valor dos articulos selecionados com o valorn de delivery já somados // 

   const total = document.getElementById('total');
  totalnatela = precioapagar + deliverynatela;
  total.innerHTML = `${totalnatela.toFixed(2)}€`

   // Mostra o modal apenas após a verificação
   var myModal = new bootstrap.Modal(document.getElementById('staticBackdrop'), {
    keyboard: false


    

});
myModal.show();



//espaço para armazenar a ubicacao do cliente//




// espaço reservado para code delivery no whatsaap //
document.getElementById('continuar-en-whatsapp').addEventListener('click', function (){
  let ubicacion = document.querySelector('input[name="morada"]').value;

if (ubicacion.length === 0) {
  var error2 = document.getElementById('error2')
    error2.innerHTML = ' ⚠️ ¡Revisa la solicitud! ⚠️ <hr> Antes de realizar el seguimiento, agrega tu ubicación.'
    error2.style.display = 'flex';
    
    error2.style.paddingBottom = "10px";
  return
  
}
  let mensagem = "Hola me gustaria hacer un pedido: " + pedidoarmazenado.join (',');


 /* let mensagem2 = "Esa es mi Ubicacion: " + ubicacion.join (','); */

 let mensagem2 = "Mi ubicacion es: " + ubicacion;

  let mensagemcodificada = encodeURIComponent(mensagem);
  let mensagemcodificada2 = encodeURIComponent(mensagem2);

  

  let numeroWhatsApp = "34722455166"

  let url = `https://wa.me/${numeroWhatsApp}?text=${mensagemcodificada}%0A${mensagemcodificada2}`;

  window.open(url, '_blank')


   
 let checkboxes = document.querySelectorAll('input[name="option"]');
            checkboxes.forEach((checkbox) => {
                checkbox.checked = false; // limpa checkbox apos o envio //
                
                
            });

      
});

}






  










  




