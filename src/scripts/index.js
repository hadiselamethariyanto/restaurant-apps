import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';
import './component/restaurant-list';
import './component/my-footer';
import App from './views/app';

const data = require('../DATA.json');
const menu = document.querySelector('#menu');
const hero = document.querySelector('.hero');
const main = document.querySelector('main');
const drawer = document.querySelector('#drawer');
const restaurantListElement = document.querySelector('restaurant-list');


const app = new App({
  button: menu,
  drawer: drawer,
  content: main,
});

// hero.addEventListener('click', function() {
//   drawer.classList.remove('open');
// });

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
});


// const getRestaurants = async () => {
//   try {
//     const result = data;
//     showRestaurants(result.restaurants);
//   } catch (message) {
//     fallbackResult(message);
//   }
// };

// const showRestaurants = (restaurants) => {
//   restaurantListElement.restaurants = restaurants;
// };

// const fallbackResult = (message) => {
//   restaurantListElement.renderError(message);
// };

// getRestaurants();

