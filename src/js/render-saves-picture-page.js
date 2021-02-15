import refs from './refs';
import activePages from './activePages';
import savedPictures from '../templates/saved-pictures-template.hbs';
// import loadStorage from './saves-to-local-storage'
import {
  savesToLocalStorage,
  loadFromLocalStorage,
} from './saves-to-local-storage';

let sevedPicture = [];

refs.hideSpiner.classList.remove('loader');
refs.buttonHeaderSave.addEventListener('click', renderPageOnClick);

function renderPageOnClick(e) {
  if (refs.wrapperNotFound) {
    refs.wrapperNotFound.classList.remove('img-wrapper-not-found');
  }

  sevedPicture = [];
  e.preventDefault();
  refs.ulGallery.innerHTML = '';
  loadFromLocalStorage();
  const addedToSaved = document.querySelectorAll('.box-overlay ');
  const getFromLocal = localStorage.getItem('sesion');
  if (getFromLocal) {
    const parsedSettings = JSON.parse(getFromLocal);
    console.log(parsedSettings);

    parsedSettings.forEach(el => {
      if (el.url) {
        sevedPicture.push({ url: el.url, id: el.id });
      }
    });
  }
  activePages.isActiveHomePage = false;

  refs.paginationWrapper.innerHTML = '';
  refs.galeryTitle.textContent = 'Your saved photos';
  const markup = savedPictures(sevedPicture);
  refs.ulGallery.innerHTML = markup;
}

// export default getFromStorage
