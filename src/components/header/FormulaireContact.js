import React from 'react';

const FormulaireContact = () => {
   return (
    <form
      id="formulaireContact"
      className="needs-validation"
      data-toggle="validator"
      role="form"
      noValidate
    >
      <div className="row w-100 m-auto p-auto">
        <div className="col-lg-6 mb-3">
          <label  htmlFor="contact-nom">
            Nom*
          </label>
          <input
            name="nom"
            id="contact-nom"
            placeholder="Votre nom"
            type="text"
            className="form-control"
            required
          />
          <div className="invalid-feedback">Veuillez écrire votre nom.</div>
          <div className="valid-feedback">Merci !</div>
        </div>

        <div className="col-lg-6 mb-3">
          <label  htmlFor="contact-numero-telephone">
            Numéro de téléphone
          </label>
          <input
            name="telephone"
            className="form-control"
            id="contact-numero-telephone"
            placeholder="333-444-5555"
            type="tel"
          />
        </div>

        <div className="col-12 mb-3">
          <label  htmlFor="contact-courriel">
            Adresse courriel*
          </label>
          <input
            name="courriel"
            id="contact-courriel"
            placeholder="adresse@domaine.abc"
            type="email"
            className="form-control"
            required
          />
          <div className="invalid-feedback">
            Veuillez écrire votre adresse courriel.
          </div>
          <div className="valid-feedback">Merci !</div>
        </div>
        <div className="col-12 mb-3">
          <label  htmlFor="contact-sujet">
            Sujet
          </label>
          <input
            name="sujet"
            id="contact-sujet"
            placeholder="Sujet du message"
            type="text"
            className="form-control"
          />
          <div className="invalid-feedback">Veuillez écrire votre sujet.</div>
          <div className="valid-feedback">Merci !</div>
        </div>
        <div className="col-12 mb-3">
          <label  htmlFor="contact-message">
            Message*
          </label>
          <textarea
            name="message"
            className="form-control"
            id="contact-message"
            placeholder="Votre message"
            rows="10"
            required
          ></textarea>
          <div className="invalid-feedback">Veuillez écrire votre message.</div>
          <div className="valid-feedback">Merci !</div>
        </div>
        <div className="mb-3">
          <small>* Champs obligatoires</small>
        </div>
        <div className="alert col-12 w-100 p-3 mb-0 bg-success text-light font-weight-bold text-center d-none" id="confirmation_contact" role="alert">
        <span>Merci <i className="fas fa-smile"></i></span>.{" "} Votre message à bien été envoyé. <br/>Appuyer sur retour pour fermer la fenêtre.
      </div>
      </div>
    </form>
  );
};

export default FormulaireContact;
