// Loader
//var prealoaderOption = $(window);
let prealoaderOption = document.getElementById("header");

prealoaderOption.on("load", function () {
  let preloader = $(".loader");
  let preloaderArea = $(".preloader-area");

  preloader.fadeOut(500);
  preloaderArea.delay(100).fadeOut(500);

  // Detengo animacion loader
  animLoader.destroy();

  // Animaciones de portada
  animFlores1.setSpeed(0.6);
  animFlores1.play();
  animFlores2.setSpeed(0.6);
  animFlores2.play();
});

// Animacion loader
let svgContainerLoader = document.querySelector(".loader");

let animLoader = bodymovin.loadAnimation({
  wrapper: svgContainerLoader,
  animType: "svg",
  loop: true,
  path: _pathProducto + "img/corazon.json",
});

// Animacion Flores
let svgContainerFlores1 = document.querySelector(".portada-flor-izq-sup");

let animFlores1 = bodymovin.loadAnimation({
  wrapper: svgContainerFlores1,
  animType: "svg",
  autoplay: false,
  loop: false,
  path: _pathProducto + "img/json_hojas01.json",
});

let svgContainerFlores2 = document.querySelector(".portada-flor-der-inf");

let animFlores2 = bodymovin.loadAnimation({
  wrapper: svgContainerFlores2,
  animType: "svg",
  autoplay: false,
  loop: false,
  path: _pathProducto + "img/json_hojas02.json",
});
