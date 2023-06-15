/* eslint-disable new-cap */
import FavoriteRestaurant from '../../data/favorite-idb';
import { RestaurantItemTemplate } from '../templates/templatesCreator';

const Favorite = {
  async render() {
    return `
    <div class="content">
    <h2 class="content__heading">Your Favorite Place to Eat</h2>
    <div id="restaurant" class="restaurant">

    </div>
  </div>
      `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()

    const restaurant = await FavoriteRestaurant.getAllResto();
    const restaurantContainer = document.querySelector('#restaurant');

    restaurant.forEach((meals) => {
      restaurantContainer.innerHTML += RestaurantItemTemplate(meals);
    });
    if (restaurant.length === 0) {
      restaurantContainer.innerHTML = `
      <div class="resto-item__not__found">Belum terdapat restaurant favorite</div>
    `;
    }
  },
};

export default Favorite;
