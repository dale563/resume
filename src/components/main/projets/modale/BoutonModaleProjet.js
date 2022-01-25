import React from "react";

import mesIcones from "../../../../mesIcones";

const BoutonModaleProjet = (props) => {
  return (
    <a href="#" data-bs-toggle="modal" data-bs-target={props.dataBsTarget}>
      <span className="traduisible fr afficher">
        <span
          className={mesIcones.flecheVersDroite.classes}
          data-icon={mesIcones.flecheVersDroite.dataIcon}
        ></span>{" "}
        Les coulisses du projet
      </span>
      <span className="traduisible en cacher">
        <span
          className={mesIcones.flecheVersDroite.classes}
          data-icon={mesIcones.flecheVersDroite.dataIcon}
        ></span>{" "}
        Project's backstage
      </span>
    </a>
  );
};

export default BoutonModaleProjet;
