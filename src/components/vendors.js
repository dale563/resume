import 'bootstrap';
import '@fortawesome/fontawesome-free/js/all';
import 'dark-mode-switch/dark-mode-switch';
import 'octicons';
const GitHubCalendar = require('github-calendar/dist/github-calendar.min.js');
import style from "bootstrap/scss/bootstrap.scss";
import style2 from "../assets/scss/styles.scss";
import style3 from "github-activity-feed/dist/github-activity.min.css";
import style4 from 'github-calendar/dist/github-calendar-responsive.css';
import style5 from 'octicons/build/build.css';

    /* Github Calendar - https://github.com/dale563/github-calendar */
new GitHubCalendar("#github-graph", "dale563", { responsive: true });