import refs from './refs';
const options = {
  rootMargin: '100px ',
  threshold: 1.0,
};

const onEntry = (entries, observer) => {
  entries.forEach(entry => {
    // тут можно писать логику для проверки вхождения
    const qwe = document.querySelector('.up-arrow-button');
    console.log(entry);
    if (!entry.isIntersecting) {
      qwe.classList.add('up-arrow');
    }
    if (entry.isIntersecting) {
      qwe.classList.remove('up-arrow');
    }
  });
};

const observer = new IntersectionObserver(onEntry, options);
observer.observe(document.querySelector('.header-nav-container'));
