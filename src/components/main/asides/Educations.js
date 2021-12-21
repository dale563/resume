import Section from "../../UI/Section";
import Education from "./Education";
import resume from "../../../donnees";
const Educations = (props) => {

  return (
    <Section className={props.classesAjouteSection} heading={props.heading}>
      {resume.educations.map((education) => (
          <Education
            key={education.id}
            nomFormation={education.nomFormation}
            lieuFormation={education.lieuFormation}
            anneesFormation={education.anneesFormation}
            documentsUri={education.documentsUri}
          />
        ))}
    </Section>
  );
};

export default Educations;
