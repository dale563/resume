import Paragraphe from "../../../UI/Paragraphe";
import Lien from "../../../UI/Lien";

const ModaleSectionText = (props) => {
  return (
    <div className="col-12 col-xl-6 modale_section_text">
      {props.children}
      <div className="p-3 modale_section_text_paragraphes">
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
