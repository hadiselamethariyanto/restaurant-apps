class MenuItem extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({mode: 'open'});
  }

  set menu(menu) {
    this._menu = menu;
    this.render();
  }

  render() {
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
                  border-radius: 1rem;
                  overflow: hidden;
                  padding: 1rem;      
                  display: flex;
                  justify-content: space-between;            
              }
              
                .post-item__content {
                  padding: 0px;
                }

                .post-item__thumbnail_container{
                  position:relative;
                }
                
                .post-item__thumbnail {
                  width: 120px;
                  height: 120px;
                  border-radius: .75rem;
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
         
          <div class="post-item__content">
              <h1 class="post-item__title">${this._menu.name}</a></h1>
          </div>
          <div class="post-item__thumbnail_container">
            <img class="post-item__thumbnail"
            src="https://www.yanaya.co.zw/wp-content/uploads/2020/08/79-798754_hoteles-y-centros-vacacionales-dish-placeholder-hd-png.jpg"
            alt="${this._menu.name}">
          </div>           
      `;
  }
}

customElements.define('menu-item', MenuItem);
