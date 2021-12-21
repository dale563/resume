import React from 'react';
const Temoignage = (props) => {
  return (
    <div className="item">
      <blockquote className="quote">
        <p>
          <i className="fas fa-quote-left"></i>James is an excellent software
          engineer and he is passionate about what he does. You can totally
          count on him to deliver your projects!
        </p>
      </blockquote>
      <p className="source">
        <span className="name">Tim Adams</span>
        <br />
        <span className="title">Curabitur commodo</span>
      </p>
    </div>
  );
};

export default Temoignage;
