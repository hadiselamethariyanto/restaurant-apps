import './restaurant-item.js';

class RestaurantList extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({mode:'open'});
  }
  set restaurants(restaurants){
    this._restaurants = restaurants;
    this.render();
  }
  render(){
      this.shadowDOM.innerHTML = ` 
      <style>
          * {
              box-sizing: border-box;
          }
          :host{
              margin: 32px auto auto;
              text-align: left;
              display: grid;
              grid-row-gap: 16px;            
          }

          @media screen and (min-width: 901px) {                          
            :host {
              display: grid;
              grid-template-columns: 1fr 1fr 1fr;
              grid-column-gap: 10px;
              grid-row-gap: 16px;                
            }
          }

          @media screen and (min-width: 700px) and (max-width: 900px) {
            :host {
              display: grid;
              grid-template-columns: 1fr 1fr;
              grid-column-gap: 10px;
              grid-row-gap: 16px;
            }
          }
      </style>`;
    this._restaurants.forEach(restaurant => {
        const restaurantItemElement = document.createElement('restaurant-item');
        restaurantItemElement.restaurant = restaurant;
        this.shadowDOM.appendChild(restaurantItemElement);
    });
  }

    renderError(message) {
        this.shadowDOM.innerHTML = `
          <style>
            .placeholder {
              font-weight: lighter;
              color: black;
              margin: auto;
              width: 50%;
              -webkit-user-select: none;
              -moz-user-select: none;
              -ms-user-select: none;
              user-select: none;
            }
          </style>
        `;
    
        this.shadowDOM.innerHTML += `<h2 class="placeholder">${message}</h2>`;
    }
}

customElements.define('restaurant-list', RestaurantList);
