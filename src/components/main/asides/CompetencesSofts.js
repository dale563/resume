import Section from "../../UI/Section";
import Competence from "./Competence";
import resume from "../../../donnees";
const Qualites = () => {
  return (
    <Section
      className="skills aside"
      // classNameHeader="sr-only"
      heading="Qualités"
    >
      {/* <p className="intro">
      J'aime bien aimé gérer des projets. Je suis aussi habituer à du travail de bout en bout.
      </p> */}

      <div className="skillset">
      {resume.qualites.map((competence) => (
          <Competence
            key={competence.id}
            nom={competence.nom}
            niveau={competence.niveau}
            tooltip={competence.tooltip}
            pourcentage={competence.pourcentage}
          />
        ))}
      </div>
    </Section>
  );
};

export default Qualites;