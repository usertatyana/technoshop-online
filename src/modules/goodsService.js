import {APP_URI} from "./var";

export const getGoods = ({page}) => {
  const url = new URL(`${APP_URI}api/goods`)

  if (page) url.searchParams.append(`page`, page);

  return fetch(url).then(response => response.json())

};

export const getGoodsItem = (id) =>
  fetch(`${APP_URI}api/goods/${id}`)
    .then(response => response.json())

