import {APP_URI} from "./var";

export const renderGoods = (wrapper, goods) => {
  wrapper.textContent = '';

  const cards = goods.map(item => {
    const li = document.createElement('li');
    li.className = 'goods__item';

    li.innerHTML = `
     <article class="goods-item">
         <a href="card.html?id=${item.id}">
            <img class="goods-item__image"
            src="${APP_URI}${item.images.present}"
            alt="${item.title}"
            width="340"
            height="340"
            >
            <h3 class="goods-item__title">${item.title}</h3>
            </a>

            <div class="goods-item__buy">
               <p class="goods-item__price">${item.price}</p>
               <button class="goods-item__to-cart" data-id-goods="${item.id}">В корзину</button>
             </div>
     </article>`;

    return li;
  });

  wrapper.append(...cards)
}
