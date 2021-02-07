import refs from './refs'



export default function savesToLocalStorage() {
    refs.boxOverlayLocalStor().forEach(el => {
      el.addEventListener('click', savesOnClick)  
    })
}

function savesOnClick(e) {
  let urlImg = e.target.dataset.imgSaved 
  let idImg = e.target.dataset.imgId
  
  { `${saveStorage('url', urlImg)}` }
  
}

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

