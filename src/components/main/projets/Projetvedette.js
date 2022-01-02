import React from "react";
import ProjetvedetteImage from "./ProjetvedetteImage";
import Lien from "../../UI/Lien";
import BoutonModaleProjet from "./modale/BoutonModaleProjet";
import ModaleProjet from "./modale/ModaleProjet";
const ProjetVedette = (props) => {
  return (
    <>
      <div className="item featured">
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
          <p className="pb-0 mb-0">{props.sommaire}</p>
        </div>
      </div>
      <div className="row mb-5">
        <div className="col-md-5 d-flex justify-content-center align-items-center">
          
            <ul className="liste_transparente pb-5 pe-2">
              <li><BoutonModaleProjet dataBsTarget={props.modale.dataBsTarget}/></li>
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
              hrefFormulaireDon={props.hrefFormulaireDon}
            />
        </div>
        <div className="col-md-7 d-flex flex-column">
          <p className="pb-0 mb-0">
            Avec l’aide de la plateforme de dons Symplik mise, vous pouvez
            soutenir les femmes en difficulté et à risque d’itinérance :
          </p>
          <a href={props.hrefFormulaireDon} target="_blank" className="btn-don-rempart md-align-self-end">
            Faire un don
          </a>
        </div>
        <hr/>
      </div>
      
    </>
  );
};

export default ProjetVedette;
