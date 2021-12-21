import Section from "../../UI/Section";
import Competence from "./Competence";
const Competences = () => {
  return (
    <Section
      className="skills aside"
      classNameHeader="sr-only"
      heading="Compétences"
    >
      <p className="intro">
        Intro about your skills goes here. Keep the list lean and only show your
        primary skillset. You can always provide a link to your Linkedin or
        Github profile so people can get more info there.
      </p>

      <div className="skillset">
        <Competence />
        <Competence />
        <Competence />
      </div>
    </Section>
  );
};

export default Competences;
