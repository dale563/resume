import Section from "../../UI/Section";
import Competence from "./Competence";
import resume from "../../../donnees";
const Competences = () => {
  const classes = "skills aside";
  const classesHeader ="sr-only";
  const classesEn = "en cacher " + classes;
  const classesFr = "fr afficher " + classes;
  return (
    <>
    <Section
      className={classesFr}
      // classNameHeader={classesHeader}
      heading="Compétences techniques"
    >
      <div className="skillset">
      {resume.fr.competences.map((competence) => (
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
    <Section
      className={classesEn}
      // classNameHeader={classesHeader}
      heading="Hard skills"
    >
      <div className="skillset">
      {resume.en.competences.map((competence) => (
          <Competence
            key={competence.id}
            nom={competence.nom}
            niveau={competence.niveau}
            tooltip={competence.tooltip}
            pourcentage={competence.pourcentage}
          />
        ))}
      </div>
    </Section></>
  );
};

export default Competences;
