import DataSource from '../../data/data-source';

const Home = {
  async render() {
    return `<section class="content">
    <div class="latest"><h1 tabindex="0" class="latest__label">Restaurants</h1>
      <restaurant-list></restaurant-list>
    </div>
    </section>`;
  },

  async afterRender() {
    const restaurantListElement = document.querySelector('restaurant-list');

    const getRestaurants = async () => {
      try {
        const result = await DataSource.getRestaurants();
        showRestaurants(result);
      } catch (message) {
        fallbackResult(message);
      }
    };

    const showRestaurants = (restaurants) => {
      restaurantListElement.restaurants = restaurants;
    };

    const fallbackResult = (message) => {
      restaurantListElement.renderError(message);
    };

    getRestaurants();
  },
};


export default Home;
