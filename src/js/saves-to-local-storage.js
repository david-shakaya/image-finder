import refs from './refs';
const sesion = [];

function savesToLocalStorage() {
  window.document.addEventListener('click', savesOnClick);
}

// Добавляем на спан addedToSaved

let pars = 0;

function savesOnClick(e) {
  if (
    e.target.className === 'box-overlay' ||
    e.target.className === 'box-overlay-text'
  ) {
    if (e.target.children[0]) {
      e.target.children[0].textContent = 'added';
    } else {
      e.target.textContent = 'added';
      e.target.offsetParent.classList.add('addedToSaved');
      // ???? Гдето сюда добавить зажиту от повторного нажатия на Текст. Получается дубляж картинок
    }

    let idImg = e.target.dataset.imgId;
    console.log(idImg);
    const dataInvis = (e.target.dataset.added = 'invisible');
    let urlImg = e.target.dataset.imgSaved;

    let isActive = 0;

    // если в хран чтото есть перебираем и пушим.
    if (sesion.length > 0) {
      sesion.find(el => {
        if (el.id !== idImg) {
          // console.log(idImg);
          if (isActive === 1) {
            return;
          }
          sesion.push({ url: urlImg, id: idImg, isVisible: dataInvis });
          isActive += 1;
          // console.log('ТУТ ПРОБЛЕМА');
        }
      });
    } else {
      sesion.push({ url: urlImg, id: idImg, isVisible: dataInvis });
    }
    localStorage.setItem(`sesion`, JSON.stringify(sesion));
    e.target.classList.add('addedToSaved'); //
    isActive = 0;
  }
}

function loadFromLocalStorage() {
  const getFromLocal = localStorage.getItem('sesion');
  try {
    if (getFromLocal) {
      const parsedSettings = JSON.parse(getFromLocal);

      const length = parsedSettings.length;
      console.log(sesion.length);
      console.log(parsedSettings.length);
      parsedSettings.find(el => {
        if (sesion.length === length) {
          return;
        }
        sesion.push(el);
        // Когда загружаем обрезать сесион.ленгт
        // console.log(el);
        // console.log(sesion);
      });

      parsedSettings.map(el => {
        let elFromLocal = document.querySelector(`#${el.id}`);
        if (elFromLocal === null) {
          elFromLocal = document.querySelector(`.git-logo`);
        }
        // console.log(elFromLocal);
        elFromLocal.classList.add('addedToSaved');
        elFromLocal.textContent = 'added';
        // console.log(el.id);
      });
    }
  } catch {}
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

export { savesToLocalStorage, loadFromLocalStorage };
