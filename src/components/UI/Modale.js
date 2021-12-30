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
              className="btn"
              data-bs-dismiss="modal"
              aria-label="Fermer"
            >
              <span aria-hidden="true">
                <i className="fas fa-times times_modale"></i>
              </span>
            </button>
          </div>
          <div className="modal-body">{props.children}</div>

          <div className="modal-footer">
            <input
              className="btn btn-secondary"
              data-bs-dismiss="modal"
              type="reset"
              value="Retour"
            />
            {props.htmlIdModale === "modaleMeContacter" && (
              <>
                <input
                  id="btn_reinitialiser"
                  className="btn btn-warning"
                  type="button"
                  value="Réinitialiser"
                />
                <input
                  className="btn btn-success"
                  type="submit"
                  form="formulaireContact"
                  value="Envoyer"
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
