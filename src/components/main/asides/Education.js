import React from 'react';
const Education = (props) => {
  return (
    <div className="item">
      <h3 className="title">
        <i className="fas fa-graduation-cap"></i>
        {props.nomFormation}
      </h3>
      <h4 className="university">
      {props.lieuFormation}<span className="year">{props.anneesFormation}</span>
      </h4>
      {props.dpcumentsUri != "" && (
          <div>
          
          </div>
        )}
    </div>
  );
};

export default Education;
