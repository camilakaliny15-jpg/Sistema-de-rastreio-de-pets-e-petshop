let carrinho = [];

const cartCount = document.getElementById("cartCount");
const cartList = document.getElementById("cartList");

function atualizarCarrinho() {

  cartList.innerHTML = "";
  
  if (carrinho.length === 0) {
    cartList.innerHTML = `<li class="text-center text-muted">Carrinho vazio</li>`;
    cartCount.textContent = 0;
  } else {
    carrinho.forEach(item => {
      const li = document.createElement("li");
      li.classList.add("dropdown-item");
      li.textContent = `${item.nome} — R$${item.preco.toFixed(2)}`;
      cartList.appendChild(li);
    });

    cartCount.textContent = carrinho.length;
  }

  const lista = document.getElementById("cartItems");
  const total = document.getElementById("cartTotal");

  if (lista && total) {
    lista.innerHTML = "";
    let soma = 0;

    carrinho.forEach(item => {
      const li = document.createElement("li");
      li.textContent = `${item.nome} — R$${item.preco.toFixed(2)}`;
      lista.appendChild(li);
      soma += item.preco;
    });

    total.textContent = soma.toFixed(2);
  }
}


document.querySelectorAll(".btn-primary").forEach(btn => {
  btn.addEventListener("click", () => {

    const card = btn.closest(".card");
    const nome = card.querySelector(".card-title").textContent;
    const preco = parseFloat(card.querySelector(".card-text").textContent.replace("R$", "").replace(",", "."));

    carrinho.push({ nome, preco });

    atualizarCarrinho();

    let modal = new bootstrap.Modal(document.getElementById("buyModal"));
    modal.show();
  });
});

window.addEventListener("scroll", () => {
  const nav = document.querySelector(".navbar");

  if (window.scrollY > 10) {
    nav.style.boxShadow = "0 8px 25px rgba(0,0,0,0.3)";
  } else {
    nav.style.boxShadow = "0 5px 25px rgba(0,0,0,0.2)";
  }
});

const cartBtn = document.getElementById("cartBtn");
if (cartBtn) {
  cartBtn.addEventListener("click", () => {
    atualizarCarrinho();
    let modal = new bootstrap.Modal(document.getElementById("cartModal"));
    modal.show();
  });
}

function atualizarCarrinho() {

  cartList.innerHTML = "";

  if (carrinho.length === 0) {
    cartList.innerHTML = `<li class="text-center text-muted">Carrinho vazio</li>`;
    cartCount.textContent = 0;
  } else {
    carrinho.forEach((item, index) => {
      const li = document.createElement("li");
      li.classList.add("dropdown-item", "d-flex", "justify-content-between", "align-items-center");

      li.innerHTML = `
        ${item.nome} — R$${item.preco.toFixed(2)}
        <button class="btn btn-sm btn-danger" data-remove="${index}">❌</button>
      `;

      cartList.appendChild(li);
    });

    cartCount.textContent = carrinho.length;
  }

  const lista = document.getElementById("cartItems");
  const total = document.getElementById("cartTotal");

  if (lista && total) {
    lista.innerHTML = "";
    let soma = 0;

    carrinho.forEach((item, index) => {
      const li = document.createElement("li");
      li.classList.add("d-flex", "justify-content-between");

      li.innerHTML = `
        ${item.nome} — R$${item.preco.toFixed(2)}
        <button class="btn btn-sm btn-outline-danger" data-remove="${index}">Excluir</button>
      `;

      lista.appendChild(li);
      soma += item.preco;
    });

    total.textContent = soma.toFixed(2);
  }

  document.querySelectorAll("[data-remove]").forEach(btn => {
    btn.addEventListener("click", () => {
      const index = btn.getAttribute("data-remove");
      carrinho.splice(index, 1); 
      atualizarCarrinho();       
    });
  });

}

