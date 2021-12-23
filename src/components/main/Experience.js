import React from "react";

const Experience = (props) => {
  return (
    <div className="item">
      <h3 className="title">
        {props.poste} -{" "}
        <span className="place">
          <a href={props.lient} target="_blank">
            {props.entreprise}
          </a>
        </span>{" "}
        <span className="year">({props.annees})</span>
      </h3>
      <p>{props.texte}</p>
      {props.doc1src && 
      <p>
         <a href={props.doc1src} target="_blank">Lettre de Microfix</a>
         <a href={props.doc2src} target="_blank">Lettre de CGL Micro</a>
         <a href={props.doc1src} target="_blank">Lettre de la CSPI</a>
      </p>
      }
      
    </div>
  );
};

export default Experience;
