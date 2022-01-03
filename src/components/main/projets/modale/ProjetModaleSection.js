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
            <ModaleSectionImage imgSrc={props.imgSrc} imgAlt={props.imgAlt} className="d-none d-xl-block" />
            <ModaleSectionText
              paragraphes={props.paragraphes}
              liens={props.liens}
            >
            <h6 className="pt-2">{props.titre}</h6>
            </ModaleSectionText>
            <ModaleSectionImage imgSrc={props.imgSrc} imgAlt={props.imgAlt} className="d-xl-none" />
          </>
        )}
        {estPair(compteur) && (
          <>
            
            <ModaleSectionText
              paragraphes={props.paragraphes}
              liens={props.liens}
            >
            <h6 className="pt-2">{props.titre}</h6>
            </ModaleSectionText>
            <ModaleSectionImage imgSrc={props.imgSrc} imgAlt={props.imgAlt} />
          </>
        )}
      </div>
    </>
  );
};

export default ProjetModaleSection;
