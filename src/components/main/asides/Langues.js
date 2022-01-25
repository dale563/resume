import Section from "../../UI/Section";
import Langue from "./Langue";
import resume from '../../../donnees';
const Langues = (props) => {
  const classes = "languages aside";
  const classesEn = "en cacher " + classes;
  const classesFr = "fr afficher " + classes;
  return (
    <>
    <Section className={classesFr} heading="Langues">
      <ul className="list-unstyled">
        {resume.fr.langues.map((langue) => (
          <Langue
            key={langue.id}
            nom={langue.nom}
            niveau={langue.niveau}
            commentaire={langue.commentaire}
          />
        ))}
      </ul>
    </Section>
    <Section className={classesEn} heading="Languages">
      <ul className="list-unstyled">
        {resume.en.langues.map((langue) => (
          <Langue
            key={langue.id}
            nom={langue.nom}
            niveau={langue.niveau}
            commentaire={langue.commentaire}
          />
        ))}
      </ul>
    </Section>
    </>
  );
};

export default Langues;
