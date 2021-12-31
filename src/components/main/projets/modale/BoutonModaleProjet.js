import React from "react";

import mesIcones from "../../../../mesIcones";

const BoutonModaleProjet = (props) => {
  return (
    <a
      href="#"
      data-bs-toggle="modal"
      data-bs-target={props.dataBsTarget}
     >
       <span className={mesIcones.flecheVersDroite.classes} data-icon={mesIcones.flecheVersDroite.dataIcon}>
       </span>
       {" "}Les coulisses du projets
    </a>
  );
};

export default BoutonModaleProjet;


