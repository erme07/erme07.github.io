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
  var x = window.scrollX;
  var y = window.scrollY;
  window.onscroll = function(){ window.scrollTo(x, y) };
});

closeBtn.addEventListener("click", () => {
  barraMenu.classList.remove('active');
  window.onscroll = null;
});


//verificar en que pagina de la web estoy

var rutaAbsoluta = self.location.href; 
console.log(rutaAbsoluta);
function filename(){
  var posicionUltimaBarra = rutaAbsoluta.lastIndexOf("/");
  var rutaRelativa = rutaAbsoluta.substring( posicionUltimaBarra + "/".length , rutaAbsoluta.length );
  return rutaRelativa;
}
	var nombre_archivo = filename();


	if(nombre_archivo === 'contacto.html'){
    barraMenu.classList.add('select-contacto');
  }
  if(nombre_archivo === 'index.html'|| rutaAbsoluta === 'https://erme07.github.io/'){
    barraMenu.classList.add('select-inicio');
    //animacion de porcentajes en reseñas
    let numero = document.getElementsByName("puntaje");
    let count=5;
    console.log(numero);
    setInterval(() =>{
        if(count<85){
            count+=5;
            if(count<51){
                numero[1].innerHTML=((count/10)).toFixed(1);
            }
            numero[0].innerHTML=((count/10)).toFixed(1);
        }else{
            clearInterval();
        }
    },100);
  }
  if(nombre_archivo === 'noticias.html' || nombre_archivo === 'articulo.html'){
    barraMenu.classList.add('select-noticias');
  }
  if(nombre_archivo === 'resenias.html'){
    barraMenu.classList.add('select-resenias');
  }
  if(nombre_archivo === 'redactores.html'){
    barraMenu.classList.add('select-redactores');
  }
if(nombre_archivo === 'resenia.html'){
    barraMenu.classList.add('select-resenias');
    //animacion de porcentajes en reseña individual
    let numero = document.getElementsByName("puntaje");
    let count=0;
    console.log(numero);
    setInterval(() =>{
      
        if(count>85){
          clearInterval();  
        }else{
        numero[0].innerHTML=((count/10)).toFixed(1);
        count+=5;
        }
    },100);
  };
  


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

//boton para ir  hacia arriba

const boton_arriba = document.getElementById("boton_arriba")
boton_arriba.addEventListener('click', () => {
  window.scrollTo(0, 0)
  body.classList.remove(scrollAbajo);
})

window.onscroll = () => {
  mostrar_boton()
}
const mostrar_boton = () => {
  if (window.scrollY < 300) {
    boton_arriba.classList.remove("volver-arriba-on")
  } else {
      boton_arriba.classList.add("volver-arriba-on")
  }
}
