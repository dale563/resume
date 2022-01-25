import React from "react";
import NavLangues from "./NavLangues";

const DarkModeSwitch = () => {
  return (
    <div className="dark-mode-switch d-flex pt-3">
      <div className="form-check form-switch mx-auto mx-md-0">
        <input type="checkbox" className="form-check-input me-2" id="darkSwitch" />
        <label className="traduisible fr afficher custom-control-label" htmlFor="darkSwitch">
          Mode sombre
        </label>
        <label className="traduisible en cacher custom-control-label" htmlFor="darkSwitch">
          Dark mode
        </label>
      </div>
    </div>
  );
};

export default DarkModeSwitch;
