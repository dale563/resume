import React from 'react';

const Competence = (props) => {
  const valeurNiveau = props.pourcentage
  const pourcentageNiveau = valeurNiveau + "%";

  return (
    <div className="item">
      <h3 className="level-title">
        {props.nom}
        <span
          className="level-label"
          data-bs-toggle="tooltip"
          data-bs-placement="left"
          title={props.tooltip}
        >
          <i className="fas fa-info-circle"></i>{props.niveau}
        </span>
      </h3>

      <div className="level-bar progress">
        <div
          className="progress-bar level-bar-inner"
          role="progressbar"
          style={{width: pourcentageNiveau}}
          aria-valuenow={valeurNiveau}
          aria-valuemin="0"
          aria-valuemax={valeurNiveau}
        ></div>
      </div>
    </div>
  );
};

export default Competence;
