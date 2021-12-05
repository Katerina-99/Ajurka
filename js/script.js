document.addEventListener("DOMContentLoaded", function () {
  const soapSliderSelector = document.querySelector(".swiper-wrapper");

  let cart = [];

  const display = (array) => {
    let goodsList = array.reduce((acc, item) => {
      let list = acc;
      list += `
              <div class="swiper-slide">
                <div class="card" data-id="${item.id}">
                  <div>
                    <img class="card-image"
                    src="${item.img}" 
                    alt="Card Image"
                    />
                  </div>
                  <h3 class="card-title">${item.name}</h3>
                  <span class="card-price">${item.price} ₽</span>
                  <button data-cart
                    class="button button-card">
                    в корзину
                  </button>
                </div>
              </div>
            `;
      return list;
    }, "");
    return goodsList;
  };

  const addItemToCart = (event) => {
    if (event.target.hasAttribute("data-cart")) {
      const card = event.target.closest(".card");
      // const itemId = button.dataset.id;
      const item = {
        img: card.querySelector(".card-image").getAttribute("src"),
        name: card.querySelector(".card-title").innerText,
        price: card.querySelector(".card-price").innerText,
        id: card.dataset.id,
      };
      cart.push(item);
      console.log(cart);
    }
  };

  soapSliderSelector.insertAdjacentHTML("beforeend", display(goods));

  window.addEventListener("click", addItemToCart);

});