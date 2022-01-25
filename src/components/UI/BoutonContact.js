import React from "react";
const BoutonContact = () => {
  return (
    <>
    <button
      type="button"
      className="fr afficher btn btn-cta-primary"
      data-bs-toggle="modal"
      data-bs-target="#modaleMeContacter"
    >
      <i className="fas fa-paper-plane"></i> Me contacter
    </button>
    <button
      type="button"
      className="en cacher btn btn-cta-primary"
      data-bs-toggle="modal"
      data-bs-target="#modaleMeContacter"
    >
      <i className="fas fa-paper-plane"></i> Contact me
    </button>
    </>
  );
};

export default BoutonContact;
