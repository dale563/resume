import Section from "../../UI/Section";
import Competence from "./Competence";
import resume from "../../../donnees";
const Competences = () => {
  return (
    <Section
      className="skills aside"
      classNameHeader="sr-only"
      heading="Compétences"
    >
      <p className="intro">
      Mon intérêt est marqué pour le développement front-end. J'apprécie particulièrement le Sass, Bootstrap, React, Git et Webpack.
      </p>

      <div className="skillset">
      {resume.competences.map((competence) => (
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

export default Competences;
