const arrayProdutos = [
    {
        Img:"",
        descrição:"Conjunto de Camisa",
        valor:"R$ 199,00",
        botão:"Adicionar ao carrinho"
    },
    {
        Img:"",
        descrição:"Legging",
        valor:"R$ 99,00",
        botão:"Adicionar ao carrinho"
    },
    {
        Img:"",
        descrição:"Casaco ",
        valor:"R$ 139,00",
        botão:"Adicionar ao carrinho"
    },
]

for(let i=0; i<arrayProdutos.length;i++) {
    const product=document.createElement("product");
    product.className =`product -${i+1}`
    console.log(product);

    product.innerHTML =`
    <img>${arrayProdutos[i].Img}</img>
    <h3>${arrayProdutos[i].descrição}</h3>
    <p>${arrayProdutos[i].valor}</p>
    <button>${arrayProdutos[i].botão}</button>`

    const section= document.getElementsByClassName("featured-products")[0]
    section.appendChild(product)
}
