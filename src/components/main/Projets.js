import Section from "../UI/Section";
import Projet from "./projets/projet";
import resume from "../../donnees";

const Projets = () => {
  const classes = "latest";
  const classesEn = "en cacher " + classes;
  const classesFr = "fr afficher " + classes;

  return (
    <>
      <Section className={classesFr} heading="Derniers projets">
        {resume.fr.projets.map((projet) => (
          <Projet
            key={projet.id}
            imgSrc={projet.imgSrc}
            imgAlt={projet.imgAlt}
            titre={projet.titre}
            sommaire={projet.sommaire}
            modale={projet.modale}
            vedette={projet.vedette}
            liens={projet.liens}
            hrefFormulaireDon={projet.hrefFormulaireDon}
            vedetteTexte={projet.vedetteTexte}
            vedetteCta={projet.vedetteCta}
            vedetteTexteRuban={projet.vedetteTexteRuban}
          />
        ))}
      </Section>
      <Section className={classesEn} heading="Last projects">
        {resume.en.projets.map((projet) => (
          <Projet
            key={projet.id}
            imgSrc={projet.imgSrc}
            imgAlt={projet.imgAlt}
            titre={projet.titre}
            sommaire={projet.sommaire}
            modale={projet.modale}
            vedette={projet.vedette}
            liens={projet.liens}
            hrefFormulaireDon={projet.hrefFormulaireDon}
            vedetteCta={projet.vedetteCta}
            vedetteTexte={projet.vedetteTexte}
            vedetteTexteRuban={projet.vedetteTexteRuban}
          />
        ))}
      </Section>
    </>
  );
};

export default Projets;
