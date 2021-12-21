import 'bootstrap';
import '@fortawesome/fontawesome-free/js/all';
import 'dark-mode-switch/dark-mode-switch';
const GitHubCalendar = require('github-calendar/dist/github-calendar.min.js');
import style from "bootstrap/scss/bootstrap.scss";
import style2 from "../scss/styles.scss";
import style3 from "github-activity-feed/dist/github-activity.min.css";
import style4 from 'github-calendar/dist/github-calendar-responsive.css';

"use strict";

// Enable tooltips everywhere
// var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
// var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
//   return new bootstrap.Tooltip(tooltipTriggerEl)
// });

    /* Github Calendar - https://github.com/dale563/github-calendar */
new GitHubCalendar("#github-graph", "dale563", { responsive: true });

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

boutonReinitialier.addEventListener('click', reinitialiserFormulaire);