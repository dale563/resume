import Section from "../UI/Section";
import Accomplissement from "./Accomplissement";
import resume from "../../donnees";

const Accomplissements = () => {
  const classes = "projects";
  const classesEn = "en cacher " + classes;
  const classesFr = "fr afficher " + classes;
  
  return (
    <>
    <Section className={classesFr} heading="Autres accomplissements">
      {resume.fr.accomplissements.map((accomplissement) => (
          <Accomplissement
            key={accomplissement.id}
            titre={accomplissement.titre}
            texte={accomplissement.texte}
            lien={accomplissement.lien}
            />
        ))}
    </Section>
    <Section className={classesEn} heading="Other success">
      {resume.en.accomplissements.map((accomplissement) => (
          <Accomplissement
            key={accomplissement.id}
            titre={accomplissement.titre}
            texte={accomplissement.texte}
            lien={accomplissement.lien}
            />
        ))}
    </Section>
    </>
  );
};

export default Accomplissements;
