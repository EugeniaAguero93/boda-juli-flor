// Variables
var _pathApp = "https://www.fixdate.io/";
var _pathProducto = "https://www.fixdate.io/modelo-invitacion/30/";
var tokenProducto = "";

// Idioma
var langJs = "es";

// Idioma js en MODELO e INVITACION
var langJsVariante = "es-AR";
var langDefault = "es-AR";

// Mapas
var latitudFiesta = -34.6201481;
var longitudFiesta = -58.4046887;
var latitudCeremonia = -34.6201481;
var longitudCeremonia = -58.4046887;

// Consulto tipo de dispositivo
if (
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  )
) {
  var device = "mobile";
} else {
  var device = "desktop";
}

// Funciones y variables globales
// Funcion para validar formato url
function is_url(str) {
  regexp =
    /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
  if (regexp.test(str)) {
    return true;
  } else {
    return false;
  }
}

//#region Animaciones

// Animacion Flores

var wpFlores1 = new Waypoint({
  element: document.querySelector(".cuenta-regresiva"),
  handler: function () {
    animFlores1.stop();
    animFlores1.play();
  },
});

var wpFlores2 = new Waypoint({
  element: document.querySelector(".cuenta-regresiva"),
  handler: function () {
    animFlores2.stop();
    animFlores2.play();
  },
});

let svgContainerFlores3 = document.querySelector(".portada-flor-izq-inf");

let animFlores3 = bodymovin.loadAnimation({
  wrapper: svgContainerFlores3,
  animType: "svg",
  autoplay: false,
  loop: false,
  path: _pathProducto + "img/json_hojas03.json",
});

var wpFlores3 = new Waypoint({
  element: document.querySelector(".falta"),
  handler: function () {
    animFlores3.stop();
    animFlores3.play();
  },
});

let svgContainerFlores4 = document.querySelector(".ceremonia-fiesta-flor-der");

let animFlores4 = bodymovin.loadAnimation({
  wrapper: svgContainerFlores4,
  animType: "svg",
  autoplay: false,
  loop: false,
  path: _pathProducto + "img/json_hojas04.json",
});

var wpFlores4 = new Waypoint({
  element: document.querySelector(".falta"),
  handler: function () {
    animFlores4.stop();
    animFlores4.play();
  },
});

let svgContainerFlores5 = document.querySelector(".regalos-flor-der");

let animFlores5 = bodymovin.loadAnimation({
  wrapper: svgContainerFlores5,
  animType: "svg",
  autoplay: false,
  loop: false,
  path: _pathProducto + "img/json_hojas04.json",
});

var wpFlores6 = new Waypoint({
  element: document.querySelector(".regalos"),
  handler: function () {
    animFlores5.stop();
    animFlores5.play();
  },
});

// Animacion flecha scroll
let svgContainerFlechaScroll = document.querySelector(".flecha-continuar");

let animFlechaScroll = bodymovin.loadAnimation({
  wrapper: svgContainerFlechaScroll,
  animType: "svg",
  loop: true,
  path: _pathProducto + "img/down-scroll.json",
});

animFlechaScroll.setSpeed(0.6);

// Animacion anillos
let svgContainerAnillos = document.querySelector(".anim-anillos");

let animAnillos = bodymovin.loadAnimation({
  wrapper: svgContainerAnillos,
  animType: "svg",
  loop: true,
  path: _pathProducto + "img/img_ceremonia.json",
});

animAnillos.play();

// Animacion galeria
let svgContainerGaleria = document.querySelector(".anim-galeria");

let animGaleria = bodymovin.loadAnimation({
  wrapper: svgContainerGaleria,
  animType: "svg",
  loop: true,
  path: _pathProducto + "img/json_camara.json",
});

animGaleria.play();

// Animacion canciones
let svgContainerFiesta = document.querySelector(".anim-fiesta");

let animFiesta = bodymovin.loadAnimation({
  wrapper: svgContainerFiesta,
  animType: "svg",
  loop: true,
  path: _pathProducto + "img/img_fiesta.json",
});

animFiesta.play();

// Animacion Vestuario
let svgContainerVestuario = document.querySelector(".anim-vestuario");

let animVestuario = bodymovin.loadAnimation({
  wrapper: svgContainerVestuario,
  animType: "svg",
  loop: true,
  path: _pathProducto + "img/vestuario.json",
});

animVestuario.play();

// Animacion regalos
let svgContainerRegalos = document.querySelector(".anim-regalos");

let animRegalos = bodymovin.loadAnimation({
  wrapper: svgContainerRegalos,
  animType: "svg",
  loop: true,
  path: _pathProducto + "img/img_regalo.json",
});

animRegalos.play();

// Animacion instagram
let svgContainerInstagram = document.querySelector(".anim-instagram");

let animInstagram = bodymovin.loadAnimation({
  wrapper: svgContainerInstagram,
  animType: "svg",
  loop: true,
  path: _pathProducto + "img/img_instagram.json",
});

animInstagram.play();
//#endregion

//#region Modals

// Modal Confirmar asistencia
// Abrir modal
$("body").on("click", "a.confirmar-asistencia", function (e) {
  e.preventDefault();

  // Remuevo mensajes de error anteriores
  $("#error-form").remove();

  var evento = $(this).attr("data-evento");

  $("#eventoAsistencia").val(evento);

  if (evento == "Fiesta") {
    var titleModalAsistencia = lang_titleModalAsistenciaFiesta;
    var rutaImgModalAsistencia = _pathProducto + "img/img_circuloFiesta.svg";
  }

  if (evento == "Ceremonia") {
    var titleModalAsistencia = lang_titleModalAsistenciaCeremonia;
    var rutaImgModalAsistencia = _pathProducto + "img/img_circuloCeremonia.svg";
  }

  $("#modalAsistencia .modal-title").text(titleModalAsistencia);
  $("#modalAsistencia .img-top-modal img").attr("src", rutaImgModalAsistencia);

  $("#modalAsistencia").modal({
    backdrop: "static",
  });
});

// Validacion de form.
function isOkAsistencia() {
  // Remuevo mensajes de error anteriores
  $("#error-form").remove();

  // Variables necesarias para la validacion
  var flag = true;
  var err = "";

  // Variables del form para validar.
  var asistenteName = $.trim($("#nombreAsistente").val());
  var asistenteComentarios = $.trim($("#comentariosAsistente").val());

  // Nombre
  if (asistenteName == "") {
    flag = false;
    err = lang_nombreRequerido;
  } else {
    if (asistenteName.length > 20) {
      flag = false;
      err = lang_caracteresNombreAsistencia;
    }
  }

  // Comentarios
  if (asistenteComentarios != "") {
    if (asistenteComentarios.length > 100) {
      flag = false;
      err = lang_caracteresComentariosAsistencia;
    }
  }

  // Si hay error
  if (flag === false) {
    // Imprimo el error
    $("#formAsistencia").after('<span id="error-form">' + err + "</span>");
  }

  // Retorno el estado de la validacion
  return flag;
}

// Enviar asistencia
$("body").on("click", "#sendAsistencia", function (e) {
  e.preventDefault();
  if (isOkAsistencia()) {
    //Form bien validado
    // Load and disabled buttom.
    $("#sendAsistencia").text(lang_informandoAsistencia + "...");
    $("#sendAsistencia").prop("disabled", true);
    // Obtengo el Form.
    var formulario = $("#formAsistencia")[0];

    // Obtengo los datos del formulario
    var datos = new FormData(formulario);

    // Visualizar como viajan los datos
    // for (var pair of datos.entries()) {
    //   console.log(pair[0] + ", " + pair[1]);
    // }

    // Envio con fetch los datos mediante POST
    fetch(_pathApp + "producto/fetchs/confirmar-asistencia.php", {
      method: "POST",
      body: datos,
    })
      // Promesas fetch
      .then((res) => res.json())
      .then((data) => {
        // Si recibo error
        if (data.error === true) {
          $("#sendAsistencia").text(lang_confirmarAsistencia);
          $("#sendAsistencia").prop("disabled", false);

          // Imprimo el error
          $("#formAsistencia").after(
            '<span id="error-form">' + data.desc + "</span>"
          );
        }

        // Si no hay error
        if (data.error === false) {
          $("#sendAsistencia").text(lang_confirmarAsistencia);
          $("#sendAsistencia").prop("disabled", false);

          // Oculto elementos del form y reseteo
          $("#formAsistencia")[0].reset();
          $(
            "#modalAsistencia .formulario-content, #modalAsistencia .modal-footer, #modalAsistencia h5"
          ).hide();

          // Acomodo el css para centrar mensaje
          $("#modalAsistencia .modal-body").addClass("fix-height");

          // Muestro mensaje de exito
          $("#modalAsistencia .msj-content")
            .html(
              "<h5>" +
                lang_asistenciaMsjExito_1 +
                "</h5><p>" +
                lang_asistenciaMsjExito_2 +
                "</p>"
            )
            .show();

          // Cierro modal y vuelvo a activar form
          setTimeout(function () {
            $("#modalAsistencia").modal("hide");
            $(
              "#modalAsistencia .formulario-content, #modalAsistencia .modal-footer, #modalAsistencia h5"
            ).show();
            $("#modalAsistencia .msj-content").html("").hide();
            $("#modalAsistencia .modal-body").removeClass("fix-height");
          }, 4000);
        }
      });
  }
});

// Modal sugerir cancion
// Abrir modal
$("body").on("click", "a.sugerir-cancion", function (e) {
  e.preventDefault();

  // Remuevo mensajes de error anteriores
  $("#error-form").remove();

  $("#modalSugerirCancion").modal({
    backdrop: "static",
  });
});

// Validacion de form.
function isOkSugerirCancion() {
  // Remuevo mensajes de error anteriores
  $("#error-form").remove();

  // Variables necesarias para la validacion
  var flag = true;
  var err = "";

  // Variables del form para validar.
  var sugerenciaName = $.trim($("#nombreSugerencia").val());
  var sugerenciaDescription = $.trim($("#descripcionSugerencia").val());
  var sugerenciaLink = $.trim($("#linkSugerencia").val());

  // Descripcion
  if (sugerenciaDescription == "") {
    flag = false;
    err = lang_cancionRequerida;
  } else {
    if (sugerenciaDescription.length > 50) {
      flag = false;
      err = lang_caracteresCancionSugerencia;
    }
  }

  // Link
  if (sugerenciaLink != "") {
    if (!is_url(sugerenciaLink)) {
      flag = false;
      err = lang_linkIncorrecto;
    }
    if (sugerenciaLink.length > 250) {
      flag = false;
      err = lang_caracteresLinkSugerencia;
    }
  }

  // Nombre
  if (sugerenciaName == "") {
    flag = false;
    err = lang_nombreRequerido;
  } else {
    if (sugerenciaName.length > 20) {
      flag = false;
      err = lang_caracteresNombreSugerencia;
    }
  }

  // Si hay error
  if (flag === false) {
    // Imprimo el error
    $("#formSugerirCancion").after('<span id="error-form">' + err + "</span>");
  }

  // Retorno el estado de la validacion
  return flag;
}

// Enviar sugerencia
$("body").on("click", "#sendSugerenciaCancion", function (e) {
  e.preventDefault();

  if (isOkSugerirCancion()) {
    //Form bien validado
    // Load and disabled buttom.
    $("#sendSugerenciaCancion").text(lang_enviandoSugerencia + "...");
    $("#sendSugerenciaCancion").prop("disabled", true);

    // Obtengo el Form.
    var formulario = $("#formSugerirCancion")[0];

    // Obtengo los datos del formulario
    var datos = new FormData(formulario);

    // Visualizar como viajan los datos
    // for (var pair of datos.entries()) {
    //   console.log(pair[0] + ", " + pair[1]);
    // }

    // Envio con fetch los datos mediante POST
    fetch(_pathApp + "producto/fetchs/sugerir-cancion.php", {
      method: "POST",
      body: datos,
    })
      // Promesas fetch
      .then((res) => res.json())
      .then((data) => {
        // Si recibo error
        if (data.error === true) {
          $("#sendSugerenciaCancion").text(lang_sugerirCancion);
          $("#sendSugerenciaCancion").prop("disabled", false);

          // Imprimo el error
          $("#formSugerirCancion").after(
            '<span id="error-form">' + data.desc + "</span>"
          );
        }

        // Si no hay error
        if (data.error === false) {
          $("#sendSugerenciaCancion").text(lang_sugerirCancion);
          $("#sendSugerenciaCancion").prop("disabled", false);

          // Oculto elementos del form y reseteo
          $("#formSugerirCancion")[0].reset();
          $(
            "#modalSugerirCancion .formulario-content, #modalSugerirCancion .modal-footer, #modalSugerirCancion h5"
          ).hide();

          // Acomodo el css para centrar mensaje
          $("#modalSugerirCancion .modal-body").addClass("fix-height");

          // Muestro mensaje de exito
          $("#modalSugerirCancion .msj-content")
            .html(
              "<h5>" +
                lang_sugerirCancionMsjExito_1 +
                "</h5><p>" +
                lang_sugerirCancionMsjExito_2 +
                "</p>"
            )
            .show();

          // Cierro modal y vuelvo a activar form
          setTimeout(function () {
            $("#modalSugerirCancion").modal("hide");
            $(
              "#modalSugerirCancion .formulario-content, #modalSugerirCancion .modal-footer, #modalSugerirCancion h5"
            ).show();
            $("#modalSugerirCancion .msj-content").html("").hide();
            $("#modalSugerirCancion .modal-body").removeClass("fix-height");
          }, 4000);
        }
      });
  }
});

// Modal Vestuario
// Abrir modal
$("body").on("click", "a.modal-vestuario", function (e) {
  e.preventDefault();

  $("#modalVestuario").modal({
    backdrop: "static",
  });
});

// Modal regalos
// Abrir modal
$("body").on("click", "a.modal-regalos", function (e) {
  e.preventDefault();

  $("#modalRegalos").modal({
    backdrop: "static",
  });
});

// Modal como llegar
// Abrir modal
$("body").on("click", "a.modal-como-llegar", function (e) {
  e.preventDefault();

  var evento = $(this).attr("data-evento");
  if (evento == "Fiesta") {
    var titleModalMapa = lang_titleModalMapaFiesta;

    var latitudMapa = latitudFiesta;
    var longitudMapa = longitudFiesta;
  }

  if (evento == "Ceremonia") {
    var titleModalMapa = lang_titleModalMapaCeremonia;

    var latitudMapa = latitudCeremonia;
    var longitudMapa = longitudCeremonia;
  }

  // Cambio titulo
  $("#modalMapa .modal-title").text(titleModalMapa);

  // Genero el link para ampliar mapa
  $(".ampliar-mapa").attr(
    "href",
    "https://www.google.com/maps/search/?api=1&query=" +
      latitudMapa +
      "," +
      longitudMapa
  );

  // Cambio mapa
  initMap(latitudMapa, longitudMapa);

  $("#modalMapa").modal({
    backdrop: "static",
  });
});
//#endregion

// Soporte WEBP
function support_format_webp() {
  var elem = document.createElement("canvas");

  if (!!(elem.getContext && elem.getContext("2d"))) {
    // was able or not to get WebP representation
    return elem.toDataURL("image/webp").indexOf("data:image/webp") == 0;
  } else {
    // very old browser like IE 8, canvas not supported
    return false;
  }
}

// Opciones carrusel galeria
$(".carrusel").slick({
  lazyLoad: "ondemand",
  autoplay: true,
  autoplaySpeed: 2000,
  centerMode: true,
  dots: true,
  centerPadding: "20px",
  slidesToShow: 3,
  prevArrow: false,
  nextArrow: false,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "40px",
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "40px",
        slidesToShow: 1,
      },
    },
  ],
});

// Instagram parallax
// Si el ancho es de Telefono
if ($(window).width() < 768) {
  // Aceptar webp?
  if (support_format_webp()) {
    var imageInstagramParallax = "img/instagram_mobile.webp";
  } else {
    var imageInstagramParallax = "img/instagram_mobile.jpg";
  }
} else {
  // Aceptar webp?
  if (support_format_webp()) {
    var imageInstagramParallax = "img/instagram.webp";
  } else {
    var imageInstagramParallax = "img/instagram.jpg";
  }
}

$(".instagram").parallax({
  imageSrc: _pathProducto + imageInstagramParallax,
});

// Api Maps
// Config map
function initMap(latitud = 0, longitud = 0) {
  var myLatLng = {
    lat: latitud,
    lng: longitud,
  };

  var mapOptions = {
    // How zoomed in you want the map to start at (always required)
    zoom: 15,
    scrollwheel: false,
    disableDefaultUI: false,

    // The latitude and longitude to center the map (always required)
    center: new google.maps.LatLng(latitud, longitud),

    // How you would like to style the map.
    // This is where you would paste any style found on Snazzy Maps.
    styles: [
      {
        featureType: "administrative",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#6195a0",
          },
        ],
      },
      {
        featureType: "landscape",
        elementType: "all",
        stylers: [
          {
            color: "#f2f2f2",
          },
        ],
      },
      {
        featureType: "landscape",
        elementType: "geometry.fill",
        stylers: [
          {
            color: "#ffffff",
          },
        ],
      },
      {
        featureType: "poi",
        elementType: "all",
        stylers: [
          {
            visibility: "off",
          },
        ],
      },
      {
        featureType: "poi.park",
        elementType: "geometry.fill",
        stylers: [
          {
            color: "#e6f3d6",
          },
          {
            visibility: "on",
          },
        ],
      },
      {
        featureType: "road",
        elementType: "all",
        stylers: [
          {
            saturation: -100,
          },
          {
            lightness: 45,
          },
          {
            visibility: "simplified",
          },
        ],
      },
      {
        featureType: "road.highway",
        elementType: "all",
        stylers: [
          {
            visibility: "simplified",
          },
        ],
      },
      {
        featureType: "road.highway",
        elementType: "geometry.fill",
        stylers: [
          {
            color: "#f4d2c5",
          },
          {
            visibility: "simplified",
          },
        ],
      },
      {
        featureType: "road.highway",
        elementType: "labels.text",
        stylers: [
          {
            color: "#4e4e4e",
          },
        ],
      },
      {
        featureType: "road.arterial",
        elementType: "geometry.fill",
        stylers: [
          {
            color: "#f4f4f4",
          },
        ],
      },
      {
        featureType: "road.arterial",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#787878",
          },
        ],
      },
      {
        featureType: "road.arterial",
        elementType: "labels.icon",
        stylers: [
          {
            visibility: "off",
          },
        ],
      },
      {
        featureType: "transit",
        elementType: "all",
        stylers: [
          {
            visibility: "off",
          },
        ],
      },
      {
        featureType: "water",
        elementType: "all",
        stylers: [
          {
            color: "#eaf6f8",
          },
          {
            visibility: "on",
          },
        ],
      },
      {
        featureType: "water",
        elementType: "geometry.fill",
        stylers: [
          {
            color: "#eaf6f8",
          },
        ],
      },
    ],
  };

  var mapElement = document.getElementById("googleMap");

  var map = new google.maps.Map(mapElement, mapOptions);

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
  });
}

// Portada parallax
if (device == "mobile" || $(window).width() < 768) {
  // Aceptar webp?
  if (support_format_webp()) {
    var imageParallax = "img/portada-mobile.webp";
  } else {
    var imageParallax = "img/portada-mobile.jpg";
  }
} else {
  // Aceptar webp?
  if (support_format_webp()) {
    var imageParallax = "img/portada-3.webp";
  } else {
    var imageParallax = "img/portada-3.jpg";
  }
}

$(".portada").parallax({
  imageSrc: _pathProducto + imageParallax,
});

// <!-- AddEvent script -->
//   <script type="text/javascript" src="./assets/atc.min.js.descarga" async="" defer=""></script>

//   <!-- AddEvent Settings -->
//   <script type="text/javascript">
//     window.addeventasync = function() {
//       addeventatc.settings({

//         css: false,

//         appleical: {
//           show: true,
//           text: "Apple Calendar"
//         },
//         google: {
//           show: true,
//           text: "Google <em>(online)</em>"
//         },
//         office365: {
//           show: true,
//           text: "Office 365 <em>(online)</em>"
//         },
//         outlook: {
//           show: true,
//           text: "Outlook"
//         },
//         outlookcom: {
//           show: true,
//           text: "Outlook.com <em>(online)</em>"
//         },
//         yahoo: {
//           show: true,
//           text: "Yahoo <em>(online)</em>"
//         },
//         facebook: {
//           show: true,
//           text: "Facebook"
//         }
//       });
//     };
//   </script>
