 const refs = {
     body: document.querySelector('body'),
     searchForm: document.querySelector('.search-form'),
     buttonHeaderHome: document.querySelector('.button-header-home'),
     ulGallery:document.querySelector('.gallery'),
     hideSpiner: document.querySelector('#hide'),
     galeryTitle: document.querySelector('.galery-title'),
     wrapperNotFound: document.querySelector('#img-wrapper-not-found'),
     boxOverlayLocalStor() {
      return document.querySelectorAll('.box-overlay')  
     },
     buttonHeaderSave: document.querySelector('.button-header-save'),
     paginationWrapper:document.querySelector('.pagination-wrapper'),
}

 export default refs