setTimeout(() => {
  // Abrir modal
  $("body").on("click", "a.modal-regalos", function (e) {
    e.preventDefault();

    $("#modalRegalos").modal({
      backdrop: "static",
    });
  });
}, 1000);
