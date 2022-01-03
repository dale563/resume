import Section from "../UI/Section";
import resume from "../../donnees";
import Paragraphe from "../UI/Paragraphe";
import Lien from "../UI/Lien";

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
        <ul className="liste_transparente">
        {resume.apropos.liens &&
                resume.apropos.liens.map((lien) => (
                  <li key={lien.id}>
                    <Lien
                      key={lien.id}
                      text={lien.text}
                      href={lien.href}
                      iconeClasses={lien.icone.classes}
                      iconeDataIcon={lien.icone.dataIcon}
                    />
                  </li>
                ))}
                </ul>
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
