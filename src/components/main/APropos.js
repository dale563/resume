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
            sourceCitation={texte.sourceCitation}
          />
        ))}
        <div className="row mt-4 mb-0 pb-0">
          {resume.apropos.images.map((image) => (
            <div key={image.id} className="col col-md-5 mb-0 pb-0">
              <figure className="figure pb-0 mb-0">
                <img src={image.src} alt={image.alt} className="figure-img img-fluid rounded" alt="A generic square placeholder image with rounded corners in a figure." />
                <figcaption className="figure-caption">{image.figCaption}</figcaption>
              </figure>
            </div>
          ))}
        </div>
      </>
    </Section>
  );
};

export default APropos;
