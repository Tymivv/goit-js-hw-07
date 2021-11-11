
import { galleryItems } from './gallery-items.js';

const galleryRef = document.querySelector('.gallery');

const gal = galleryItems
.map(
    ({ preview, original, description }) => `
    <a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" title="${description}" />
    </a>`,
)
.join('');
galleryRef.insertAdjacentHTML('beforeend', gal);

var lightbox = new SimpleLightbox('.gallery a', {
captionsData: 'alt',
captionDelay: 250,
});
