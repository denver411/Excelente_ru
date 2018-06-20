'use strict'

// let windowWidth = document.documentElement.clientWidth;
let imageClickNext = document.querySelector('.navigation__arrow_right');
let imageClickPrev = document.querySelector('.navigation__arrow_left');

// let imagesBlock = document.querySelector('.customer-reviews__images');
let images = document.querySelectorAll('.customer-reviews__image');
let textBlocks = document.querySelectorAll('.customer-reviews__review-item');
// let imageStyles =  getStyles (imagesBlock);
// // let imageBlockWidth = parseInt(imageStyles.width) * textBlocks.length;
// let imageStep = 100;
// if (windowWidth > 576) {
//   imageStep = 33.33;
// }
let imagePosition = 0;
imageClickNext.onclick = function () {
  textBlocks[imagePosition].classList.remove('customer-reviews__review-item_active');
  images[imagePosition].style.order = imagePosition + images.length;
  imagePosition++;
  if (imagePosition >= images.length) {
    for (let i = 0; i < images.length; i++) {
      images[i].style.order = i;
      console.log(images[i]);
    }
    imagePosition = 0;
  }
  textBlocks[imagePosition].classList.add('customer-reviews__review-item_active');
  // images[imagePosition+1].classList.add('customer-reviews__image_not-active');
}
imageClickPrev.onclick = function () {
  // console.log(imagePosition);
  // textBlocks[imagePosition].classList.remove('customer-reviews__review-item_active');
  // imagePosition--;
  // console.log(imagePosition);
  // images[3].style.order = '' + imagePosition + '';
  // console.log(images[3]);
  // if (images[images.length - 1].style.order = 0) {
  //   for (let i = 0; i < images.length; i++) {
  //     images[i].style.order = i;
  //     console.log(images[i]);
  //   }
  //   imagePosition = 0;
  // }
  // if (imagePosition < 0) {
  //   textBlocks[images.length + imagePosition].classList.add('customer-reviews__review-item_active');
  // } else {
  //   textBlocks[imagePosition].classList.add('customer-reviews__review-item_active');
  // }
}