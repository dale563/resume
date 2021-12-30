import Paragraphe from "../../../UI/Paragraphe";
import Lien from "../../../UI/Lien";

const ModaleSectionText = (props) => {
  return (
    <div className="col-12 col-lg-6">
      <h6 className="pt-2">{props.titre}</h6>
      <div className="p-3">
        {props.paragraphes.map((texte) => (
          <Paragraphe
            key={texte.id}
            texte={texte.texte}
            lien={texte.lien}
            nomLien={texte.nomLien}
          />
        ))}
        {props.liens &&
          props.liens.map((lien) => (
            <Lien
              key={lien.id}
              text={lien.text}
              href={lien.href}
              iconeClasses={lien.icone.classes}
              iconeDataIcon={lien.icone.dataIcon}
            />
          ))}
      </div>
    </div>
  );
};

export default ModaleSectionText;
