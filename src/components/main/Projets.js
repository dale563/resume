import Section from "../UI/Section";
import ProjetVedette from "./projets/projetvedette";
import Projet from "./projets/projet";

const Projets = () => {
  return (
    <Section className="latest" heading="Derniers projets">
      <ProjetVedette />
      <Projet />
      <Projet />
      <Projet />
    </Section>
  );
};

export default Projets;
