import refs from './refs'

const qwe = []

export default function savesToLocalStorage() {
    refs.boxOverlayLocalStor().forEach(el => {
      el.addEventListener('click', savesOnClick)  
    })
}

function savesOnClick(e) {
  let urlImg = e.target.dataset.imgSaved 
  let idImg = e.target.dataset.imgId


  qwe.push({url:urlImg })
  localStorage.setItem('qwe', JSON.stringify(qwe));
  const getFromLocal = localStorage.getItem('qwe')
  const parsedSettings = JSON.parse(getFromLocal);
  
}
parsedSettings.forEach(el => {
    console.log(el);
  })

  
// console.log(parsedSettings);



const saveStorage = (key, value) => {
  try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState);
  } catch (err) {
    console.error('Set state error: ', err);
    }
  };

  const loadStorage = key => {
  try {
    const serializedState = localStorage.getItem(key);

    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (err) {
    console.error('Get state error: ', err);
  }
};


export { loadStorage }

