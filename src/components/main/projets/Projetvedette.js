import React from 'react';
import ProjetvedetteImage from './ProjetvedetteImage';
import imgProjetVedette from './project-featured.jpg';
const ProjetVedette = () => {
  return (
    <div className="item featured text-center">
      <div className="featured-image has-ribbon">
        <a
          href="https://themes.3rdwavemedia.com/bootstrap-templates/startup/launch-bootstrap-4-template-for-saas-businesses/"
          target="_blank"
        >
          <ProjetvedetteImage imgSrc={imgProjetVedette} imgAlt="Image vedette"/>
        </a>
        <div className="ribbon">
          <div className="text">Nouveau</div>
        </div>
      </div>

      <h3 className="title mb-3">
        <a
          href="https://themes.3rdwavemedia.com/bootstrap-templates/startup/launch-bootstrap-4-template-for-saas-businesses/"
          target="_blank"
        >
          Le Rempart - Centre d'hébergement et d'accueil
        </a>
      </h3>

      <div className="desc text-start">
        <p>
          You can promote your main project here. Suspendisse in tellus dolor.
          Vivamus a tortor eu turpis pharetra consequat quis non metus. Aliquam
          aliquam, orci eu suscipit pellentesque, mauris dui tincidunt enim,
          eget iaculis ante dolor non turpis. Ut enim ad minima veniam, quis
          nostrum exercitationem ullam corporis suscipit laboriosam.
        </p>
      </div>

      <a
        className="btn btn-cta-secondary"
        href="https://themes.3rdwavemedia.com/bootstrap-templates/startup/launch-bootstrap-4-template-for-saas-businesses/"
        target="_blank"
      >
        <i className="fas fa-thumbs-up"></i> Back my project
      </a>
    </div>
  );
};

export default ProjetVedette;
