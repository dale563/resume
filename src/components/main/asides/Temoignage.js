import React from 'react';
const Temoignage = (props) => {
  return (
    <div className="item">
      <blockquote className="quote">
        <p>
          <i className="fas fa-quote-left"></i>{props.texte}
        </p>
      </blockquote>
      <p className="source">
        <span className="name">{props.auteur}</span>
        <br />
        <span className="title">{props.titreAuteur}</span>
      </p>
    </div>
  );
};

export default Temoignage;
