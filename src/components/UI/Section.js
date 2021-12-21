import React from "react";
const Section = (props) => {
  const classes = "section " + props.className;
  let classesHeader = "heading";
  if (props.classNameHeader) {
    classesHeader = "heading " + props.classNameHeader;
  }

  return (
    <section className={classes}>
      <div className="section-inner shadow-sm rounded">
        <h2 className={classesHeader}>{props.heading}</h2>
        <div className="content">{props.children}</div>
      </div>
    </section>
  );
};

export default Section;
