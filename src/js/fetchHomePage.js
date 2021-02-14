// editors_choice
import refs from './refs';
import galleryHomePage from '../templates/gallery-template-home-page.hbs';
import {
  savesToLocalStorage,
  loadFromLocalStorage,
} from './saves-to-local-storage.js';
import activePage from './activePages';

/*   НУЖНО СНИМАТЬ СЛУШАТЕЛИ С ВИНДОВ И ДОЛЖНО ЗАРАБОТАТЬ*/
// loadFromLocalStorage()
let page = 1;

function getFetch(page) {
  const KEY = '14396786-a714bdf8d854f524afdc45598';

  return fetch(
    `https://pixabay.com/api/?key=${KEY}&image_type=photo&orientation=horizontal&page=${page}&per_page=15&editors_choice=true`,
  ).then(response => response.json());
}

refs.buttonHeaderHome.addEventListener('click', fetchHomePage);

export default function fetchHomePage(e) {
  try {
    if (activePage.isActiveHomePage) {
      e.preventDefault();
      return;
    }

    const input = refs.searchForm.firstElementChild;
    input.value = '';

    refs.hideSpiner.classList.add('loader');
    activePage.isActiveHomePage = true;
    page = 1;
    getFetch().then(data => {
      refs.hideSpiner.classList.remove('loader');
      refs.galeryTitle.textContent =
        'The best photos according to the editors.';
      refs.galeryTitle.classList.remove('error');
      const markup = galleryHomePage(data.hits);
      refs.ulGallery.innerHTML = markup;
      refs.hideSpiner.classList.remove('loader');

      /* -------------------- */

      const options = {
        rootMargin: '100px ',
        threshold: 1.0,
      };

      const onEntry = (entries, observer) => {
        entries.forEach(entry => {
          // тут можно писать логику для проверки вхождения
          const qwe = document.querySelector('.up-arrow-button');
          console.log(entry);
          if (!entry.isIntersecting) {
            qwe.classList.add('up-arrow');
          }
          if (entry.isIntersecting) {
            qwe.classList.remove('up-arrow');
          }
        });
      };

      const observer = new IntersectionObserver(onEntry, options);
      console.log(document.querySelector('.header-nav-container'));
      observer.observe(document.querySelector('.header-nav-container'));

      /* ---------------- */

      pagination(data);
      savesToLocalStorage();
      loadFromLocalStorage();
    });
    e.preventDefault();
  } catch (err) {}
}

function pagination(data) {
  var items = $('.list-wrapper .list-item');
  var numItems = items.length;
  var perPages = 15;

  items.slice(perPages).hide();

  $('#pagination-container').pagination({
    items: `${data.totalHits}`,
    itemsOnPage: perPages,
    edges: 1,
    prevText: '&laquo;',
    nextText: '&raquo;',
    cssStyle: 'light-theme',
    onPageClick: function (pageNumber) {
      getFetch(pageNumber).then(data => {
        const markup = galleryHomePage(data.hits);
        refs.ulGallery.innerHTML = markup;
        activePage.isActiveHomePage = true;

        loadFromLocalStorage();
      });
    },
  });
}

export { activePage };
