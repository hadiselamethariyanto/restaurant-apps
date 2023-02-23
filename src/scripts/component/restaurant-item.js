import CONFIG from '../globals/config';

class RestaurantItem extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({mode: 'open'});
  }

  set restaurant(restaurant) {
    this._restaurant = restaurant;
    this.render();
  }

  render() {
    const description = this._restaurant.description;
    const trimmedDescription = description.length> 300 ? description.substring(0, 300)+'...': description;
    this.shadowDOM.innerHTML = `
          <style>
              * {
                  box-sizing: border-box;
              }

              @media screen and (min-width: 650px) {                
                .post-item__content {
                  padding: 16px 32px 32px 32px;
                }
              
                .post-item__title {
                  font-size: 18px;
                }
              
                .post-item__description {
                  font-size: 14px;
                }
              }

              :host{
                  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                  width: 100%;
                  border-radius: 5px;
                  overflow: hidden;                  
              }
              
                .post-item__content {
                  padding: 16px;
                }

                .post-item__thumbnail_container{
                  position:relative;
                }
                
                .post-item__thumbnail {
                  width: 100%;
                }        
                
                .post-item__city{
                  position:absolute;
                  top:0;
                  left:0;
                  color:white;
                  padding: 0.5em 2em;
                  font-size:16px;
                  border-bottom-right-radius: 1em;
                  background-color: #000000a8;
                }
                                  
                .post-item__title {
                  font-weight: 500;
                  font-size: 16px;
                  margin-top: 16px;
                  transition: 0.3s opacity;
                }

                .post_item__rating{
                  font-size:18px;
                  font-weight: 500;
                }
                
                .post-item__title:hover {
                  opacity: 0.5;
                }
                
                .post-item__title a {
                  text-decoration: none;
                  color: inherit;
                }
                
                .post-item__description {
                  margin-top: 16px;
                  font-size: 12px;
                  line-height: 1.5em;
                }
          </style>
          <div class="post-item__thumbnail_container">
              <span class="post-item__city"><p>${this._restaurant.city}</p></span>                  
              <img class="post-item__thumbnail"
              src="${CONFIG.BASE_IMAGE_URL_MEDIUM+this._restaurant.pictureId}"
              alt="${this._restaurant.name}">
          </div>
          <div class="post-item__content">
              <p class="post-item__rating"> Rating ${this._restaurant.rating}</p>
              <h1 class="post-item__title"><a href="#/detail/${this._restaurant.id}">${this._restaurant.name}</a></h1>
              <p class="post-item__description">${trimmedDescription}</p>
          </div>           
      `;
  }
}

customElements.define('restaurant-item', RestaurantItem);
