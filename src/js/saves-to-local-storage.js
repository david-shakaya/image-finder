import refs from './refs'



export default function savesToLocalStorage() {
    refs.boxOverlayLocalStor().forEach(el => {
      el.addEventListener('click', savesOnClick)  
    })
}

function savesOnClick(e) {
    console.log(e.target.dataset);
}