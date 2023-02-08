function alertMe() {
  alert("You are here: " + location.hostname);
}

(() => {
  // init tooltip component BS5
  var tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle-tt="tooltip"]')
  );
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });

  // init modal component BS5
  var myModal = document.getElementById("myModal");
  var myInput = document.getElementById("myInput");

  myModal.addEventListener("shown.bs.modal", function () {
    myInput.focus();
  });
})();

function shareIt(page = "", name = "") {
  const htmlMessage = `<h3>Hey!</h3> <h4>Here is recipe you might like:</h4> <a href='${location.hostname}/${page}'>${name}</a>`;

  const sharingModal = document.getElementById("sharingModal");
  let modalTitle = sharingModal.querySelector(".modal-title");
  let modalBody = sharingModal.querySelector(".modal-body");

  modalTitle.textContent = "Share this recipe";
  modalBody.innerHTML = htmlMessage;
}
