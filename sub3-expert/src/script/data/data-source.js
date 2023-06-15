/* eslint-disable new-cap */
/* eslint-disable require-jsdoc */
import ENDPOINT from '../global/endpoint';

class RestaurantDBSource {
  static async listRestaurants() {
    const response = await fetch(ENDPOINT.listresto);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailRestaurant(id) {
    const response = await fetch(ENDPOINT.DETAIL(id));
    const result = await response.json();
    return result.restaurant;
  }
}

export default RestaurantDBSource;
