import React from "react";
import Modale from "../UI/Modale";
import FormulaireContact from "./FormulaireContact";

const ModaleContact = () => {
  return (
    <Modale htmlIdModale="modaleMeContacter" header="Contact" grandeur="lg">
        <FormulaireContact />
    </Modale>
  );
};

export default ModaleContact;
