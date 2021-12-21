import React from 'react';
const BoutonContact = () => {
  return (
    <button
      type="button"
      className="btn btn-cta-primary"
      data-toggle="modal"
      data-target="#modaleMeContacter"
    >
      <i className="fas fa-paper-plane"></i> Me contacter
    </button>
  );
};

export default BoutonContact;
