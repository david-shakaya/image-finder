// editors_choice
import refs from './refs'
import galleryHomePage from '../templates/gallery-template.hbs'


const KEY = '14396786-a714bdf8d854f524afdc45598';
const perPage = 12
let page = 1
export default function fetchHomePage() {
    page = 1
    fetch(`https://pixabay.com/api/?key=${KEY}&image_type=photo&orientation=horizontal&page=${page}&per_page=${perPage}&editors_choice=true`)
        .then(response => response.json())
        .then(data => {
    
            const markup = galleryHomePage(data.hits)
            refs.ulGallery.insertAdjacentHTML('beforeend', markup)
            refs.hideSpiner.classList.remove('loader')
        })
           
}