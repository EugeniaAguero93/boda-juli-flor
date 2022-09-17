// Loader
prealoaderOption.on("load", function () {
  let preloader = $(".loader");
  let preloaderArea = $(".preloader-area");

  preloader.fadeOut(500);
  preloaderArea.delay(100).fadeOut(500);

  // Detengo animacion loader
  //animLoader.destroy();

  // Animaciones de portada
  //   animFlores1.setSpeed(0.6);
  //   animFlores1.play();
  //   animFlores2.setSpeed(0.6);
  //   animFlores2.play();
});
