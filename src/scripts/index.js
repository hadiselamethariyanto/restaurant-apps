import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';
import './component/restaurant-list';
import './component/menu-list';
import './component/review-list';
import './component/my-footer';
import App from './views/app';
import swRegister from './utils/sw-register';

const menu = document.querySelector('#menu');
const main = document.querySelector('main');
const drawer = document.querySelector('#drawer');

const app = new App({
  button: menu,
  drawer: drawer,
  content: main,
});


window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
