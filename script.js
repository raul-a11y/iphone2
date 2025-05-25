const products = [
  {
    name: "iPhone 15 Pro Max 256GB",
    image: "https://images-americanas.b2w.io/produtos/01/00/img/1435502/4/1435502463_1GG.jpg",
    price: "R$ 9.899,00"
  },
  {
    name: "iPhone 14 128GB",
    image: "https://images-americanas.b2w.io/produtos/01/00/img/1446197/0/1446197077_1GG.jpg",
    price: "R$ 5.999,00"
  },
  {
    name: "iPhone 13 128GB",
    image: "https://images-americanas.b2w.io/produtos/01/00/img/1446197/6/1446197680_1GG.jpg",
    price: "R$ 4.799,00"
  },
  {
    name: "iPhone SE 64GB",
    image: "https://images-americanas.b2w.io/produtos/01/00/img/1452563/2/1452563252_1GG.jpg",
    price: "R$ 2.999,00"
  }
];

function loadProducts() {
  const container = document.getElementById("product-list");
  products.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <div class="info">
        <h3>${product.name}</h3>
        <p class="price">${product.price}</p>
        <button class="buy-btn">Comprar</button>
      </div>
    `;
    container.appendChild(card);
  });
}

document.addEventListener("DOMContentLoaded", loadProducts);
