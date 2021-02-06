// editors_choice
import refs from './refs'
import galleryHomePage from '../templates/gallery-template-home-page.hbs'
import savesToLocalStorage from './saves-to-local-storage'


let page = 1

function getFetch(page) {
   const KEY = '14396786-a714bdf8d854f524afdc45598';
   return fetch(`https://pixabay.com/api/?key=${KEY}&image_type=photo&orientation=horizontal&page=${page}&per_page=15&editors_choice=true`)
       .then(response => response.json())
}

export default function fetchHomePage() {
    page = 1
    getFetch().then(data => {
        console.log(data);
            refs.galeryTitle.textContent = 'The best photos according to the editors.'
            refs.galeryTitle.classList.remove('error')
            
            const markup = galleryHomePage(data.hits)
        refs.ulGallery.insertAdjacentHTML('beforeend', markup)
        refs.hideSpiner.classList.remove('loader')
        savesToLocalStorage()



    var items = $(".list-wrapper .list-item");
    var numItems = items.length;
    var perPages = 15;

    items.slice(perPages).hide();
       
    $('#pagination-container').pagination({
        items: `${data.totalHits}`,
        itemsOnPage: perPages,
        edges: 1,
        prevText: "&laquo;",
        nextText: "&raquo;",
         cssStyle: 'light-theme',
        onPageClick: function (pageNumber) {
            getFetch(pageNumber).then(data => {
            const markup = galleryHomePage(data.hits)
                refs.ulGallery.innerHTML = markup
                 savesToLocalStorage()
            })
        }
    });
       })
           
}




