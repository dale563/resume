import React from "react";
import Temoignage from "./Temoignage";
import Section from "../../UI/Section";
import Carousel1 from "../../UI/Carousel1";

const Temoignages = () => {
  return (
    <Section className="testimonials aside" heading="Témoignages">
      <Carousel1>
        <Temoignage />
      </Carousel1>
    </Section>
  );
};

export default Temoignages;
