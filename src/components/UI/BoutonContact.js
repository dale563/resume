import React from "react";
const BoutonContact = () => {
  return (
    <button
      type="button"
      className="btn btn-cta-primary"
      data-bs-toggle="modal"
      data-bs-target="#modaleMeContacter"
    >
      <i className="fas fa-paper-plane"></i> Me contacter
    </button>
  );
};

export default BoutonContact;
