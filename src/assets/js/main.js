import 'bootstrap';
import '../plugins/dark-mode-switch/dark-mode-switch';
import '@fortawesome/fontawesome-free/js/all';
import style from "bootstrap/scss/bootstrap.scss";
import style2 from "../css/styles.css";
"use strict";

//Enable tooltips everywhere
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})