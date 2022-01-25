import React from "react";
import Temoignage from "./Temoignage";
import Section from "../../UI/Section";
import Carousel1 from "../../UI/Carousel1";
import resume from "../../../donnees";
import Carousel1Item from "../../UI/Carousel1Item";
import Carousel1ItemEn from "../../UI/Carousel1ItemEn";

const temoignages = resume.fr.temoignages; 
const dataBsTarget = "#carouselTemoignages";
const temoignagesEn = resume.en.temoignages; 
const dataBsTargetEn = "#carouselTemoignagesEn";

const Temoignages = (props) => {
  return (
    <>
    <Section className= "traduisible fr afficher testimonials aside" heading="Témoignages">
      <Carousel1
        carouselId="carouselTemoignages"
        dataBsTarget={dataBsTarget}
        items={resume.fr.temoignages}
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
    <Section className= "traduisible en cacher testimonials aside" heading="Testimonials">
      <Carousel1
        carouselId="carouselTemoignagesEn"
        dataBsTarget={dataBsTargetEn}
        items={resume.en.temoignages}
      >
        {temoignagesEn.map((temoignage) => (
          <Carousel1ItemEn key={temoignage.id} dataBsTarget={dataBsTargetEn}>
            <Temoignage
              key={temoignage.id}
              texte={temoignage.texte}
              auteur={temoignage.auteur}
              titreAuteur={temoignage.titreAuteur}
              source={temoignage.source}
            />
          </Carousel1ItemEn>
        ))}
      </Carousel1>
    </Section></>
    
  );
};

export default Temoignages;
