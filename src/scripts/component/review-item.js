class ReviewItem extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({mode: 'open'});
  }

  set review(review) {
    this._review = review;
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
                justify-content: flex-start;            
            }
            
            .post-item__content {
              padding: 0 1rem;
            }

            .post-item__thumbnail_container{
              position:relative;
            }
            
            .post-item__thumbnail {
              width: 40px;
              height: 40px;
              border-radius: .75rem;
            }        
                            
                            
            .post-item__title {
              font-weight: 500;
              font-size: 16px;
              margin: 0;
              transition: 0.3s opacity;
            }

            .post-item__date{
              font-size: .75rem;
              font-weight: 400;
              font-style: italic;
              margin: 0;
            }
            
            .post-item__title:hover {
              opacity: 0.5;
            }
                
            .post-item__title a {
              text-decoration: none;
              color: inherit;
            }
            
            .post-item__review {
              margin-top: 16px;
              font-size: 1rem;
              line-height: 1.5em;
            }
        </style>

        <div class="post-item__thumbnail_container">
            <img class="post-item__thumbnail"
            src="/images/user.png"
            alt="${this._review.name}">
        </div>     
        
        <div class="post-item__content">
            <h1 class="post-item__title">${this._review.name}</a></h1>
            <p class="post-item__date">${this._review.date}<p/>
            <p class="post-item__review">${this._review.review}</p>
        </div>
             
    `;
  }
}

customElements.define('review-item', ReviewItem);
