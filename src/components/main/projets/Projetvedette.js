import React from "react";
import ProjetvedetteImage from "./ProjetvedetteImage";
const ProjetVedette = (props) => {
  return (
    <>
      <div className="item featured text-center">
        <div className="featured-image has-ribbon">
          <a href={props.imageSrc} target="_blank">
            <ProjetvedetteImage imgSrc={props.imgSrc} imgAlt={props.imgAlt} />
          </a>
          <div className="ribbon">
            <div className="text">Vedette</div>
          </div>
        </div>

        <h3 className="title mb-3">{props.titre}</h3>
        <div className="desc text-start">
          <p>
            {props.sommaire}
            <a className="more-link" href={props.codeModale} target="_blank">
              En savoir plus
            </a>
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-5">
          <p>
            <a className="more-link" href={props.hrefLien} target="_blank">
              <i className="fas fa-external-link-alt"></i> {props.nomLien}
            </a>
          </p>
        </div>
        <div className="col-md-7">
          <h4 className="sous-titre">Soutenir Le Rempart</h4>
          <p>
            Avec l’aide de la plateforme de dons Symplik mise, vous pouvez
            soutenir les femmes en difficulté et à risque d’itinérance :
          </p>
          <a href="javascript:;" className="btn btn-primary btn-don-rempart">
            FAIRE UN DON À L'ORGANISME
          </a>
        </div>
      </div>
    </>
  );
};

export default ProjetVedette;
