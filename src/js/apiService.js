import galleryTemplate from '../templates/gallery-template.hbs';
import refs from './refs.js'
import {showToastrInfo, showToastrSuccess} from './notifications.js'
import returnCurentImg from './basicLightbox.js'
import activePage from './activePages'
import {savesToLocalStorage, loadFromLocalStorage} from './saves-to-local-storage.js'

const clearDom = () => refs.ulGallery.innerHTML = ''

function fetchQuery(query, page) {
    return fetch(`https://pixabay.com/api/?key=14396786-a714bdf8d854f524afdc45598&image_type=photo&orientation=horizontal&q=${query}&page=${page}&per_page=15`)
        .then(response => {
            refs.hideSpiner.classList.add('loader')
         return   response.json()
        })
}

let page = 1
let queryForPageOne = ""

function fetchImages(query) {
    activePage.isActiveHomePage = false
    console.log(activePage.isActiveHomePage );

    queryForPageOne =query
    page = 1
    fetchQuery(queryForPageOne).then(data => {
       refs.hideSpiner.classList.remove('loader')
        const paginationContainer = document.querySelector('#pagination-container');
        
        paginationContainer.innerHTML = ''
        if (data.hits.length === 0) {
                refs.galeryTitle.textContent = 'Not found! Please specify your request.'
                refs.galeryTitle.classList.add('error')
                refs.wrapperNotFound.classList.add('img-wrapper-not-found')
            } else {
                refs.galeryTitle.classList.remove('error')
                refs.galeryTitle.textContent = `${data.totalHits} images found`
                refs.wrapperNotFound.classList.remove('img-wrapper-not-found')

            }
               const markup = galleryTemplate(data.hits)
        refs.ulGallery.insertAdjacentHTML('beforeend', markup)
            const gallery = document.querySelector('.gallery');
        gallery.addEventListener('click', returnCurentImg)
        pagination(data)
        savesToLocalStorage()
loadFromLocalStorage()
        })
    // window.addEventListener('scroll', fetchImagesNextPages)
}

function pagination(data) {
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
            fetchQuery(queryForPageOne, pageNumber).then(data => {
                refs.hideSpiner.classList.remove('loader')
                const markup = galleryTemplate(data.hits)
                refs.ulGallery.innerHTML = markup
                //  savesToLocalStorage()
                        savesToLocalStorage()
        loadFromLocalStorage()
            })
        }
    });
}


// Scroll Event

// function fetchImagesNextPages(e) {
//     if (isEndPage) {
//         refs.hideSpiner.classList.remove('loader')
//         return
//     }
//     const { scrollHeight, scrollTop, clientHeight } = document.documentElement;
//     if (scrollTop + clientHeight > scrollHeight - 1) {
//         page += 1
//         fetch(`https://pixabay.com/api/?key=${KEY}&image_type=photo&orientation=horizontal&q=${queryForPageTwo}&page=${page}&per_page=${perPage}`)
//             .then(response => response.json())
//             .then(data => {
//                 if (data.hits.length <= 11) {
//                     isEndPage = true
//                 }
//                 refs.hideSpiner.classList.add('loader')
//                 const markupNextPage = galleryTemplate(data.hits)
//                 refs.ulGallery.insertAdjacentHTML('beforeend', markupNextPage)
//                 const gallery = document.querySelector('.gallery');
//                 console.log(gallery);
//                 gallery.addEventListener('click', returnCurentImg)
//             })
//     }
//         refs.hideSpiner.classList.remove('loader')
// }

export  { fetchImages,clearDom, /* fetchImagesNextPages */ }

