import Modale from "../UI/Modale";

function ModaleConfirmation() {
  return (
    <Modale
      htmlIdModale="modaleConfirmation"
      header="Formulaire de contact"
      grandeur="lg"
    >
      <div className="m-5 p-5 text-center">
        <p>Merci! Votre message a bien été envoyé.</p>
        <p>Je vous répondrai sous peu.</p>
      </div>
    </Modale>
  );
}

export default ModaleConfirmation;
