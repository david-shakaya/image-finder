// editors_choice
import refs from './refs'
import galleryHomePage from '../templates/gallery-template-home-page.hbs'

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
            refs.galeryTitle.textContent = 'Editors Choice - Stunning images selected by our team'
            refs.galeryTitle.classList.remove('error')
            
            const markup = galleryHomePage(data.hits)
            refs.ulGallery.insertAdjacentHTML('beforeend', markup)
            refs.hideSpiner.classList.remove('loader')



    var items = $(".list-wrapper .list-item");
    var numItems = items.length;
    var perPages = 15;

    items.slice(perPages).hide();

       console.log(window.location.href);
       
    $('#pagination-container').pagination({
        items: `${data.totalHits}`,
        itemsOnPage: perPages,
        prevText: "&laquo;",
        nextText: "&raquo;",
        onPageClick: function (pageNumber) {
            getFetch(pageNumber).then(data => {
            const markup = galleryHomePage(data.hits)
            refs.ulGallery.innerHTML =  markup
            })
        }
    });
       })
           
}




