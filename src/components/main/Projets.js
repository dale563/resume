import Section from "../UI/Section";
import Projet from "./projets/projet";
import resume from "../../donnees";

const Projets = () => {
  return (
    <Section className="latest" heading="Derniers projets">
      {resume.projets.map((projet) => (
          <Projet
            key={projet.id}
            imgSrc={projet.imgSrc}
            imgAlt={projet.imgAlt}
            titre={projet.titre}
            sommaire={projet.sommaire}
            hrefLien={projet.hrefLien}
            nomLien={projet.nomLien}
            modale={projet.modale}
            vedette={projet.vedette}
          />
        ))}
    </Section>
  );
};

export default Projets;
