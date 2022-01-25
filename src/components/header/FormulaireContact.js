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
          <label htmlFor="contact-nom">
            <span className="traduisible fr afficher">Nom*</span>
            <span className="traduisible en cacher">Name*</span>
          </label>
          <input
            name="nom"
            id="contact-nom"
            placeholder="Votre nom / your name"
            type="text"
            className="form-control"
            required
          />
          <div className="invalid-feedback">
            <span className="traduisible fr afficher">
              Veuillez écrire votre nom.
            </span>
            <span className="traduisible en cacher">
              Please write your name.
            </span>
          </div>
          <div className="valid-feedback">
            <span className="traduisible fr afficher">Merci !</span>
            <span className="traduisible en cacher">Thank you !</span>
          </div>
        </div>

        <div className="col-lg-6 mb-3">
          <label htmlFor="contact-numero-telephone">
            <span className="traduisible fr afficher">Numéro de téléphone</span>
            <span className="traduisible en cacher">Phone number</span>
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
          <label htmlFor="contact-courriel">
            <span className="traduisible fr afficher">Adresse courriel*</span>
            <span className="traduisible en cacher">E-mail*</span>
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
            <span className="traduisible fr afficher">
              Veuillez écrire votre adresse courriel.
            </span>
            <span className="traduisible en cacher">
              Please write a valid e-mail.
            </span>
          </div>
          <div className="valid-feedback">
            <span className="traduisible fr afficher">Merci !</span>
            <span className="traduisible en cacher">Thank you !</span>
          </div>
        </div>
        <div className="col-12 mb-3">
          <label htmlFor="contact-sujet">
          <span className="traduisible fr afficher">Sujet</span>
            <span className="traduisible en cacher">Subjet</span></label>
          <input
            name="sujet"
            id="contact-sujet"
            placeholder="Votre sujet / your subject"
            type="text"
            className="form-control"
          />
          <div className="invalid-feedback">Veuillez écrire votre sujet.</div>
          <div className="valid-feedback">
            <span className="traduisible fr afficher">Merci !</span>
            <span className="traduisible en cacher">Thank you !</span>
          </div>
        </div>
        <div className="col-12 mb-3">
          <label htmlFor="contact-message">Message*</label>
          <textarea
            name="message"
            className="form-control"
            id="contact-message"
            placeholder="Votre message / your message"
            rows="10"
            required
          ></textarea>
          <div className="invalid-feedback">
            <span className="traduisible fr afficher">
              Veuillez écrire votre message.
            </span>
            <span className="traduisible en cacher">
              Please write a message.
            </span>
          </div>
          <div className="valid-feedback">
            <span className="traduisible fr afficher">Merci !</span>
            <span className="traduisible en cacher">Thank you !</span>
          </div>
        </div>
        <div className="mb-3">
          <small>
            <span className="traduisible fr afficher">
              * Champs obligatoires
            </span>
            <span className="traduisible en cacher">* Mandatory fields</span>
          </small>
        </div>
        <div
          className="alert col-12 w-100 p-3 mb-0 bg-success text-light font-weight-bold text-center d-none"
          id="confirmation_contact"
          role="alert"
        >
          <span className="traduisible fr afficher">
            <span>
              Merci <i className="fas fa-smile"></i>
            </span>
            . Votre message à bien été envoyé. <br />
            Appuyer sur retour pour fermer la fenêtre.
          </span>
          <span className="traduisible en cacher">
            <span>
              Thank you <i className="fas fa-smile"></i>
            </span>
            . Your message has been sent. <br />
            Press the close button to exit.
          </span>
        </div>
      </div>
    </form>
  );
};

export default FormulaireContact;
