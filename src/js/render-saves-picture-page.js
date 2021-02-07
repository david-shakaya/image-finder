import refs from './refs'
import activePages from './activePages'
import savedPictures from '../templates/saved-pictures-template.hbs'
import loadStorage from './saves-to-local-storage'

const q = loadStorage('5965850')
const theme = localStorage.getItem('5965850');
console.log(theme)


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