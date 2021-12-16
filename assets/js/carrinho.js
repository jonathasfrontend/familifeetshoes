var i = 0; 
for(i=3; i<=3; i++){

    const protutCar = document.getElementById("card-produtos");
    const objJson = JSON.parse(localStorage.getItem("carrinho"));
    const produtos = localStorage.getItem('carrinho');
    
    if(produtos != null){
        protutCar.innerHTML += `<div class="card-prod">`+`<h1>`+objJson.produtos[0].nome+`</h1>` + `<p>`+objJson.produtos[0].quantidade+`</p>` + `<h3>`+`R$ `+objJson.produtos[0].preco+`</h3>`+`</div>`;
        protutCar.innerHTML += `<div class="card-prod">`+`<h1>`+objJson.produtos[1].nome+`</h1>` + `<p>`+objJson.produtos[1].quantidade+`</p>` + `<h3>`+`R$ `+objJson.produtos[1].preco+`</h3>`+`</div>`;
        protutCar.innerHTML += `<div class="card-prod">`+`<h1>`+objJson.produtos[2].nome+`</h1>` + `<p>`+objJson.produtos[2].quantidade+`</p>` + `<h3>`+`R$ `+objJson.produtos[2].preco+`</h3>`+`</div>`;
        protutCar.innerHTML += `<div class="card-prod">`+`<h1>`+objJson.produtos[3].nome+`</h1>` + `<p>`+objJson.produtos[3].quantidade+`</p>` + `<h3>`+`R$ `+objJson.produtos[3].preco+`</h3>`+`</div>`;
        protutCar.innerHTML += `<div class="card-prod">`+`<h1>`+objJson.produtos[4].nome+`</h1>` + `<p>`+objJson.produtos[4].quantidade+`</p>` + `<h3>`+`R$ `+objJson.produtos[4].preco+`</h3>`+`</div>`;
        protutCar.innerHTML += `<div class="card-prod">`+`<h1>`+objJson.produtos[5].nome+`</h1>` + `<p>`+objJson.produtos[5].quantidade+`</p>` + `<h3>`+`R$ `+objJson.produtos[5].preco+`</h3>`+`</div>`;
        protutCar.innerHTML += `<div class="card-prod">`+`<h1>`+objJson.produtos[6].nome+`</h1>` + `<p>`+objJson.produtos[6].quantidade+`</p>` + `<h3>`+`R$ `+objJson.produtos[6].preco+`</h3>`+`</div>`;
    }else{
        protutCar.innerHTML = `<h1>Não há produtos no carrinho!</h1>`
    }
    
    if(produtos >= 1){
        var valor = parseInt( objJson.produtos[0].preco) + parseInt( objJson.produtos[1].preco)
    }
        const total = document.getElementById("total");

        // var valor = parseInt( objJson.produtos[0].preco) + parseInt( objJson.produtos[1].preco) + parseInt( objJson.produtos[2].preco) + parseInt( objJson.produtos[3].preco) + parseInt( objJson.produtos[4].preco) + parseInt( objJson.produtos[5].preco) + parseInt( objJson.produtos[6].preco);

        total.innerHTML = `Total R$`+valor+``;

}
