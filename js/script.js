//ocultar y mostra la barra de menu haciendo scroll

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
   
    if (posicionActual > posicionAnterior && !body.classList.contains(scrollAbajo) && posicionActual>48) {
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



//mostrar y ocultar menu en celulares

var barraMenu = document.querySelector('.barra-navegacion');
var menuBtn = document.querySelector('.menu-btn');
var closeBtn = document.querySelector('.close-btn');

menuBtn.addEventListener("click", () => {
  barraMenu.classList.add('active');
});

closeBtn.addEventListener("click", () => {
  barraMenu.classList.remove('active');
});


//verificar en que pagina de la web estoy

function filename(){
  var rutaAbsoluta = self.location.href;
	console.log(rutaAbsoluta);
  var posicionUltimaBarra = rutaAbsoluta.lastIndexOf("/");
  var rutaRelativa = rutaAbsoluta.substring( posicionUltimaBarra + "/".length , rutaAbsoluta.length );
  return rutaRelativa;
}
	var nombre_archivo = filename();


	if(nombre_archivo === 'contacto.html'){
    barraMenu.classList.add('select-contacto');
  }
  if(nombre_archivo === 'index.html' || rutaAbsoluta === 'https://erme07.github.io'){
    barraMenu.classList.add('select-inicio');
  }
  if(nombre_archivo === 'noticias.html'){
    barraMenu.classList.add('select-noticias');
  }
  


////modo oscuro
const preferedColorScheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
const slider = document.getElementById('slider');

const setTheme = (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
}

slider.addEventListener('click', ()  => {
    let switchToTheme = localStorage.getItem('theme') === 'dark' ? 'light' : 'dark';
    setTheme(switchToTheme);
});

setTheme(localStorage.getItem('theme') || preferedColorScheme);


//circulo review

let progressCircle = document.querySelector(".progress");
    let radius = progressCircle.r.baseVal.value;
    //circumference of a circle = 2πr;
    let circumference = radius * 2 * Math.PI;
    progressCircle.style.strokeDasharray = circumference;

    //0 to 100
  let porcentaje = 65;

    setProgress(porcentaje);

    function setProgress(percent) {
        progressCircle.style.strokeDashoffset = circumference - (percent / 100) * circumference;
    }

    let textoPorcentaje = document.querySelector(".reseña-porcentaje text")
     textoPorcentaje.innerHTML = (porcentaje/10);
