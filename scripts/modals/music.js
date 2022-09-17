// Modal musica inicio
setTimeout(() => {
  // Al cargar abro modal
  prealoaderOption.on("load", function () {
    $("#modalMusica").modal({
      backdrop: "static",
    });
  });

  // Btn play music modal
  $("body").on("click", "#play-music-modal", function (e) {
    e.preventDefault();

    $("#play-pause-music").attr("data-estado-music", "play");
    animMusicAnimIcon.play();
    player.playVideo();

    $("#modalMusica").modal("hide");
  });
}, 1000);

// Musica de fondo
setTimeout(() => {
  // 2. This code loads the IFrame Player API code asynchronously.
  var tag = document.createElement("script");

  tag.src = "https://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName("script")[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  // 3. This function creates an <iframe> (and YouTube player)
  //    after the API code downloads.
  var player;

  function onYouTubeIframeAPIReady() {
    player = new YT.Player("player-musica-fondo", {
      height: "10",
      width: "10",
      playerVars: {
        playlist: "EH30RAXnRWs",
        loop: 1,
      },
      events: {
        onReady: onPlayerReady,
      },
    });
  }

  // 4. The API will call this function when the video player is ready.
  function onPlayerReady(event) {
    event.target.setVolume(80);
    // event.target.playVideo();
  }

  // Pausar video
  function pauseVideo() {
    player.pauseVideo();
  }

  // Click en controlador musica
  $("body").on("click", "#play-pause-music", function (e) {
    e.preventDefault();

    // Estado actual
    var estadoMusic = $(this).attr("data-estado-music");

    // Pause music
    if (estadoMusic == "pause") {
      $(this).attr("data-estado-music", "play");
      animMusicAnimIcon.play();
      player.playVideo();
    }

    // Play music
    if (estadoMusic == "play") {
      $(this).attr("data-estado-music", "pause");
      player.pauseVideo();
      animMusicAnimIcon.stop();
    }
  });
}, 1000);
