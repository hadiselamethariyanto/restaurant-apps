import CONFIG from '../../globals/config';

const createDetailRestaurantView = (detail) => `
    <h1 tabindex="0" class="latest__label">Detail Restaurant</h1>
    <div class="resto__container">
        <img src="${CONFIG.BASE_IMAGE_URL_MEDIUM + detail.pictureId}"></img>
        <div class="resto__info">
            <h2>${detail.name}</h2>
            <span><i class="fa fa-star"></i> ${detail.rating}</span>
            <p>${detail.categories.map(
      (category) => category.name+`, `).join('')}</p>
            <p>${detail.address +', '+ detail.city}</p>
        </div>
    </div>
    <div class="resto__description">
      <h2>Deskripsi</h2>
      <p>${detail.description}</p>
    </div>    
`;

export {createDetailRestaurantView};
