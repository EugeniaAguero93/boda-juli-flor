// Idioma
const langJs = "es";

// Idioma js en MODELO e INVITACION
const langJsVariante = "es-AR";
const langDefault = "es-AR";

let prealoaderOption = $(window);

// Mapas
const latitudCeremoniaFiesta = -34.6201481;
const longitudCeremoniaFiesta = -58.4046887;
const latitudCivil = -34.6201481;
const longitudCivil = -58.4046887;

let device = "desktop";

// Consulto tipo de dispositivo
if (
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  )
) {
  device = "mobile";
} else {
  device = "desktop";
}

// Portada parallax
if (device == "mobile" || $(window).width() < 768) {
  // Aceptar webp?
  if (support_format_webp()) {
    var imageParallax = "./assest/images/portada-mobile.webp";
  } else {
    var imageParallax = "./assets/images/portada-mobile.jpg";
  }
} else {
  // Aceptar webp?
  if (support_format_webp()) {
    var imageParallax = "./assets/images/portada-3.webp";
  } else {
    var imageParallax = "./assets/images/portada-3.jpg";
  }
}

setTimeout(() => {
  $(".portada").parallax({
    imageSrc: imageParallax,
  });
}, 1000);

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
