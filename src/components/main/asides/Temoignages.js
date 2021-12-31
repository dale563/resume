import React from "react";
import Temoignage from "./Temoignage";
import Section from "../../UI/Section";
import Carousel1 from "../../UI/Carousel1";
import resume from "../../../donnees";
import Carousel1Item from "../../UI/Carousel1Item";

const temoignages = resume.temoignages;
const dataBsTarget = "#carouselTemoignages";

const Temoignages = (props) => {
  return (
    <Section className="testimonials aside" heading="Témoignages">
      <Carousel1
        carouselId="carouselTemoignages"
        dataBsTarget={dataBsTarget}
        items={resume.temoignages}
      >
        {temoignages.map((temoignage) => (
          <Carousel1Item key={temoignage.id} dataBsTarget={dataBsTarget}>
            <Temoignage
              key={temoignage.id}
              texte={temoignage.texte}
              auteur={temoignage.auteur}
              titreAuteur={temoignage.titreAuteur}
              source={temoignage.source}
            />
          </Carousel1Item>
        ))}
      </Carousel1>
    </Section>
    
  );
};

export default Temoignages;
