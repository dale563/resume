const Modale = (props) => {
  const ariaLabel = props.htmlIdModale + "_label";
  const classesModale = `modal-dialog modal-${props.grandeur}`;

  return (
    <div
      className="modal fade modale_projet"
      id={props.htmlIdModale}
      tabIndex="-1"
      aria-labelledby={ariaLabel}
      aria-hidden="true"
    >
      <div className={classesModale}>
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title title" id={ariaLabel}>
              {props.header}
            </h5>
              <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Fermer"
            >
            </button>
          </div>
          <div className="modal-body">{props.children}
          </div>

          <div className="modal-footer">
            <input
              className="fr afficher btn btn-secondary"
              data-bs-dismiss="modal"
              type="reset"
              value="Retour"
            />
            <input
              className="en cacher btn btn-secondary"
              data-bs-dismiss="modal"
              type="reset"
              value="Close"
            />
            {props.htmlIdModale === "modaleMeContacter" && (
              <>
                <input
                  id="btn_reinitialiser"
                  className="fr afficher btn btn-warning"
                  type="button"
                  value="Réinitialiser"
                />
                <input
                  id="btn_envoyer_formulaire_contact"
                  className="fr afficher btn btn-success"
                  type="submit"
                  form="formulaireContact"
                  value="Envoyer"
                />
                <input
                  id="btn_reinitialiser"
                  className="en cacher btn btn-warning"
                  type="button"
                  value="Reinitialize"
                />
                <input
                  id="btn_envoyer_formulaire_contact"
                  className="en cacher btn btn-success"
                  type="submit"
                  form="formulaireContact"
                  value="Send"
                />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Modale;
