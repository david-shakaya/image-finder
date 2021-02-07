import refs from './refs'
import activePages from './activePages'

refs.hideSpiner.classList.remove('loader')
refs.buttonHeaderSave.addEventListener('click', renderPageOnClick)

function renderPageOnClick(e) {
    e.preventDefault()
    activePages.isActiveHomePage = false
    refs.ulGallery.innerHTML = ''
    refs.paginationWrapper.innerHTML = ''
    refs.galeryTitle.textContent = 'Your saved photos'
}

// export default getFromStorage 