"use strict";

GitHubActivity.feed({
  username: "dale563",
  selector: "#ghfeed",
  limit: 20, // optional
});

const firebaseConfig = {
  apiKey: "AIzaSyChERzhVdnYOcP32coEpXk3snu5ROw--wE",
  authDomain: "dalelimoges-iw.firebaseapp.com",
  databaseURL: "https://dalelimoges-iw-default-rtdb.firebaseio.com",
  projectId: "dalelimoges-iw",
  storageBucket: "dalelimoges-iw.appspot.com",
  messagingSenderId: "885980907698",
  appId: "1:885980907698:web:bde463e009944b649da1ab",
  measurementId: "G-HVCXJ5YW0B",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

let contactInfo = firebase.database().ref("dliw-formulaire-contact");

const saveContactInfo = (nom, courriel, telephone, sujet, message) => {
  let newContactInfo = contactInfo.push();

  newContactInfo.set({
    nom: nom,
    courriel: courriel,
    telephone: telephone,
    sujet: sujet,
    message: message,
  });
};

const submitForm = () => {
  let nom = document.getElementById("contact-nom").value;
  let courriel = document.getElementById("contact-courriel").value;
  let telephone = document.getElementById("contact-numero-telephone").value;
  let sujet = document.getElementById("contact-sujet").value;
  let message = document.getElementById("contact-message").value;

  console.log(nom, courriel, telephone, sujet, message);
  saveContactInfo(nom, courriel, telephone, sujet, message);
  reinitialiserFormulaire();
  afficherConfirmation();
};


const formulaireContact = document.getElementById("formulaireContact");
const boutonReinitialier = document.getElementById("btn_reinitialiser");

const reinitialiserFormulaire = () => {
  document.getElementById("formulaireContact").reset();
  formulaireContact.classList.remove("was-validated");
};

const afficherConfirmation = () => {
  
  const confirmation = document.getElementById('confirmation_contact');
  confirmation.classList.toggle('d-none');

  setTimeout(function () {
    confirmation.classList.toggle('d-none');
  }, 5000);
};

(function () {
  "use strict";
  const forms = document.querySelectorAll(".needs-validation");
  Array.from(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
          event.preventDefault();
        if (!form.checkValidity()) {
          event.stopPropagation();
          form.classList.add("was-validated");
        } else {
          form.classList.add("was-validated");
          submitForm();
          
        }
      },
      false
    );
  });
})();


boutonReinitialier.addEventListener("click", reinitialiserFormulaire);