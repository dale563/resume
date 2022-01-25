import Section from "../../UI/Section";
import Education from "./Education";
import resume from "../../../donnees";
const Educations = (props) => {
  const classes = "education aside";
  const classesEn = "en cacher " + classes;
  const classesFr = "fr afficher " + classes;

  return (
    <>
      <Section className={classesFr} heading="Éducation">
        {resume.fr.educations.map((education) => (
          <Education
            key={education.id}
            nomFormation={education.nomFormation}
            lieuFormation={education.lieuFormation}
            anneesFormation={education.anneesFormation}
            documentsUri={education.documentsUri}
          />
        ))}
      </Section>
      <Section className={classesEn} heading="Education">
        {resume.en.educations.map((education) => (
          <Education
            key={education.id}
            nomFormation={education.nomFormation}
            lieuFormation={education.lieuFormation}
            anneesFormation={education.anneesFormation}
          />
        ))}
      </Section>
    </>
  );
};

export default Educations;
