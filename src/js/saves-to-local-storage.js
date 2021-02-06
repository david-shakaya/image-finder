import refs from './refs'



export default function savesToLocalStorage() {
    refs.boxOverlayLocalStor().forEach(el => {
      el.addEventListener('click', savesOnClick)  
    })
}



function savesOnClick(e) {
    let urlImg = e.target.dataset.imgSaved 
    let idImg = e.target.dataset.imgId

localStorage.setItem(`${idImg}`,`${urlImg}`);


}




