import React from 'react';
const Competence = () => {
  return (
    <div className="item">
      <h3 className="level-title">
        Python &amp; Django
        <span
          className="level-label"
          data-bs-toggle="tooltip"
          data-bs-placement="left"
          title="You can use the tooltip to explain more about your skill level..."
        >
          <i className="fas fa-info-circle"></i>Expert
        </span>
      </h3>

      <div className="level-bar progress">
        <div
          className="progress-bar level-bar-inner"
          role="progressbar"
          style={{width: "96%"}}
          aria-valuenow="96"
          aria-valuemin="0"
          aria-valuemax="96"
        ></div>
      </div>
    </div>
  );
};

export default Competence;
