import * as basicLightbox from 'basiclightbox'

let urlLargeImage = ''

function returnCurentImg(e) {
    console.log(e.target.attributes);

    if (e.target.nodeName === 'DIV') {
        
       urlLargeImage = e.target.attributes[1].value
        const instance = basicLightbox.create(`
    <img src="${urlLargeImage}" width="800" height="600">
`)
instance.show()
    }
}

 export default returnCurentImg