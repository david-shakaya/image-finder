import refs from './refs'
import activePages from './activePages'
import savedPictures from '../templates/saved-pictures-template.hbs'
// import loadStorage from './saves-to-local-storage'

import { savesToLocalStorage, loadFromLocalStorage } from './saves-to-local-storage'


const sevedPicture = []




refs.hideSpiner.classList.remove('loader')
refs.buttonHeaderSave.addEventListener('click', renderPageOnClick)

function renderPageOnClick(e) {
    e.preventDefault()
    loadFromLocalStorage()
    const addedToSaved = document.querySelectorAll('.box-overlay ');

    const getFromLocal = localStorage.getItem('sesion')
    if (getFromLocal) {
        const parsedSettings = JSON.parse(getFromLocal);
        console.log(parsedSettings);

        parsedSettings.forEach(el => sevedPicture.push({ url: el.url, id: el.id }))
    }
    activePages.isActiveHomePage = false
    refs.ulGallery.innerHTML = ''
    refs.paginationWrapper.innerHTML = ''
    refs.galeryTitle.textContent = 'Your saved photos'
    const markup = savedPictures(sevedPicture)
    refs.ulGallery.innerHTML = markup
}


// export default getFromStorage 