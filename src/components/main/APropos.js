import Section from "../UI/Section";
import resume from "../../donnees";
import Paragraphe from "../UI/Paragraphe";

const APropos = () => {
  return (
    <Section className="about" heading="À propos de moi">
      <>
        {resume.apropos.paragraphes.map((texte) => (
          <Paragraphe
            key={texte.id}
            texte={texte.texte}
            lien={texte.lien}
            nomLien={texte.nomLien}
          />
        ))}
        {resume.apropos.images.map((image) => (
          <a key={image.id} href={image.src} target="_blank"><img key={image.id} src={image.src} className="rounded img-thumbnail" alt={image.alt}></img></a>
        ))}
      </>
    </Section>
  );
};

export default APropos;
