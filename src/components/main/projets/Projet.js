import React from 'react';
import ProjetImage from './ProjetImage';
import image1 from './project-1.png';
const Projet = () => {
  
  return (
    <div className="item row">
      <a
        className="col-md-4 col-12"
        href="https://themes.3rdwavemedia.com/bootstrap-templates/resume/devcard-bootstrap-4-vcard-portfolio-template-for-software-developers/"
        target="_blank"
      >
      <ProjetImage imgSrc={image1} imgAlt="Premiere Image" />
      </a>
      <div className="desc col-md-8 col-12">
        <h3 className="title">
          <a
            href="https://themes.3rdwavemedia.com/bootstrap-templates/resume/devcard-bootstrap-4-vcard-portfolio-template-for-software-developers/"
            target="_blank"
          >
            DevCard - Boootstrap Portfolio Template for Software Developers
          </a>
        </h3>
        <p className="mb-2">
          You can put one of your secondary projects here. Suspendisse in tellus
          dolor. Vivamus a tortor eu turpis pharetra consequat quis non metus.
          Aliquam aliquam, orci eu suscipit pellentesque, mauris dui tincidunt
          enim, eget iaculis ante dolor non turpis.
        </p>
        <p>
          <a
            className="more-link"
            href="https://themes.3rdwavemedia.com/bootstrap-templates/resume/devcard-bootstrap-4-vcard-portfolio-template-for-software-developers/"
            target="_blank"
          >
            <i className="fas fa-external-link-alt"></i>Find out more
          </a>
        </p>
      </div>
    </div>
  );
};

export default Projet;
