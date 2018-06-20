'use strict'

let windowWidth = document.documentElement.clientWidth;
let imageClickNext = document.querySelector('.navigation__arrow_right');
let imageClickPrev = document.querySelector('.navigation__arrow_left');

let imagesBlock = document.querySelector('.customer-reviews__images');
let images = document.querySelectorAll('.customer-reviews__image');
let textBlocks = document.querySelectorAll('.customer-reviews__review-item');
// let imageStyles =  getStyles (imagesBlock);
// let imageBlockWidth = parseInt(imageStyles.width) * textBlocks.length;
  let imageStep = 100;
  if (windowWidth > 576) {
    imageStep = 33.33;
  }

imageClickNext.onclick = function () {

  let imagePosition = 0;
  if (parseInt(imagesBlock.style.marginLeft)){
    imagePosition = Math.abs(parseFloat(imagesBlock.style.marginLeft)) / imageStep;
  }
  let activetextBlocks = document.querySelector('.customer-reviews__review-item_active');
  activetextBlocks.classList.remove('customer-reviews__review-item_active');
  imagePosition++;
  if (imagePosition >= textBlocks.length) {
    imagePosition = 0;
  }
  textBlocks[imagePosition].classList.add('customer-reviews__review-item_active');
  imagesBlock.style.marginLeft = '-' + (imagePosition * imageStep) + '%';

}
imageClickPrev.onclick = function () {
  console.log('1');
  let imagePosition = 0;
  if (parseInt(imagesBlock.style.marginLeft)){
    imagePosition = Math.abs(parseFloat(imagesBlock.style.marginLeft)) / imageStep;
  }
  let activetextBlocks = document.querySelector('.customer-reviews__review-item_active');
  activetextBlocks.classList.remove('customer-reviews__review-item_active');
  imagePosition--;
  if (imagePosition < 0) {
    imagePosition = textBlocks.length - 1;
  }
  textBlocks[imagePosition].classList.add('customer-reviews__review-item_active');
  imagesBlock.style.marginLeft = '-' + (imagePosition * imageStep) + '%';
}