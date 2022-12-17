const addToToCart = (id, count = 1) => {
  const cartGoods = localStorage.getItem('cart-ts') ?
    JSON.parse(localStorage.getItem('cart-ts')) :
    {};

  cartGoods[id] = count;

  localStorage.setItem('cart-ts', JSON.stringify(cartGoods))
};

const removeToCart = (id) => {
  const cartGoods = localStorage.getItem('cart-ts') ?
    JSON.parse(localStorage.getItem('cart-ts')) :
    {};

  delete cartGoods[id];

  localStorage.setItem('cart-ts', JSON.stringify(cartGoods))
};

const checkItem = (classDelete) => {
  const elems = document.querySelectorAll('[data-id-goods]');

  const cartGoods = localStorage.getItem('cart-ts') ?
    JSON.parse(localStorage.getItem('cart-ts')) :
    {};

  let count = 0;

  for (const cartGoodsKey in cartGoods) {
    count += cartGoods[cartGoodsKey];
  }

  const cartElem = document.querySelector('.header__cart');
  cartElem.dataset.count = count;

  if (classDelete) {
    const elem = document.querySelectorAll('[data-id-goods]');

    elems.forEach(elem => {
      if (cartGoods[elem.dataset.idGoods]) {
        elem.classList.add(classDelete);
        elem.textContent = 'В корзине';
      } else {
        elem.classList.add(classDelete);
        elem.textContent = 'В корзину';
      }
    })
  }
};

export const cartControl = ({wrapper, classAdd, classDelete}) => {
  checkItem(classDelete);

  if (wrapper) {
    wrapper.addEventListener('click', (e) => {
      const target = e.target;
      const id = target.dataset.idGoods;

      if (!id) return;

      if (target.closest(`.${classDelete}`)) {
        removeToCart(id);
      } else if (target.closest(`.${classAdd}`)) {
        addToToCart(id);
      }

      checkItem(classDelete);
    })
  }
}
