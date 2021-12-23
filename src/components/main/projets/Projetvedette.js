import React from 'react';
import ProjetvedetteImage from './ProjetvedetteImage';
import imgProjetVedette from './project-featured.jpg';
const ProjetVedette = () => {
  return (
    <>
    <div className="item featured text-center">
      <div className="featured-image has-ribbon">
        <a
          href={imgProjetVedette}
          target="_blank"
        >
          <ProjetvedetteImage imgSrc={imgProjetVedette} imgAlt="Image vedette"/>
        </a>
        <div className="ribbon">
          <div className="text">Vedette</div>
        </div>
      </div>
      <h3 className="title mb-3"> 
          Projet Le Rempart (chef de projet)
      </h3>
      <div className="desc text-start">
        <p>
        Site web pour un organisme de Québec qui aide les femmes en difficulté et à risque d’itinérance.
        </p>
      </div>
    </div>
    <div className="row">
      <div className='col-md-5'>
        <h4>Technologies utilisées</h4>
      {/* Icones des techonolies */}
      <h4>Documents et liens:</h4>
      </div>
      <div className='col-md-7'>
      <h4>Soutenir Le Rempart</h4>
      <p>
      Avec l’aide de la plateforme de dons Symplik mise, 
      vous pouvez soutenir les femmes en difficulté et à risque d’itinérance :  
      </p>
      <a href="javascript:;" className="btn btn-primary btn-don-rempart">FAIRE UN DON À L'ORGANISME</a>
      </div>
    </div>
    </>
  );
};

export default ProjetVedette;
