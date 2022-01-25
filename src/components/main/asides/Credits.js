import React from "react";
import Section from "../../UI/Section";
const Credits = (props) => {
  const classes = "credits aside";
  const classesEn = "en cacher " + classes;
  const classesFr = "fr afficher " + classes;
  const classesHeader ="sr-only";
  // 
  return (
    <>
    <Section
      className={classesFr}
      // classNameHeader={classesHeader}
      heading="Crédits"
    >
      <ul className="list-unstyled pb-2">
        <li>
          <a href="https://twitter.com/3rdwave_themes" target="_blank">
            <i className="fas fa-external-link-alt"></i>Xiaoying Riley (thème)
          </a>
        </li>
        <li>
          <a
            href="https://github.com/IonicaBizau/github-calendar"
            target="_blank"
          >
            <i className="fas fa-external-link-alt"></i>GitHub Calendar Plugin
          </a>
        </li>
        <li>
          <a
            href="https://caseyscarborough.com/projects/github-activity/"
            target="_blank"
          >
            <i className="fas fa-external-link-alt"></i>GitHub Activity Stream
          </a>
        </li>
        <li>
          <a href="https://github.com/coliff/dark-mode-switch">
            <i className="fas fa-external-link-alt"></i>Dark Mode Switch
          </a>
        </li>
        <li>
          <a href="https://fortawesome.github.io/Font-Awesome/" target="_blank">
            <i className="fas fa-external-link-alt"></i>FontAwesome
          </a>
        </li>
        <li>
          <a href="https://getbootstrap.com/" target="_blank">
            <i className="fas fa-external-link-alt"></i>Bootstrap
          </a>
        </li>
        <li>
          <a href="https://webpack.js.org/" target="_blank">
            <i className="fas fa-external-link-alt"></i>Webpack
          </a>
        </li>
        <li>
          <a href="https://fr.reactjs.org/" target="_blank">
            <i className="fas fa-external-link-alt"></i>React
          </a>
        </li>
      </ul>
    </Section>
    <Section
      className={classesEn}
      // classNameHeader={classesHeader}
      heading="Credits"
    >
      <ul className="list-unstyled pb-2">
        <li>
          <a href="https://twitter.com/3rdwave_themes" target="_blank">
            <i className="fas fa-external-link-alt"></i>Xiaoying Riley (thème)
          </a>
        </li>
        <li>
          <a
            href="https://github.com/IonicaBizau/github-calendar"
            target="_blank"
          >
            <i className="fas fa-external-link-alt"></i>GitHub Calendar Plugin
          </a>
        </li>
        <li>
          <a
            href="https://caseyscarborough.com/projects/github-activity/"
            target="_blank"
          >
            <i className="fas fa-external-link-alt"></i>GitHub Activity Stream
          </a>
        </li>
        <li>
          <a href="https://github.com/coliff/dark-mode-switch">
            <i className="fas fa-external-link-alt"></i>Dark Mode Switch
          </a>
        </li>
        <li>
          <a href="https://fortawesome.github.io/Font-Awesome/" target="_blank">
            <i className="fas fa-external-link-alt"></i>FontAwesome
          </a>
        </li>
        <li>
          <a href="https://getbootstrap.com/" target="_blank">
            <i className="fas fa-external-link-alt"></i>Bootstrap
          </a>
        </li>
        <li>
          <a href="https://webpack.js.org/" target="_blank">
            <i className="fas fa-external-link-alt"></i>Webpack
          </a>
        </li>
        <li>
          <a href="https://fr.reactjs.org/" target="_blank">
            <i className="fas fa-external-link-alt"></i>React
          </a>
        </li>
      </ul>
    </Section>
    </>
  );
};
export default Credits;
