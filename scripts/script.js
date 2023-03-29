'use strict';

const header = document.querySelector('header');
const headerNav = document.querySelector('.header__nav');
const headerList = document.querySelector('.header__list');
const burgerOpen = document.querySelector('.header-burger__open');
const burgerClose = document.querySelector('.header-burger__close');
const cartBtn = document.querySelector('.header__btn--cart');
const cartDetails = document.querySelector('.cart__details');
const cartBtnBack = document.querySelector('.cart__button--back');
const headerBottom = document.querySelector('.header__bottom');
const main = document.querySelector('main');
const productsSection = document.querySelector('.products');
const productContent = document.querySelector('.products__content');
const testimonialsContent = document.querySelector('.testimonials__content');
const popularContent = document.querySelector('.popular__content');
const productContainer = document.querySelector('.product__container');
const cartContainer = document.querySelector('.cart__container');

const products = [
  {
    name: 'Spiced Mint',
    price: '9.99$',
    popular: true,
    burningTime: '70-75',
    dimension: '10cm x 5cm',
    weight: 400,
  },
  {
    name: 'Sweet Strawberry',
    price: '6.99$',
    popular: true,
    burningTime: '60-70',
    dimension: '15cm x 10cm',
    weight: 500,
  },
  {
    name: 'Cool Blueberries',
    price: '8.99$',
    popular: true,
    burningTime: '80-85',
    dimension: '10cm x 5cm',
    weight: 600,
  },
  {
    name: 'Juicy Lemon',
    price: '6.99$',
    popular: true,
    burningTime: '70-75',
    dimension: '12cm x 8cm',
    weight: 400,
  },
  {
    name: 'Product name',
    price: '9.99$',
    popular: false,
    burningTime: '90-95',
    dimension: '12cm x 8cm',
    weight: 800,
  },
  {
    name: 'Fragrant Cinnamon',
    price: '19.99$',
    popular: false,
    burningTime: '50-55',
    dimension: '15cm x 5cm',
    weight: 600,
  },
  {
    name: 'Summer Cherries',
    price: '3.99$',
    popular: false,
    burningTime: '100-125',
    dimension: '5cm x 5cm',
    weight: 200,
  },
  {
    name: 'Clean Lavander',
    price: '6.99$',
    popular: false,
    burningTime: '80-85',
    dimension: '12cm x 8cm',
    weight: 600,
  },
];

const feedbacks = [
  {
    star: [1, 1, 1, 1, 0],
    comment: 'I love it! No more air fresheners',
    name: 'Luisa',
  },
  {
    star: [1, 1, 1, 1, 1],
    comment: 'Recommended for everyone',
    name: 'Eduardo',
  },
  {
    star: [1, 1, 1, 1, 0],
    comment: 'Looks very natural, the smell is awesome',
    name: 'Mart',
  },
];

const cart = [];

const insertHtml = function (index, name, price) {
  const html = `
  <div class="products__card" data-index="${index}">
    <button class="btn-reset products__btn">
        <div class="products__img"><img src="./images/product-${
          index + 1
        }.png" alt="product"></div>
        <div class="products__info">
        <h3 class="products__name">${name}</h3>
        <span class="products__price">${price}</span>
  </div>
    </button>
  </div>
    `;
  return html;
};

const productCard = function (products) {
  products.map((product, index) => {
    productContent.insertAdjacentHTML(
      'beforeend',
      insertHtml(index, product.name, product.price)
    );
  });
};

productCard(products);

const feedbacksCard = function (feedbacks) {
  feedbacks.map((feedback, index) => {
    const star = feedback.star;
    const comment = feedback.comment;
    const name = feedback.name;
    const calcStar = star.map((num) => (num > 0 ? 'star' : 'half-star'));
    const html = `
    <div class="testimonials__card">
    <img src="./images/person-${
      index + 1
    }.png" alt="person" class="testimonials__profile">
    <div class="testimonials__img"><img src="./images/${
      calcStar[0]
    }.png" alt="star"
            class="testimonials__stars"><img src="./images/${
              calcStar[1]
            }.png" alt="star"
            class="testimonials__stars"><img src="./images/${
              calcStar[2]
            }.png" alt="star"
            class="testimonials__stars"><img src="./images/${
              calcStar[3]
            }.png" alt="star"
            class="testimonials__stars"><img src="./images/${
              calcStar[4]
            }.png" alt="star"
            class="testimonials__stars"></div>
    <q class="testimonials__comment">${comment}</q>
    <h4 class="testimonials__name">${name}</h4>
    </div>
    `;
    testimonialsContent.insertAdjacentHTML('beforeend', html);
  });
};

feedbacksCard(feedbacks);

const calcDisplay = function (value1, value2, selector, value3) {
  main.style.display = value1;
  headerBottom.style.display = value2;
  selector.style.display = value3;
};

const expandCart = function (index, name, price, number) {
  const html = `
        <div class="cart-product" data-number=${index}>
          <div class="cart-product__first">
                            <div class="cart-product__info">
                                <img class="cart-product__img" src="./images/product-${
                                  +index + 1
                                }.png" alt="product">
                                <div class="cart-product__text">
                                    <h3 class="title product__title product__title--name">${name}®</h3>
                                    <button class="btn-reset cart__button cart__button--remove">Remove</button>
                                </div>
                            </div>
                        </div>
                        <div class="cart-product__second cart-product__second--card">
                            <h4 class="cart-product__price">${price}</h4>
                            <h4 class="cart-product__quantity">${number}</h4>
                            <h4 class="cart-product__total">${
                              parseFloat(price) * number
                            }</h4>
                        </div>
                    </div>
      `;
  return html;
};

const expandProduct = function (index, scrollTo) {
  const product = products[index];
  calcDisplay('none', 'none', productContainer, 'block');
  header.scrollIntoView({ behavior: 'smooth' });
  const html = `
    <button class="btn-reset product-container__btn">
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
        class="bi bi-arrow-left" viewBox="0 0 16 16">
        <path fill-rule="evenodd"
            d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
    </svg>
    </button>
    <div class="product__row--1">
                <div class="product__img"><img src="./images/full-product-${
                  +index + 1
                }.png" alt="product"></div>
                <div class="product__info">
                    <h3 class="title product__title">${
                      product.name
                    } Candleaf®</h3>
                    <div class="product__buy">
                    <span class="product-info__price">${product.price}</span>
                    <div class="product__quantity">
                        <button class="btn-reset product-quantity__btn product-quantity__btn--plus">+</button>
                        <span class="product-quantity__number"></span>
                        <button class="btn-reset product-quantity__btn product-quantity__btn--minus">-</button>
                    </div>
                    </div>
                    <button class="btn btn-reset product__btn">
                        <svg width="25" class="product__svg" height="24" viewBox="0 0 25 24" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_703_608)">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M0.761475 2.25C0.761475 2.05109 0.840946 1.86032 0.982407 1.71967C1.12387 1.57902 1.31573 1.5 1.51578 1.5H3.77871C3.94697 1.50005 4.11039 1.55603 4.24296 1.65904C4.37554 1.76205 4.46968 1.90618 4.5104 2.0685L5.12139 4.5H22.6365C22.748 4.50007 22.8582 4.52474 22.959 4.57223C23.0598 4.61972 23.1488 4.68885 23.2195 4.77465C23.2902 4.86044 23.3409 4.96076 23.3679 5.06838C23.3949 5.176 23.3976 5.28823 23.3757 5.397L21.8671 12.897C21.8341 13.0605 21.7472 13.2085 21.6201 13.3174C21.4931 13.4264 21.3331 13.4901 21.1656 13.4985L6.98906 14.2065L7.42203 16.5H20.3735C20.5736 16.5 20.7655 16.579 20.9069 16.7197C21.0484 16.8603 21.1278 17.0511 21.1278 17.25C21.1278 17.4489 21.0484 17.6397 20.9069 17.7803C20.7655 17.921 20.5736 18 20.3735 18H6.79596C6.6201 17.9998 6.44983 17.9386 6.31457 17.8268C6.17932 17.7151 6.08758 17.5599 6.05522 17.388L3.7938 5.4105L3.19035 3H1.51578C1.31573 3 1.12387 2.92098 0.982407 2.78033C0.840946 2.63968 0.761475 2.44891 0.761475 2.25ZM5.44121 6L6.70846 12.7185L20.5033 12.03L21.7162 6H5.44121ZM8.30458 18C7.50435 18 6.73691 18.3161 6.17106 18.8787C5.60522 19.4413 5.28733 20.2044 5.28733 21C5.28733 21.7956 5.60522 22.5587 6.17106 23.1213C6.73691 23.6839 7.50435 24 8.30458 24C9.1048 24 9.87224 23.6839 10.4381 23.1213C11.0039 22.5587 11.3218 21.7956 11.3218 21C11.3218 20.2044 11.0039 19.4413 10.4381 18.8787C9.87224 18.3161 9.1048 18 8.30458 18ZM18.8649 18C18.0647 18 17.2972 18.3161 16.7314 18.8787C16.1656 19.4413 15.8477 20.2044 15.8477 21C15.8477 21.7956 16.1656 22.5587 16.7314 23.1213C17.2972 23.6839 18.0647 24 18.8649 24C19.6651 24 20.4326 23.6839 20.9984 23.1213C21.5643 22.5587 21.8822 21.7956 21.8822 21C21.8822 20.2044 21.5643 19.4413 20.9984 18.8787C20.4326 18.3161 19.6651 18 18.8649 18ZM8.30458 19.5C7.90446 19.5 7.52074 19.658 7.23782 19.9393C6.9549 20.2206 6.79596 20.6022 6.79596 21C6.79596 21.3978 6.9549 21.7794 7.23782 22.0607C7.52074 22.342 7.90446 22.5 8.30458 22.5C8.70469 22.5 9.08841 22.342 9.37133 22.0607C9.65425 21.7794 9.8132 21.3978 9.8132 21C9.8132 20.6022 9.65425 20.2206 9.37133 19.9393C9.08841 19.658 8.70469 19.5 8.30458 19.5ZM18.8649 19.5C18.4648 19.5 18.0811 19.658 17.7982 19.9393C17.5152 20.2206 17.3563 20.6022 17.3563 21C17.3563 21.3978 17.5152 21.7794 17.7982 22.0607C18.0811 22.342 18.4648 22.5 18.8649 22.5C19.265 22.5 19.6488 22.342 19.9317 22.0607C20.2146 21.7794 20.3735 21.3978 20.3735 21C20.3735 20.6022 20.2146 20.2206 19.9317 19.9393C19.6488 19.658 19.265 19.5 18.8649 19.5Z"
                                    fill="white" />
                            </g>
                            <defs>
                                <clipPath id="clip0_703_608">
                                    <rect width="24.1379" height="24" fill="white" transform="translate(0.761475)" />
                                </clipPath>
                            </defs>
                        </svg>
                        + Add to cart
                    </button>
                </div>
            </div>
            <div class="product__row--2">
                <div class="product__description">
                    <span class="product-description__span"><span class="bold">Wax</span>: Top grade Soy wax that
                        delivers a smoke less,
                        consistent burn</span>
                    <span class="product-description__span"><span class="bold">Fragrance</span>: Premium quality
                        ingredients with natural
                        essential oils</span>
                    <span class="product-description__span"><span class="bold">Burning Time</span>: ${
                      product.burningTime
                    } hours 
                    <span class="product-description__new">
                    <span class="bold"> Dimension</span>: ${product.dimension}
                    </span>
                    <span class="product-description__new">
                    <span class="bold"> Weight</span>: ${
                      product.weight
                    }g </span>
                    </span>
                    </div>
                    <div class="product__shipping">
                        <p class="product-shipping__description">
                            All hand-made with natural soy wax, Candleaf is made for your pleasure moments.
                            <span class="product-shipping__span">
                                FREE SHIPPING
                            </span>
                        </p>
                    </div>
                </div>        
        <div class="loader-container">
        <div class="loader"></div>
        <div class="loader__add">
        <p class="loader__description">Item was added to your cart! ✅</p>
        <button class="btn btn-reset loader__btn">Continue</button>
        </div>
        </div>
        `;

  productContainer.insertAdjacentHTML('beforeend', html);

  const quantity = document.querySelector('.product-quantity__number');
  const loaderContainer = document.querySelector('.loader-container');
  const loader = document.querySelector('.loader');
  const loaderAdd = document.querySelector('.loader__add');
  const loaderBtn = document.querySelector('.loader__btn');

  document
    .querySelector('.product-container__btn')
    .addEventListener('click', function () {
      calcDisplay('block', 'flex', productContainer, 'none');
      productContainer.innerHTML = '';
      scrollTo.scrollIntoView({ behavior: 'smooth' });
    });

  let number = 1;
  quantity.textContent = number;

  let subTotal = function () {
    return cart
      .map((product) => product.total)
      .reduce((accumulator, total) => accumulator + total, 0);
  };

  document
    .querySelector('.product-quantity__btn--plus')
    .addEventListener('click', function () {
      number++;
      quantity.textContent = +number;
    });

  document
    .querySelector('.product-quantity__btn--minus')
    .addEventListener('click', function () {
      number <= 1 || number--;
      quantity.textContent = +number;
    });

  document
    .querySelector('.product__btn')
    .addEventListener('click', function () {
      cart.push({
        name: product.name,
        price: product.price,
        quantity: number,
        total: parseFloat(product.price) * number,
        index: index,
      });
      loaderContainer.style.display = 'flex';
      setTimeout(function () {
        loader.style.display = 'none';
        loaderAdd.style.display = 'flex';
      }, 1000);
      cartDetails.insertAdjacentHTML(
        'beforeend',
        expandCart(index, product.name, product.price, number)
      );

      document.querySelector('.cart-conclusion__title--subtotal').textContent =
        subTotal().toFixed(2);
    });

  cartContainer.addEventListener('click', function (event) {
    const cartProduct = event.target.closest('.cart-product');

    cartProduct?.addEventListener('click', function (event) {
      if (event.target.closest('.cart__button--remove')) {
        const { number } = this.dataset;
        const removingTotal = cart.findIndex((val) => val.index === number);
        const { total } = cart[removingTotal];
        let totalNum = subTotal();
        totalNum -= total;
        document.querySelector(
          '.cart-conclusion__title--subtotal'
        ).textContent = totalNum.toFixed(2);
        cart.splice(removingTotal, 1);
        this.parentNode.removeChild(cartProduct);
      }
    });
  });

  loaderBtn.addEventListener('click', function () {
    loaderContainer.style.display = 'none';
  });
};

const calcPopular = function (products) {
  products.map((product, index) => {
    if (product.popular) {
      popularContent.insertAdjacentHTML(
        'beforeend',
        insertHtml(index, product.name, product.price)
      );
    }
  });
};
calcPopular(products);

const calcIndex = function (event, thisContent) {
  const { index } = event.target.closest('.products__card').dataset;
  expandProduct(index, thisContent);
};

const clickEvent = function (selector) {
  selector.addEventListener('click', function (event) {
    const thisContent = this;
    productContainer.innerHTML = '';
    calcIndex(event, thisContent);
  });
};

clickEvent(productContent);
clickEvent(popularContent);

const burgerActive = function (property, value, curTarget) {
  property.style.display = 'block';
  headerList.style.display = value;
  curTarget.style.display = 'none';
};

burgerOpen.addEventListener('click', function (event) {
  burgerActive(burgerClose, 'flex', event.currentTarget);
  headerList.classList.add('active');
});

burgerClose.addEventListener('click', function (event) {
  burgerActive(burgerOpen, 'none', event.currentTarget);
  headerList.classList.remove('active');
});

cartBtn.addEventListener('click', function () {
  calcDisplay('none', 'none', cartContainer, 'block');
  if (getComputedStyle(productContainer).display === 'block') {
    productContainer.style.display = 'none';
  }
  header.scrollIntoView({ behavior: 'smooth' });
  if (cart.length === 0) {
    document.querySelector('.cart__title').textContent =
      "You haven't added items to your cart yet";
  } else {
    document.querySelector('.cart__title').textContent = 'Your cart items';
  }
});

cartBtnBack.addEventListener('click', function () {
  calcDisplay('block', 'flex', cartContainer, 'none');
  productContent.scrollIntoView({ behavior: 'smooth' });
});
