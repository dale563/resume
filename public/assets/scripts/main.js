"use strict";GitHubActivity.feed({username:"dale563",selector:"#ghfeed",limit:20});var firebaseConfig={apiKey:"AIzaSyChERzhVdnYOcP32coEpXk3snu5ROw--wE",authDomain:"dalelimoges-iw.firebaseapp.com",databaseURL:"https://dalelimoges-iw-default-rtdb.firebaseio.com",projectId:"dalelimoges-iw",storageBucket:"dalelimoges-iw.appspot.com",messagingSenderId:"885980907698",appId:"1:885980907698:web:bde463e009944b649da1ab",measurementId:"G-HVCXJ5YW0B"},app=firebase.initializeApp(firebaseConfig),contactInfo=firebase.database().ref("dliw-formulaire-contact"),saveContactInfo=function(e,t,a,i,n){contactInfo.push().set({nom:e,courriel:t,telephone:a,sujet:i,message:n})},submitForm=function(){var e=document.getElementById("contact-nom").value,t=document.getElementById("contact-courriel").value,a=document.getElementById("contact-numero-telephone").value,i=document.getElementById("contact-sujet").value,n=document.getElementById("contact-message").value;console.log(e,t,a,i,n),saveContactInfo(e,t,a,i,n),reinitialiserFormulaire(),afficherConfirmation()},formulaireContact=document.getElementById("formulaireContact"),boutonReinitialier=document.getElementById("btn_reinitialiser"),reinitialiserFormulaire=function(){document.getElementById("formulaireContact").reset(),formulaireContact.classList.remove("was-validated")},afficherConfirmation=function(){var e=document.getElementById("confirmation_contact");e.classList.toggle("d-none"),setTimeout((function(){e.classList.toggle("d-none")}),5e3)};!function(){var e=document.querySelectorAll(".needs-validation");Array.from(e).forEach((function(e){e.addEventListener("submit",(function(t){t.preventDefault(),e.checkValidity()?(e.classList.add("was-validated"),submitForm()):(t.stopPropagation(),e.classList.add("was-validated"))}),!1)}))}(),boutonReinitialier.addEventListener("click",reinitialiserFormulaire);