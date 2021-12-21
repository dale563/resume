import Section from "../UI/Section";
import Experience from "./Experience";

const Experiences = (props) => {
  return (
    <Section className={props.classesAjouteSection} heading={props.heading}>
      <Experience />
      <Experience />
      <Experience />
    </Section>
  );
};

export default Experiences;
