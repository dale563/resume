import React from "react";
import ProjetImage from "./ProjetImage";
import ProjetVedette from "./projetvedette";
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
          codeModale={props.codeModale}
        />
      )}
      {!props.vedette && (
        <div className="item row">
          <a className="col-md-4 col-12" href={props.imageSrc} target="_blank">
            <ProjetImage imgSrc={props.imgSrc} imgAlt={props.imgAlt} />
          </a>

          <div className="desc col-md-8 col-12">
            <h3 className="title">{props.titre}</h3>
            <p className="mb-2">
              {props.sommaire}
              <a className="more-link" href={props.codeModale} target="_blank">
                En savoir plus
              </a>
            </p>
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
