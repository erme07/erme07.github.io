//javascript for navigation bar effect on scroll
const body = document.body;
const scrollArriba = "scroll-arriba";
const scrollAbajo = "scroll-abajo";
let posicionAnterior = 0;

var windowWidth = window.innerWidth;

if(windowWidth<768){
  window.addEventListener("scroll", () => {
    const posicionActual = window.pageYOffset;
    if (posicionActual < 0) {
    body.classList.remove(scrollArriba);
    return;
    }
   
    if (posicionActual > posicionAnterior && !body.classList.contains(scrollAbajo)) {
      // bajar
      body.classList.remove(scrollArriba);
      body.classList.add(scrollAbajo);
  } else if (posicionActual < posicionAnterior && body.classList.contains(scrollAbajo)) {
      // subir
      body.classList.remove(scrollAbajo);
      body.classList.add(scrollArriba);
  }
    posicionAnterior = posicionActual;
  });
}else{
  window.addEventListener("scroll", () => {
    const posicionActual = window.pageYOffset;
    if (posicionActual < 114) {
    body.classList.remove(scrollArriba);
    return;
    }
   
    if (posicionActual > posicionAnterior && !body.classList.contains(scrollAbajo) && posicionActual>162) {
      // bajar
      body.classList.remove(scrollArriba);
      body.classList.add(scrollAbajo);
  } else if (posicionActual < posicionAnterior && body.classList.contains(scrollAbajo)) {
      // subir
      body.classList.remove(scrollAbajo);
      body.classList.add(scrollArriba);
  }
    posicionAnterior = posicionActual;
  });
}



//javascript for responsive navigation sidebar menu
var barraMenu = document.querySelector('.barra-navegacion');
var menuBtn = document.querySelector('.menu-btn');
var closeBtn = document.querySelector('.close-btn');

menuBtn.addEventListener("click", () => {
  barraMenu.classList.add('active');
});

closeBtn.addEventListener("click", () => {
  barraMenu.classList.remove('active');
});