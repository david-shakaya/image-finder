import './sass/main.scss';
import '../node_modules/basiclightbox/dist/basiclightbox.min.css';
import refs from './js/refs';
import { fetchImages, clearDom } from './js/apiService';
import '../node_modules/toastr/build/toastr.css';
import debounce from 'lodash.debounce';
import fetchHomePage from './js/fetchHomePage';
import './js/render-saves-picture-page';
import activePages from './js/activePages';
import './js/observer-scroll';

const input = refs.searchForm.firstElementChild;
input.addEventListener('input', debounce(getsInputValue, 500));

let query = '';
function getsInputValue(e) {
  query = e.target.value;
  if (query === '') {
    activePages.isActiveHomePage = false;
    clearDom();
    input.removeEventListener('input', debounce(getsInputValue, 500));
    fetchHomePage();
    refs.hideSpiner.classList.remove('loader');
    refs.buttonHeaderHome.removeEventListener('click', refetchHomePageOnClick);
    return;
  }
  refs.hideSpiner.classList.add('loader');
  fetchImages(query);
  clearDom();

  if (!activePages.isActiveHomePage) {
    refs.buttonHeaderHome.addEventListener('click', refetchHomePageOnClick);
  }
}

function refetchHomePageOnClick() {
  refs.buttonHeaderHome.removeEventListener('click', refetchHomePageOnClick);
  clearDom();
  fetchHomePage();
  activePages.isActiveHomePage = true;
}

fetchHomePage();
