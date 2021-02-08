import refs from './refs'
import activePages from './activePages'
import savedPictures from '../templates/saved-pictures-template.hbs'
// import loadStorage from './saves-to-local-storage'




refs.hideSpiner.classList.remove('loader')
refs.buttonHeaderSave.addEventListener('click', renderPageOnClick)

function renderPageOnClick(e) {
    e.preventDefault()
    activePages.isActiveHomePage = false
    refs.ulGallery.innerHTML = ''
    refs.paginationWrapper.innerHTML = ''
    refs.galeryTitle.textContent = 'Your saved photos'
    const markup = savedPictures(q)
    // refs.ulGallery.insertAdjacentHTML('beforeend', markup)
}


// export default getFromStorage 