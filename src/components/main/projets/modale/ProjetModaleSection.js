import ModaleSectionText from "./ModaleSectionText";
import ModaleSectionImage from "./ModaleSectionImage";

let compteur = 0;

function estPair(n) {
  return n % 2 == 0;
}

const ProjetModaleSection = (props) => {
  compteur++;
  return (
    <>
      <div className="row p-3">
        {!estPair(compteur) && (
          <>
            <ModaleSectionImage imgSrc={props.imgSrc} imgAlt={props.imgAlt} />
            <ModaleSectionText
              titre={props.titre}
              paragraphes={props.paragraphes}
              liens={props.liens}
            />
          </>
        )}
        {estPair(compteur) && (
          <>
            <ModaleSectionText
              titre={props.titre}
              paragraphes={props.paragraphes}
              liens={props.liens}
            />
            <ModaleSectionImage imgSrc={props.imgSrc} imgAlt={props.imgAlt} />
          </>
        )}
      </div>
    </>
  );
};

export default ProjetModaleSection;
