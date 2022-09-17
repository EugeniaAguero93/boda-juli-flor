// Variables
var latitudFiesta = -34.6201481;
var longitudFiesta = -58.4046887;
var latitudCeremonia = -34.6201481;
var longitudCeremonia = -58.4046887;

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

// Abrir modal
setTimeout(() => {
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
}, 2000);
