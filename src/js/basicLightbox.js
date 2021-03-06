import * as basicLightbox from 'basiclightbox';

let urlLargeImage = '';

function returnCurentImg(e) {
  console.log(e.target.attributes);

  if (e.target.nodeName === 'IMG') {
    urlLargeImage = e.target.attributes[2].value;
    const instance = basicLightbox.create(`
    <img src="${urlLargeImage}" width="800" height="600">
`);
    instance.show();
  }
}

export default returnCurentImg;
