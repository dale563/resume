import React from 'react';
import Section from "../UI/Section";
import Projet from "./projets/projet";
import ProjetVedette from "./projets/projetvedette";
import Experience from "./Experience";
import CarouselTemoignage from "./asides/CarouselTemoignages";
import Education from "./asides/Education";
import Langue from "./asides/Langue";
import Credits from "./asides/Credits";
import Accomplissement from "./Accomplissement";
import Competence from "./asides/Competence";

const Main = () => {
  return (
    <main className="container sections-wrapper py-5">
      <div className="row">
        <div className="primary col-lg-8 col-12">
          <Section className="about" heading="À propos de moi">
            <p>
              J’accorde beaucoup d’importance à l’efficacité et à
              l’optimisation. Mon super pouvoir est la résolution de problème
              par la vision d’ensemble (systémique). Je suis passionné de
              technologies et de médecines naturelles et j’aspire à équilibrer
              les deux dans ma vie. Je me débrouille bien dans la gestion d’une
              équipe ou d’un projet et j’aspire à un environnement
              professionnel, bienveillant et convivial.
            </p>
            <p>
              Un poste d'intégrateur web ou de programmeur front-end sur quatre
              jours par semaine majoritairement à distance serait en harmonie
              avec mes essentiels de vie. Ceci étant dit, je suis ouvert à
              d'autres propositions qui permettraient une place pour ma pratique
              en naturopathie (une journée par semaine ou l'équivalent suffit).
            </p>
          </Section>
          <Section className="latest" heading="Derniers projets">
            <ProjetVedette />
            <Projet />
            <Projet />
            <Projet />
          </Section>
          <Section className="projects" heading="Autres accomplissement">
            <Accomplissement />
            <Accomplissement />
            <Accomplissement />
          </Section>
          <Section className="experience" heading="Éxpérience de travail">
            <Experience />
            <Experience />
            <Experience />
            <Experience />
          </Section>
          <Section className="github" heading="Mon GitHub">
            <div id="github-graph" className="github-graph"></div>

            <div id="ghfeed" className="ghfeed"></div>
          </Section>
          </div>
        <aside className="secondary col-lg-4 col-12">
          <Section
            className="info aside"
            classNameHeader="sr-only"
            heading="Basic Information"
          >
            <ul className="list-unstyled">
              <li>
                <i className="fas fa-map-marker-alt"></i>
                <span className="sr-only">Location:</span>Terrebpnne, QC
              </li>
              <li>
                <i className="fas fa-phone"></i>
                <span className="sr-only">Téléphone:</span>
                <a href="tel:438-933-7785">438-933-7785</a>
              </li>
              <li>
                <i className="fas fa-envelope"></i>
                <span className="sr-only">Email:</span>
                <a href="mailto:limogesdale@outlook.com">
                  limogesdale@outlook.com
                </a>
              </li>
              <li>
                <i className="fas fa-link"></i>
                <span className="sr-only">Website:</span>
                <a href="https://dalelimoges-iw.web.app/">
                  https://dalelimoges-iw.web.app/
                </a>
              </li>
            </ul>
          </Section>

          <Section
            className="skills aside"
            classNameHeader="sr-only"
            heading="Compétences"
          >
            <p className="intro">
              Intro about your skills goes here. Keep the list lean and only
              show your primary skillset. You can always provide a link to your
              Linkedin or Github profile so people can get more info there.
            </p>

            <div className="skillset">
              <Competence />
              <Competence />
              <Competence />
            </div>
          </Section>
          <Section className="testimonials aside" heading="Témoignages">
            <CarouselTemoignage />
          </Section>

          <Section className="education aside" heading="Éducation">
            <Education />
            <Education />
            <Education />
          </Section>

          <Section className="languages aside" heading="Langues">
            <ul className="list-unstyled">
              <Langue />
            </ul>
          </Section>

          <Section
            className="credits aside"
            classNameHeader="sr-only"
            heading="Crédits"
          >
            <Credits />
          </Section>
        </aside>
      </div>
    </main>
  );
};

export default Main;