var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

var orderButton = document.querySelector('.product-week__order');
var orderIcon = document.querySelector('.item__icon');

var cartPopup = document.querySelector('.cart-add');
var cartDialog = cartPopup.querySelector('.cart-add__wrapper');

var catalogList = document.querySelector('.catalog__list');

if(orderButton) {
  orderButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    cartPopup.classList.remove('cart-add--closed');
  });
} else {
  catalogList.addEventListener('click', function (evt) {
    evt.preventDefault();
    if (event.target.nodeName = '.item__icon') {
      cartPopup.classList.remove('cart-add--closed');
    }
  });
}

cartPopup.addEventListener('click', function (evt) {
  evt.preventDefault();
  cartPopup.classList.add('cart-add--closed');
});

cartDialog.addEventListener('click', function (evt) {
  evt.stopImmediatePropagation();
});
