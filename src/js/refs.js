 const refs = {
     body: document.querySelector('body'),
     searchForm: document.querySelector('.search-form'),
     ulGallery:document.querySelector('.gallery'),
     hideSpiner: document.querySelector('#hide'),
     galeryTitle: document.querySelector('.galery-title'),
     wrapperNotFound: document.querySelector('#img-wrapper-not-found'),
     boxOverlayLocalStor() {
      return document.querySelectorAll('.box-overlay')  
     } 
}

 export default refs