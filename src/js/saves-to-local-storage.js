import refs from './refs'
const sesion = []

 function savesToLocalStorage() {
    document.addEventListener('click', savesOnClick)
}

let pars;

function savesOnClick(e) {
  if (e.target.className === 'box-overlay') {
    // e.classList ='cls'
    // e.dataset = 's'
    let idImg = e.target.dataset.imgId

    console.log(idImg);

  const dataInvis =  e.target.dataset.added = 'invisible'
   
    
  let urlImg = e.target.dataset.imgSaved
    sesion.push({ url: urlImg, id: idImg,isVisible:dataInvis })
    console.log(sesion);
  localStorage.setItem(`sesion`, JSON.stringify(sesion)); 
  }
  
  e.target.classList.add('addedToSaved')

}

function loadFromLocalStorage() {
    const getFromLocal = localStorage.getItem('sesion')
if (getFromLocal) {
  const parsedSettings = JSON.parse(getFromLocal);
    parsedSettings.map(el => {
        const elFromLocal = document.querySelector(`#${el.id}`);
        elFromLocal.classList.add('addedToSaved')
        // console.log(el.id);
    })
    // const sq = parsedSettings[0].id
    // const el = document.querySelector(`#${sq}`);
    // console.log(el);
}
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
