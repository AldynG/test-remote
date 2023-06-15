/* eslint-disable new-cap */
import RestaurantDBSource from '../../data/data-source';
import { RestaurantItemTemplate } from '../templates/templatesCreator';

const Home = {
  async render() {
    return `
    
    <div class="content">
      <h2 class="content__heading">Available Restaurant</h2>
      <div id="restaurant" class="restaurant">
      </div>
    </div>
  
      `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const restaurant = await RestaurantDBSource.listRestaurants();
    const restaurantContainer = document.querySelector('#restaurant');
    restaurant.forEach((meals) => {
      restaurantContainer.innerHTML += RestaurantItemTemplate(meals);
    });
    console.log(restaurant);
  },
};

export default Home;
