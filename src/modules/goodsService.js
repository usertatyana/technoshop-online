import {APP_URI} from "./var";

export const getGoods = () => {

  const pageURL = new URL(location);

  const url = new URL(`${APP_URI}api/goods`);

  for (const [name, value] of pageURL.searchParams.entries()) {
    url.searchParams.set(name, value)
  }

  return fetch(url).then(response => response.json())
};

export const getGoodsItem = (id) =>
  fetch(`${APP_URI}api/goods/${id}`)
    .then(response => response.json())

export const getCategory = () =>
  fetch(`${APP_URI}api/category`)
    .then(response => response.json())

export const getGoodsList = list =>
  fetch(`${APP_URI}api/goods/?list=${list}`)
    .then(response => response.json());



