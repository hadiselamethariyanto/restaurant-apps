import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';
import './component/restaurant-list';
import './component/my-footer';

const data = require('../DATA.json');
const menu = document.querySelector('#menu');
const hero = document.querySelector('.hero');
const main = document.querySelector('main');
const drawer = document.querySelector('#drawer');
const restaurantListElement = document.querySelector('restaurant-list');


menu.addEventListener('click', function(event) {
  drawer.classList.toggle('open');
  event.stopPropagation();
});

hero.addEventListener('click', function() {
  drawer.classList.remove('open');
});

main.addEventListener('click', function() {
  drawer.classList.remove('open');
});

const getRestaurants = async () => {
  try {
    const result = data;
    showRestaurants(result.restaurants);
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

