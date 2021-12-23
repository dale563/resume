import React from 'react';
import ProjetImage from './ProjetImage';
const Projet = (props) => {
  
  return (
    <div className="item row">
      <a
        className="col-md-4 col-12"
        href={props.imageSrc}
        target="_blank"
      >
      <ProjetImage imgSrc={props.imgSrc} imgAlt={props.imgAlt} />
      </a>
      <div className="desc col-md-8 col-12">
        <h3 className="title">
          <a
            href="javascript:;"
            target="_blank"
          >
            {props.titre}
          </a>
        </h3>
        <p className="mb-2">
        {props.sommaire}
        </p>
        <p>
          <a
            className="more-link"
            href="javascript:;"
            target="_blank"
          >
            <i className="fas fa-external-link-alt"></i>En savoir plus
          </a>
        </p>
      </div>
    </div>
  );
};

export default Projet;
