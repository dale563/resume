import Section from "../UI/Section";
import ProjetVedette from "./projets/projetvedette";
import Projet from "./projets/projet";
import resume from "../../donnees";

const Projets = () => {
  return (
    <Section className="latest" heading="Derniers projets">
      <ProjetVedette />
      {resume.projets.map((projet) => (
          <Projet
            key={projet.id}
            imgSrc={projet.imgSrc}
            imgAlt={projet.imgAlt}
            titre={projet.titre}
            sommaire={projet.sommaire}
          />
        ))}
    </Section>
  );
};

export default Projets;
