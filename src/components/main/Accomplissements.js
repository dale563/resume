import Section from "../UI/Section";
import Accomplissement from "./Accomplissement";
import resume from "../../donnees";

const Accomplissements = () => {
  return (
    <Section className="projects" heading="Autres accomplissements">
      {resume.accomplissements.map((accomplissement) => (
          <Accomplissement
            key={accomplissement.id}
            titre={accomplissement.titre}
            texte={accomplissement.texte}
            lien={accomplissement.lien}
            />
        ))}
    </Section>
  );
};

export default Accomplissements;
