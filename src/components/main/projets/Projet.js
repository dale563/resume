import React from "react";
import BoutonModaleProjet from "./modale/BoutonModaleProjet";
import ProjetImage from "./ProjetImage";
import ProjetVedette from "./projetvedette";
import ModaleProjet from "./modale/ModaleProjet";
import Lien from "../../UI/Lien";
const Projet = (props) => {
  return (
    <>
      {props.vedette && (
        <ProjetVedette
          titre={props.titre}
          sommaire={props.sommaire}
          imgSrc={props.imgSrc}
          imgAlt={props.imgAlt}
          hrefFormulaireDon={props.hrefFormulaireDon}
          modale={props.modale}
          liens={props.liens}
        />
      )}

      {!props.vedette && (
        <div className="item row pb-2">
          <a className="col-md-4 col-12" href={props.imageSrc} target="_blank">
            <ProjetImage imgSrc={props.imgSrc} imgAlt={props.imgAlt} />
          </a>

          <div className="desc col-md-8 col-12">
            <h3 className="title">{props.titre}</h3>

            <p>{props.sommaire}</p>
            <ul className="liste_transparente">
              <li>
                <BoutonModaleProjet dataBsTarget={props.modale.dataBsTarget} />
              </li>
              {props.liens &&
                props.liens.map((lien) => (
                  <li key={lien.id}>
                    <Lien
                      key={lien.id}
                      text={lien.text}
                      href={lien.href}
                      iconeClasses={lien.icone.classes}
                      iconeDataIcon={lien.icone.dataIcon}
                    />
                  </li>
                ))}
            </ul>
            <ModaleProjet
              htmlIdModale={props.modale.htmlIdModale}
              header={props.modale.header}
              sections={props.modale.sections}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Projet;
