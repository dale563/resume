import React from 'react';
const FormulaireContact = () => {
  return (
    <form
      id="formulaireContact"
      className="row needs-validation"
      data-toggle="validator"
      role="form"
      noValidate
    >
      <div className="row">
        <div className="col-12 form-floating mb-3">
          <label className="ps-4" htmlFor="prenomflottant">
            Nom
          </label>
          <input
            id="prenomflottant"
            placeholder="Nom"
            type="text"
            className="form-control"
            required
          />
          <div className="invalid-feedback">Veuillez écrire votre nom.</div>
          <div className="valid-feedback">Merci !</div>
        </div>
        <div className="col-12 form-floating mb-3">
          <label className="ps-4" htmlFor="prenomflottant">
            Adresse courriel.
          </label>
          <input
            id="courrielflottant"
            placeholder="Adresse courriel"
            type="text"
            className="form-control"
            required
          />
          <div className="invalid-feedback">
            Veuillez écrire votre adresse courriel.
          </div>
          <div className="valid-feedback">Merci !</div>
        </div>

        <div className="col-12">
          <label className="ps-4" htmlFor="numero-telephone-flottant">
            Numéro de téléphone
          </label>
          <input
            className="form-control"
            id="numero-telephone-flottant"
            placeholder="Numéro de téléphone"
            type="text"
          />
        </div>

        <div className="col-12 form-floating mb-3">
          <label className="ps-4" htmlFor="sujet-flottant">
            Sujet
          </label>
          <input
            id="sujet-flottant"
            placeholder="Sujet du message"
            type="text"
            className="form-control"
            required
          />
          <div className="invalid-feedback">Veuillez écrire votre sujet.</div>
          <div className="valid-feedback">Merci !</div>
        </div>
        <div className="col-12">
          <label className="ps-4" htmlFor="exempleMessage">
            Message
          </label>
          <textarea
            className="form-control"
            id="exempleMessage"
            placeholder="Message"
            rows="10"
          ></textarea>
        </div>
      </div>
    </form>
  );
};

export default FormulaireContact;
