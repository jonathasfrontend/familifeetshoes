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
formPedido.innerHTML += `Nome: `+objJson.produtos[0].nome+`, Quantidade: `+objJson.produtos[0].quantidade+`, R$`+objJson.produtos[0].preco+``;
formPedido.innerHTML += ` Nome: `+objJson.produtos[1].nome+`, Quantidade: `+objJson.produtos[1].quantidade+`, R$`+objJson.produtos[1].preco+``;
formPedido.innerHTML += ` Nome: `+objJson.produtos[2].nome+`, Quantidade: `+objJson.produtos[2].quantidade+`, R$`+objJson.produtos[1].preco+``;