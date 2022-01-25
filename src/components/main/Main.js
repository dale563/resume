import React from "react";

import APropos from "./APropos";
import Projets from "./projets";
import Accomplissements from "./Accomplissements";
import Experiences from "./Experiences";
import GitHub from "./GitHub";

import Infos from "./asides/Infos";
import Competences from "./asides/Competences";
import Qualites from "./asides/CompetencesSofts";
import Temoignages from "./asides/Temoignages";
import Educations from "./asides/Educations";
import Langues from "./asides/Langues";
import Credits from "./asides/Credits";
import TechnologiesUtilisees from "./asides/TechnologiesUtilisees";

const Main = () => {
  return (
    <main className="container sections-wrapper py-5">
      <div className="row">
        <div className="primary col-lg-8 col-12">
          <APropos />
          <Projets />
          <Accomplissements />
          <Experiences />
          <GitHub />
        </div>
        <aside className="secondary col-lg-4 col-12">
          <Infos />
          <Temoignages />
          <TechnologiesUtilisees />
          <Competences />
          <Qualites />
          <Educations />
          <Langues />
          <Credits />
        </aside>
      </div>
    </main>
  );
};

export default Main;
