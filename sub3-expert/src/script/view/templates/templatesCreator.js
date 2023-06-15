/* eslint-disable max-len */
import CONFIG from '../../global/config';

const RestaurantDetailTemplate = (restaurant) => `
 <div class = "detail-resto">
  <h2 class="resto-title">${restaurant.name}</h2>
  <img class="resto__poster lazyload"
   data-src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}"
   alt="${restaurant.name}" />
  <div class="resto__info">
    <h3>Detail Restaurant</h3>
    <h4>City</h4>
    <p>${restaurant.city}</p>
    <h4>Address</h4>
    <p>${restaurant.address}</p>
    <h4>Rating</h4>
    <p>${restaurant.rating}</p>
  </div>
  <div class="restaurant__overview">
    <h3>Overview</h3>
    <p>${restaurant.description}</p>
  </div>
  <div class="menu">
  <h4>Menu Makanan</h4>
  <p>${restaurant.menus.foods.map((meals) => meals.name).join('<br>')}</p>
  <h4>Menu Minuman</h4>
  <p>${restaurant.menus.drinks.map((drink) => drink.name).join('<br>')}</p>
  </div>
  <h4> Customer review</h4>
  <div class = "customer">
  <p>${restaurant.customerReviews.map((reviews) => `
  <div>
  <div>
    <p>${reviews.name} , ${reviews.date}</p>
  </div>
  <div>
    ${reviews.review}
  </div>
</div>
`)
    .join('<br>')}
  </div>
  </div>
`;
const RestaurantItemTemplate = (restaurant) => `
  <div class="resto-item">
    <div class="resto-item__header">
      <img class="resto-item__header__poster lazyload" alt="${restaurant.name}"
           data-src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}">
      <div class="resto-item__header__rating">
        <p>⭐️<span class="resto-item__header__rating__score">
        ${restaurant.rating}</span></p>
      </div>
    </div>
    <div class="resto-item__content">
      <h3 class = "resto-title"><a href="/#/detail/${restaurant.id}">${restaurant.name}</a></h3>
      <p>${restaurant.description}</p>
    </div>
  </div>
`;

const LikeButtonTemplate = () => `
  <button aria-label="like this movie" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const LikedButtonTemplate = () => `
  <button aria-label="unlike this movie" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  RestaurantItemTemplate, RestaurantDetailTemplate, LikeButtonTemplate, LikedButtonTemplate,
};
