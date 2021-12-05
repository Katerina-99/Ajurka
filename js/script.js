document.addEventListener("DOMContentLoaded", function () {
  const soapSliderSelector = document.querySelector(".swiper-wrapper");

  const display = (array) => {
    let goodsList = array.reduce((acc, item) => {
    let list = acc;
    list += `
              <div class="swiper-slide">
                <div class="card">
                  <div>
                    <img class="card-image"
                    src="${item.img}" 
                    alt="Card Image"
                    />
                  </div>
                  <h3 class="card-title">${item.name}</h3>
                  <span class="card-price">${item.price} ₽</span>
                  <button class="button-card" item-id="${item.id}">в корзину</button>
                </div>
              </div>
            `;
    return list;
    }, "");
    return goodsList;    
  };
  
  soapSliderSelector.insertAdjacentHTML("beforeend", display(goods));

});
