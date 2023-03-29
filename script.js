let menuVisible = false;
//Esta funcion oculta o muestra nuestro menu
function mostrarOcultarMenu() {
  if (menuVisible) {
    document.getElementById("nav").classList = "";
    menuVisible = false;
  } else {
    document.getElementById("nav").classList = "responsive";
    menuVisible = true;
  }
}

function seleccionar() {
  //Ocultamos el menu una vez se selecciona una opcion
  document.getElementById("nav").classList = "";
  menuVisible = false;
}

//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades() {
  var skills = document.getElementById("skills");
  var distancia_skills =
    window.innerHeight - skills.getBoundingClientRect().top;
  if (distancia_skills >= 300) {
    let habilidades = document.getElementsByClassName("progreso");
    habilidades[0].classList.add("javascript");
    habilidades[1].classList.add("htmlcss");
    habilidades[2].classList.add("typescript");
    habilidades[3].classList.add("python3");
    habilidades[4].classList.add("vue3");
    habilidades[5].classList.add("comunicacion");
    habilidades[6].classList.add("trabajo");
    habilidades[7].classList.add("creatividad");
    habilidades[8].classList.add("dedicacion");
    habilidades[9].classList.add("aprendizaje");
  }
}

//Detecto el scrolling para aplicar la animacion de la barra
window.onscroll = function () {
  efectoHabilidades();
};
