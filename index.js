import i18Obj from "./assets/js/translate.js";
console.log("оценка 75 \nпереключение фото 25\n переключение тем 25\n переключение языков 25");
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


/*const seasons = ['winter', 'spring', 'summer', 'autumn'];
function preloadSummerImages() {
    seasons.forEach((season) =>{
    for(let i = 1; i <= 6; i++) {
      const img = new Image();
      img.src = `./assets/img/${season}/${i}.jpg`;
    }
    }
    )
  }

  preloadSummerImages();*/

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
  if(event.target.textContent === 'en' || event.target.textContent === 'ru'){
    const span = document.querySelectorAll('.textlanguage');
    span.forEach(lang => lang.classList.remove('activation'));
    event.target.classList.add('activation');
    const data18 = document.querySelectorAll('[data-i18]');
    data18.forEach(element => {if (element.placeholder) {
      element.placeholder = i18Obj[event.target.textContent][element.dataset.i18];
     element.textContent = '';
    } else
    element.textContent = i18Obj[event.target.textContent][element.dataset.i18]; 
    })
  }
};
const link = document.querySelector('#link');
const theme = document.querySelector('.themepicture');
theme.addEventListener('click', GetTheme);
function GetTheme(event){
  if( link.getAttribute('href') ==="style1.css")
  link.href = "style.css";
  else
  link.href = "style1.css";
};
  //const main =document.querySelector('body');
  //console.log(main);
 // main.classList.add('light-theme');
 /* let them = [".section-title",".section-skills",".portfolio", ".container-video", ".price", "h3", "h2", ".stadard", ".skill-items"];
  
  let massive = [];
    console.log(massive);
    them.forEach((item) => {
    massive.push(document.querySelectorAll(item))  
    });

  massive.forEach((item) =>{ item.forEach((items) => { items.classList.add('light-theme');})});
 */