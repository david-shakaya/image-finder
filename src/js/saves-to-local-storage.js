import refs from './refs'
const sesion = []


 function savesToLocalStorage() {
    window.document.addEventListener('click', savesOnClick)
}

let pars = 0;

function savesOnClick(e) {
  if (e.target.className === 'box-overlay') {
    console.log(e.target.className);

    let idImg = e.target.dataset.imgId

    console.log(idImg);

  const dataInvis =  e.target.dataset.added = 'invisible'
    let urlImg = e.target.dataset.imgSaved
    

// если в хран чтото есть перебираем и пушим.      
    if (sesion.length > 0) {
      sesion.find(el => {
        if (el.id !== idImg) {
          console.log(idImg);
          sesion.push({ url: urlImg, id: idImg, isVisible: dataInvis })
          console.log('ТУТ ПРОБЛЕМА');
        }
      })
    } else {
      console.log('sdss');
      sesion.push({ url: urlImg, id: idImg,isVisible:dataInvis })
    }
    console.log(sesion);
  localStorage.setItem(`sesion`, JSON.stringify(sesion)); 
  e.target.classList.add('addedToSaved')
  }
  

}

function loadFromLocalStorage() {
    const getFromLocal = localStorage.getItem('sesion')
  try {
    if (getFromLocal) {
      const parsedSettings = JSON.parse(getFromLocal);
       parsedSettings.find(el => {
        sesion.push(el)
      })

    parsedSettings.map(el => {
        const elFromLocal = document.querySelector(`#${el.id}`);
        elFromLocal.classList.add('addedToSaved')
        // console.log(el.id);
    })

}
}catch{}
 }

// parsedSettings.forEach(el => {
//     console.log(el.url);
//   })

  
// console.log(parsedSettings);



// const saveStorage = (key, value) => {
//   try {
//     const serializedState = JSON.stringify(value);
//     localStorage.setItem(key, serializedState);
//   } catch (err) {
//     console.error('Set state error: ', err);
//     }
//   };

//   const loadStorage = key => {
//   try {
//     const serializedState = localStorage.getItem(key);

//     return serializedState === null ? undefined : JSON.parse(serializedState);
//   } catch (err) {
//     console.error('Get state error: ', err);
//   }
// };

export {savesToLocalStorage,loadFromLocalStorage}
