window.onload = function(){
    // slider do banner inicial
        $('.slide').click(function(){
            $('.slide').css('border-bottom','none');
            $('.slide').css('background-color','#ffffff');
            $('.slide').css('border-radius','3px');
            $(this).css('border-bottom','4px solid #ff0000');
            var img = $(this).children().css('background-image');
            $('.cont-img').css('background-image',img);
         })
         $('.slide').eq(0).click();

const items = [
{
    id: 0,
    nome: 'Actvitta academia',
    tamanho: 'Disponivel do 34 ao 39',
    img: 'assets/img/Actvitta/activitta (1).jpeg',
    preco: '129.90',
    quantidade: 0
},
{
    id: 1,
    nome: 'Beira rio flatform',
    tamanho: 'Disponivel do 34 ao 39',
    img: 'assets/img/Beira rio/flatform/flatform (2).jpeg',
    preco: '109.90',
    quantidade: 0
},
{
    id: 2,
    nome: 'Beira rio oxford',
    tamanho: 'Disponivel do 34 ao 39',
    img: 'assets/img/Beira rio/oxford/oxford (2).jpeg',
    preco: '89.90',
    quantidade: 0
},
{
    id: 3,
    nome: 'Beira rio slip on',
    tamanho: 'Disponivel do 34 ao 39',
    img: 'assets/img/Beira rio/slipon/slip on 2.jpg',
    preco: '89.90',
    quantidade: 0
},
{
    id: 4,
    nome: 'Fila move on',
    tamanho: 'Disponivel do 34 ao 39',
    img: 'assets/img/fila/fila (4).jpeg',
    preco: '239.90',
    quantidade: 0
},
{
    id: 5,
    nome: 'Modare confort',
    tamanho: 'Disponivel do 34 ao 39',
    img: 'assets/img/Modare/modare (3).jpeg',
    preco: '129.90',
    quantidade: 0
},
{
    id: 6,
    nome: 'Olympikus Bravo',
    tamanho: 'Disponivel do 39 ao 43',
    img: 'assets/img/Olympikus/olympikus (2).jpg',
    preco: '219.90',
    quantidade: 0
}
]


const inicializarLoja = () => {
    var containerProdutos = document.getElementById('produtos');
    items.map((val) => {
        val.quantidade = 1
        containerProdutos.innerHTML+= `
    <div class="produto-single">
        <div class="produto-img">
            <img src="`+ val.img + `" />
        </div>
        <p class="nome-produto">`+ val.nome + `</p>
        <p class="tamanho">`+ val.tamanho + `</p>
        <p class="valor-produto">`+`R$ `+ val.preco + `</p>
        <div class="buttonsbtn">
            <button class="add-produto" onClick="atualizarCarrinho('`+ val.nome + `',` + val.quantidade + `,'` + val.preco + `','` + val.id + `')">Adicionar ao carrinho!</button>
        </div>
    </div>
    `;
    })
}
inicializarLoja();

function bolladd(){
    const bagSvg = document.getElementById("bolcard");
    const bagDiv = document.getElementById("img-bag-boll");
    const produtos = localStorage.getItem('carrinho');

    if(produtos != null){
        bagSvg.style.display = "block";
        bagDiv.innerHTML = `<span id="bolcard" class="bolcard"></span>`;
    }else{
        bagSvg.style.display = "none";
    }
}
}

function atualizarCarrinho(nome, quantidade = 1, preco) {
    let outrosProdutos = localStorage.getItem("carrinho") ? JSON.parse(localStorage.getItem("carrinho")) : null
    if (outrosProdutos?.produtos == null) {
        const produto = {
            produtos: [{
                nome,
                quantidade,
                preco
            }]
        }
        localStorage.setItem("carrinho", JSON.stringify(produto))
    } else {
        let achou = false
        outrosProdutos.produtos.forEach(produto => {
            if (nome == produto.nome) {
                produto.quantidade += quantidade
                achou = true
            }
        });
        if (!achou) {
            const produto = {
                nome,
                quantidade,
                preco
            }
            outrosProdutos.produtos.push(produto)
        }
        localStorage.setItem("carrinho", JSON.stringify(outrosProdutos))
    }
    alert("Produto adicionado ao carrinho!");
    bolladd();
}


// #############################################################################
