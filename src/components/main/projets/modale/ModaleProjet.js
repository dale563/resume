import ProjetModaleSection from "./ProjetModaleSection";
import Modale from "../../../UI/Modale";
const ModaleProjet = (props) => {
  return (
    <Modale htmlIdModale={props.htmlIdModale} header={props.header} grandeur="xl">
      {props.sections.map((section) => (
        <ProjetModaleSection
          key={section.id}
          titre={section.titre}
          imgSrc={section.imgSrc}
          imgAlt={section.imgAlt}
          paragraphes={section.paragraphes}
          liens={section.liens}
        />
      ))}
    </Modale>
  );
};

export default ModaleProjet;
