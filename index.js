import i18Obj from "./assets/js/translate.js";
const burgerFirst = document.querySelector('.burgerFirst');
const navigator = document.querySelector('.navigator');
function toggleMenu(){
    burgerFirst.classList.toggle('burgeropen');
    navigator.classList.toggle('open');
    }
    burgerFirst.addEventListener('click',toggleMenu);
    
const nav_list = document.querySelector('.nav-list');

function closeMenu(event) {
    burgerFirst.classList.remove('burgeropen');
    navigator.classList.remove('open');
    
}
nav_list.addEventListener('click', closeMenu);

const buttons = document.querySelector('.buttons');
const button = document.querySelectorAll('.portfolio-btn');
const foto = document.querySelectorAll('.photo');
buttons.addEventListener('click', changeImage);
function changeImage(event) {
        if(event.target.classList.contains('portfolio-btn')) {
            button.forEach(buton => buton.classList.remove('active'));
            event.target.classList.add('active');
        foto.forEach((img, index) => img.src = "./assets/img/" + event.target.dataset.season + "/" + (index + 1) + ".jpg");
    }
  }
const language = document.querySelector('.language');
language.addEventListener('click', GetTranslate);
function GetTranslate(event){
  let lang_active;
  if(typeof(event) === 'string'){
  lang_active = event; 
  } else {
    lang_active = event.target.textContent;
  }
  setLocalStorage();
    const data18 = document.querySelectorAll('[data-i18]');
    data18.forEach(element => {if (element.placeholder) {
      element.placeholder = i18Obj[lang_active][element.dataset.i18];
     element.textContent = '';
    } else
    element.textContent = i18Obj[lang_active][element.dataset.i18]; 
    })
      const span = document.querySelectorAll('.textlanguage');
      span.forEach(lang => { lang.classList.remove('activation');
      if(lang.textContent === lang_active){
        lang.classList.add('activation');
      };});
    }
;
const link = document.querySelector('#link');
const theme = document.querySelector('.themepicture');
theme.addEventListener('click', GetTheme);
function GetTheme(event){
  
  if( (link.getAttribute('href') ==="style1.css")){
  link.href = "style.css";
  
  }else {
  link.href = "style1.css";
  
  }
  setLocalStorage();
  
};

function setLocalStorage() {
  localStorage.setItem('theme', link.getAttribute('href'));
  
  localStorage.setItem('lang', document.querySelector('.activation').textContent );
};
window.addEventListener('beforeunload', setLocalStorage);

function getLocalStorage() {
  if (localStorage.getItem('lang')) {
      const language = localStorage.getItem('lang');
      if (language === 'en') {
        GetTranslate('en')
      } else if (language === 'ru') {
        GetTranslate('ru')
      }
  }
  if (localStorage.getItem('theme')) {
      const link1 = localStorage.getItem('theme');
      if (link1 === "style.css") {
        console.log('nado pereklychit');
        GetTheme();
        
      }
      
  }

};
window.addEventListener("DOMContentLoaded", getLocalStorage);




