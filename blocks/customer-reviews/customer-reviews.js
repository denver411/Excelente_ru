'use strict'

// function getStyles (element) {
//   return getComputedStyle (element);
//  }

let windowWidth = document.documentElement.clientWidth;
let imageClickNext = document.querySelector('.navigation__arrow_right');
let imageClickPrev = document.querySelector('.navigation__arrow_left');

let imagesBlock = document.querySelector('.customer-reviews__images');
let textBlocks = document.querySelectorAll('.customer-reviews__review-item');
// let imageStyles =  getStyles (imagesBlock);
// let imageBlockWidth = parseInt(imageStyles.width) * textBlocks.length;


imageClickNext.onclick = function () {
  let imagePosition = 0;
  if (parseInt(imagesBlock.style.marginLeft)){
    imagePosition = Math.abs(parseInt(imagesBlock.style.marginLeft)) / 100;
  }
  let activetextBlocks = document.querySelector('.customer-reviews__review-item_active');
  activetextBlocks.classList.remove('customer-reviews__review-item_active');
  imagePosition++;
  if (imagePosition >= textBlocks.length) {
    imagePosition = 0;
  }
  textBlocks[imagePosition].classList.add('customer-reviews__review-item_active');
  imagesBlock.style.marginLeft = '-' + (imagePosition * 100) + '%';
}
imageClickPrev.onclick = function () {
  let imagePosition = 0;
  if (parseInt(imagesBlock.style.marginLeft)){
    imagePosition = Math.abs(parseInt(imagesBlock.style.marginLeft)) / 100;
  }
  let activetextBlocks = document.querySelector('.customer-reviews__review-item_active');
  activetextBlocks.classList.remove('customer-reviews__review-item_active');
  imagePosition--;
  if (imagePosition < 0) {
    imagePosition = textBlocks.length - 1;
  }
  textBlocks[imagePosition].classList.add('customer-reviews__review-item_active');
  imagesBlock.style.marginLeft = '-' + (imagePosition * 100) + '%';
}