const finalcompra = document.querySelector("#finalcompra");
const close = document.querySelector(".close");
const form = document.querySelector("#form");

finalcompra.addEventListener("click", function(){
    form.style.opacity = "10";
    form.style.visibility = "visible";
});

close.addEventListener("click", function(){
    form.style.opacity = "0";
    form.style.visibility = "hidden";
});
    

const formPedido = document.querySelector("#pedido");
    
formPedido.innerHTML += ``+objJson.produtos[0].nome+``;