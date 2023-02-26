import DataSource from '../../data/data-source';
import UrlParser from '../../routes/url-parser';
import {createDetailRestaurantView} from '../templates/template-html';

const Detail = {
  async render() {
    return `<section class="detail">
      <div id="detail-resto"></div>
      <div class="tab">
        <button class="tablinks" id="tab-menu-button">Menu</button>
        <button class="tablinks" id="tab-review-button">Review</button>
      </div>
      <div class="resto_menus tabcontent" id="menus">
        <h2>Foods</h2>
        <menu-list id ="foods"></menu-list>
        <h2>Drinks</h2>
        <menu-list id ="drinks"></menu-list>
      </div>
      <div class="tabcontent" id="reviews">
        <h2>Reviews</h2>
        <review-list></review-list>
      </div>            
    </section>`;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const menuListElement = document.getElementById('foods');
    const drinksElement = document.getElementById('drinks');
    const reviewsElement = document.querySelector('review-list');
    const detailRestoElement = document.getElementById('detail-resto');

    const getDetailRestaurant = async () => {
      try {
        const result = await DataSource.getDetailRestaurant(url.id);
        detailRestoElement.innerHTML += createDetailRestaurantView(result);
        showMenu(result.menus);
        reviewsElement.reviews = result.customerReviews;
      } catch (message) {
        fallbackResult(message);
      }
    };

    const showMenu = (menus) => {
      menuListElement.menus = menus.foods;
      drinksElement.menus = menus.drinks;
    };

    const fallbackResult = (message) => {
      menuListElement.renderError(message);
    };

    const openTab = (evt, tabName) =>{
      let i;
      const tabcontent = document.getElementsByClassName('tabcontent');
      for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = 'none';
      }
      const tablinks = document.getElementsByClassName('tablinks');
      for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(' active', '');
      }
      document.getElementById(tabName).style.display = 'block';
      evt.currentTarget.className += ' active';
    };

    const tabMenuButton = document.getElementById('tab-menu-button');
    const tabReviewButton = document.getElementById('tab-review-button');

    tabMenuButton.addEventListener('click', (e)=>{
      e.preventDefault();
      openTab(e, 'menus');
    });

    tabReviewButton.addEventListener('click', (e)=>{
      e.preventDefault();
      openTab(e, 'reviews');
    });

    getDetailRestaurant();
  },
};

export default Detail;
