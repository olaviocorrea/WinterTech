var carrinho = [];
    
    function adicionarAoCarrinho(nome, preco) {
      carrinho.push({ nome: nome, preco: preco });
      atualizarCarrinho();
    }
    
    function atualizarCarrinho() {
      var container = document.getElementById("itens-carrinho");
      container.innerHTML = "";
      
      var total = 0;
      
      for (var i = 0; i < carrinho.length; i++) {
        var produto = carrinho[i];
        
        var divProduto = document.createElement("div");
        divProduto.classList.add("produto-carrinho");
        divProduto.innerHTML = "<img src='caminho/para/imagem" + (i+1) + ".jpg' alt='" + produto.nome + "'><p>" + produto.nome + "</p><p>R$" + produto.preco.toFixed(2) + "</p>";
        
        container.appendChild(divProduto);
        
        total += produto.preco;
      }
      
      var totalCarrinho = document.getElementById("total-carrinho");
      totalCarrinho.innerHTML = "Total: R$ " + total.toFixed(2);
    }


