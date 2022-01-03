import React from 'react';
const Accomplissement = (props) => {
  return (
    <div className="item">
      <h3 className="title">
        <a
          href={props.lien}
          target="_blank"
        >
          {props.titre}
        </a>
      </h3>
      <p className="summary">
      {props.texte}
      </p>
    </div>
  );
};

export default Accomplissement;