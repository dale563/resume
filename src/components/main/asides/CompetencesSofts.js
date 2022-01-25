import Section from "../../UI/Section";
import Competence from "./Competence";
import resume from "../../../donnees";
const Qualites = () => {
  const classes = "skills aside";
  const classesHeader ="sr-only";
  const classesEn = "en cacher " + classes;
  const classesFr = "fr afficher " + classes;
  return (
    <>
    <Section
    className={classesFr}
      // classNameHeader={classesHeader}
      heading="Qualités"
    >

      <div className="skillset">
      {resume.fr.qualites.map((competence) => (
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
      heading="Soft skills"
    >

      <div className="skillset">
      {resume.fr.qualites.map((competence) => (
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
    </>
  );
};

export default Qualites;