/* eslint-disable new-cap */
import RestaurantDBSource from '../../data/data-source';
import LikeButtonPresenter from '../../utils/favbutton-presenter';
import { RestaurantDetailTemplate } from '../templates/templatesCreator';
import UrlParser from '../../routes/url-parser';

const Detail = {
  async render() {
    return `
    <div class="content">
    <h2 class="content__heading">About the Restaurant</h2>
    <div id="restaurant" class="restaurant">
    </div>
    <div id="likeButtonContainer"></div>
  </div>
      `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantDBSource.detailRestaurant(url.id);
    const restaurantContainer = document.querySelector('#restaurant');
    restaurantContainer.innerHTML = RestaurantDetailTemplate(restaurant);

    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: restaurant.id,
        pictureId: restaurant.pictureId,
        name: restaurant.name,
        description: restaurant.description,
        rating: restaurant.rating,
      },
    });
    console.log(restaurant);
  },
};

export default Detail;
