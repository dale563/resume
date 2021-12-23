import React from "react";
import FormulaireContact from "./FormulaireContact";

const ModaleContact = () => {
  return (
    <div
      className="modal fade"
      id="modaleMeContacter"
      tabindex="-1"
      aria-labelledby="labelModaleContact"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="labelModaleContact">
              Formulaire de contact
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <FormulaireContact />
          </div>
          <div className="modal-footer">
            <input
              className="btn btn-secondary"
              data-bs-dismiss="modal"
              type="reset"
              value="Retour"
            />
            <input
              id="btn_reinitialiser"
              className="btn btn-warning"
              type="button"
              value="Réinitialiser"
            />
            <input
              className="btn btn-success"
              type="submit"
              form="formulaire218"
              value="Envoyer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModaleContact;
