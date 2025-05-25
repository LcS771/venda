let cart = [];
let total = 0;

function addToCart(gameName, price) {
  cart.push({ name: gameName, price });
  total += price;
  updateCart();
}

function updateCart() {
  const cartList = document.getElementById('cart-items');
  const totalDisplay = document.getElementById('total');
  
  cartList.innerHTML = '';
  cart.forEach((item, index) => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - R$ ${item.price.toFixed(2)}`;
    cartList.appendChild(li);
  });

  totalDisplay.textContent = total.toFixed(2);
}

function checkout() {
  if (cart.length === 0) {
    alert('Seu carrinho está vazio!');
  } else {
    alert(`Compra finalizada! Total: R$ ${total.toFixed(2)}`);
    cart = [];
    total = 0;
    updateCart();
  }
  function remover () {
    const nome = document.getElementById('jogo1').value;
    if(nome && quantidade) {
        const tabela = document.getElementById('tabela').getElementsByTagName('tbody')[0];
        const novaLinha = tabela.insertRow();
        const celulaProduto = novaLinha.insertCell(0);
        const celulaQuantidade = novaLinha.insertCell(1);
        celulaProduto.textContent = nome;
        celulaQuantidade.textContent = quantidade;
        document.getElementById('jogo1').value =''; 
    } else {
        alert('não tem nenhum jogo no seu carrinho!');
    }
    }

   
}
