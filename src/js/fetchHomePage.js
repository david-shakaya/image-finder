// editors_choice


const KEY = '14396786-a714bdf8d854f524afdc45598';
const perPage = 12
let page = 1
export default function fetchHomePage(query) {
    // queryForPageTwo = query
    page = 1
    // isEndPage = false
    fetch(`https://pixabay.com/api/?key=${KEY}&image_type=photo&orientation=horizontal&page=${page}&per_page=${perPage}&editors_choice=true`)
        .then(response => response.json())
    .then(data => console.log(data))
}