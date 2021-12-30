import React from "react";
import BoutonModaleProjet from "./modale/BoutonModaleProjet";
import ProjetImage from "./ProjetImage";
import ProjetVedette from "./projetvedette";
import ModaleProjet from "./modale/ModaleProjet";
const Projet = (props) => {
  return (
    <>
      {props.vedette && (
        <ProjetVedette
          titre={props.titre}
          sommaire={props.sommaire}
          imgSrc={props.imgSrc}
          imgAlt={props.imgAlt}
          hrefLien={props.hrefLien}
          nomLien={props.nomLien}
          modale={props.modale}
        />
      )}
      {!props.vedette && (
        <div className="item row">
          <a className="col-md-4 col-12" href={props.imageSrc} target="_blank">
            <ProjetImage imgSrc={props.imgSrc} imgAlt={props.imgAlt} />
          </a>

          <div className="desc col-md-8 col-12">
            <div className="d-flex mb-2">
              <h3 className="title pt-3">{props.titre}</h3>
              <BoutonModaleProjet dataBsTarget={props.modale.dataBsTarget} />
            </div>
            <ModaleProjet
              htmlIdModale={props.modale.htmlIdModale}
              header={props.modale.header}
              sections={props.modale.sections}
            />
            <p className="mb-2">{props.sommaire}</p>
            <p>
              <a className="more-link" href={props.hrefLien} target="_blank">
                <i className="fas fa-external-link-alt"></i> {props.nomLien}
              </a>
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Projet;
