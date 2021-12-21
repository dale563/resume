import React from 'react';
import FormulaireContact from "./FormulaireContact";

const ModaleContact = () => {

    return (
        <div className="modal fade" id="modaleMeContacter" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Formulaire de contact</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <FormulaireContact/>
                    </div>
                    <div className="modal-footer">
                        <div>
                            <input className="btn btn-secondary" data-bs-dismiss="modal" type="reset" value="Retour"/> 
                            <input id="btn_reinitialiser" className="btn btn-warning" type="button" value="Réinitialiser"/>
                            <input className="btn btn-success" type="submit" form="formulaire218" value="Envoyer"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModaleContact;
