"use strict";

// Enable tooltips everywhere
// var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
// var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
//   return new bootstrap.Tooltip(tooltipTriggerEl)
// });


GitHubActivity.feed({
	username: "dale563",
	selector: "#ghfeed",
	limit: 20, // optional
});

const boutonReinitialier = document.getElementById("btn_reinitialiser");

(function () {
'use strict'
const forms = document.querySelectorAll('.needs-validation')
Array.from(forms)
  .forEach(function (form) {
    form.addEventListener('submit', function (event) {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }
      form.classList.add('was-validated')
    }, false)
  })
})()

const reinitialiserFormulaire = () => {
    document.getElementById("formulaire218").reset();
}

// boutonReinitialier.addEventListener('click', reinitialiserFormulaire);