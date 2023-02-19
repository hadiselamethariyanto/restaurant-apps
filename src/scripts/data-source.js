const data = require('../DATA.json');

class DataSource {
    static getRestaurants() {
      return fetch(data)
          .then(response => {
            console.log(response);
            return response.json();
          })
          .then(responseJson => {
            if (responseJson.restaurants.length !==0) {
              return Promise.resolve(responseJson.restaurants);
            } else {
              return Promise.reject(`Data tidak ditemukan`);
            }
          });
    }
  }
  
  export default DataSource;