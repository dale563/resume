import React from "react";

import APropos from "./APropos";
import Projets from "./projets";
import Accomplissements from "./Accomplissements";
import Experiences from "./Experiences";
import GitHub from "./GitHub";

import Infos from "./asides/Infos";
import Competences from "./asides/Competences";
import Temoignages from "./asides/Temoignages";
import Educations from "./asides/Educations";
import Langues from "./asides/Langues";
import Credits from "./asides/Credits";

const Main = () => {
  return (
    <main className="container sections-wrapper py-5">
      <div className="row">
        <div className="primary col-lg-8 col-12">
          <APropos />
          <Projets />
          <Accomplissements />
          <Experiences
            heading="Éxpérience de travail"
            classesAjouteSection="experience"
          />
          <GitHub />
        </div>
        <aside className="secondary col-lg-4 col-12">
          <Infos />
          <Competences />
          <Temoignages />
          <Educations
            heading="Éducation"
            classesAjouteSection="education aside"
          />
          <Langues heading="Langues" classesAjouteSection="languages aside" />

          <Credits
            heading="Crédits"
            classesAjouteSection="credits aside"
            classNameHeader="sr-only"
          />
        </aside>
      </div>
    </main>
  );
};

export default Main;
