import {APP_URI} from "./var";
import Swiper, {Scrollbar, Thumbs} from "swiper";

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

  const cardImageSlides = smallImage.map(url => {
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
    const swiperScrollbar = document.createElement('div');
    swiperScrollbar.className = 'swiper-scrollbar';
    cardSliderThumb.append(createCardImageThumbSlider(item.images.small), swiperScrollbar);

  const thumbSwiper = new Swiper ('.card__slider-thumb', {
    spaceBetween: 44,
    slidesPerView: 3,
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
    },
    modules: [Scrollbar]
  });

  new Swiper('.card__image', {
    spaceBetween: 10,
    slidesPerView: 1,
    thumbs: {
      swiper: thumbSwiper,
      slideThumbActiveClass: 'card__thumb-btn_active',
    },
    modules: [Thumbs]
  });

};
