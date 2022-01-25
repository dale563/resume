import Section from "../UI/Section";
import resume from "../../donnees";
import Paragraphe from "../UI/Paragraphe";
import Lien from "../UI/Lien";

const APropos = () => {
  const classes = "about";
  const classesEn = "traduisible en cacher " + classes;
  const classesFr = "traduisible fr afficher " + classes;
  
  return (
    <>
      <Section className={classesFr} heading="À propos de moi">
        <>
          {resume.fr.apropos.paragraphes.map((texte) => (
            <Paragraphe
              key={texte.id}
              texte={texte.texte}
              sourceCitation={texte.sourceCitation}
            />
          ))}
          <ul className="liste_transparente">
            {resume.fr.apropos.liens &&
              resume.fr.apropos.liens.map((lien) => (
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
            {resume.fr.apropos.images.map((image) => (
              <div key={image.id} className="col col-md-5 mb-0 pb-0">
                <figure className="figure pb-0 mb-0">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="figure-img img-fluid rounded"
                  />
                  <figcaption className="figure-caption">
                    {image.figCaption}
                  </figcaption>
                </figure>
              </div>
            ))}
          </div>
        </>
      </Section>
      <Section className={classesEn} heading="About me">
        <>
          {resume.en.apropos.paragraphes.map((texte) => (
            <Paragraphe
              key={texte.id}
              texte={texte.texte}
              sourceCitation={texte.sourceCitation}
            />
          ))}
          <ul className="liste_transparente">
            {resume.en.apropos.liens &&
              resume.en.apropos.liens.map((lien) => (
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
            {resume.en.apropos.images.map((image) => (
              <div key={image.id} className="col col-md-5 mb-0 pb-0">
                <figure className="figure pb-0 mb-0">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="figure-img img-fluid rounded"
                  />
                  <figcaption className="figure-caption">
                    {image.figCaption}
                  </figcaption>
                </figure>
              </div>
            ))}
          </div>
        </>
      </Section>
    </>
  );
};

export default APropos;
