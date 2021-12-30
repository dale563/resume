import React from "react";
const BoutonModaleProjet = (props) => {
  return (
    <button
      type="button"
      className="badge badge-theme mx-2 bouton_modale_projet"
      data-bs-toggle="modal"
      data-bs-target={props.dataBsTarget}
    >
      Ouvrir
    </button>
  );
};

export default BoutonModaleProjet;
