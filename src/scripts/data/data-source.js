import API_ENDPOINT from '../globals/api-endpoint';

class DataSource {
  static async getRestaurants() {
    const response = await fetch(API_ENDPOINT.LIST_RESTAURANT);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async getDetailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL_RESTAURANT(id));
    return response.json();
  }
}

export default DataSource;
