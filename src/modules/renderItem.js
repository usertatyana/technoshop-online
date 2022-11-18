import {APP_URI} from "./var";

const createCardImageSlider = (largeImages) => {
  const cardImageSlider = document.createElement('ul');
  cardImageSlider.className = 'swiper-wrapper';

  const cardImageSlides = largeImages.map(url => {
    const li = document.createElement('li');
    li.className = 'swiper-slide';
    const img = new Image();
    img.src = `${APP_URI}${url}`;
    li.append(img);
    return li;
  })

  cardImageSlider.append(...cardImageSlides);
  return cardImageSlider;
}

const createCardImageThumbSlider = (smallImage) => {

  const cardImageSlider = document.createElement('ul');
  cardImageSlider.className = 'swiper-wrapper';

  const cardImageSlides = largeImages.map(url => {
    const li = document.createElement('li');
    li.className = 'swiper-slide';
    const button = document.createElement('button');
    button.className = 'card__thumb-btn';
    const img = new Image();
    img.src = `${APP_URI}${url}`;
    button.append(img);
    li.append(button);
    return li;
  })

  cardImageSlider.append(...cardImageSlides);
  return cardImageSlider;
}

export const renderItem = item => {
    console.log(item);

    const cardImage = document.querySelector('.card__image');
    cardImage.append(createCardImageSlider(item.images.large));

    const cardSliderThumb = document.querySelector('.card__slider-thumb');
    cardSliderThumb.append(createCardImageThumbSlider(item.image.small));

};
