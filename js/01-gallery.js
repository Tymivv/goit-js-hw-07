import { galleryItems } from './gallery-items.js';
// Change code below this line

//console.log(galleryItems);
const galleryRef = document.querySelector('.gallery');


const gal = galleryItems.map(({ preview, original, description }) =>
`<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`).join('');
galleryRef.insertAdjacentHTML('beforeend', gal);



galleryRef.addEventListener('click', (e) => {
  e.preventDefault();
  if (e.target.nodeName !== 'IMG') {
    return;
  }
  const instance = basicLightbox.create(`
    <img src="${e.target.dataset.source}" width="800" height="600">`);
  

  instance.show();

})


