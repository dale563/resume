import Section from "../../UI/Section";
import Langue from "./Langue";
import resume from '../../../donnees';
const Langues = (props) => {

  return (
    <Section className={props.classesAjouteSection} heading={props.heading}>
      <ul className="list-unstyled">
        {resume.langues.map((langue) => (
          <Langue
            key={langue.id}
            nom={langue.nom}
            niveau={langue.niveau}
            commentaire={langue.commentaire}
          />
        ))}
      </ul>
    </Section>
  );
};

export default Langues;
