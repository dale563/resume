import React from "react";
const BoutonContact = () => {
  return (
    <>
    <button
      type="button"
      className= "traduisible fr afficher btn btn-cta-primary m-auto m-lg-0"
      data-bs-toggle="modal"
      data-bs-target="#modaleMeContacter"
    >
      <i className="fas fa-paper-plane"></i> Me contacter
    </button>
    <button
      type="button"
      className= "traduisible en cacher btn btn-cta-primary"
      data-bs-toggle="modal"
      data-bs-target="#modaleMeContacter"
    >
      <i className="fas fa-paper-plane"></i> Contact me
    </button>
    </>
  );
};

export default BoutonContact;
