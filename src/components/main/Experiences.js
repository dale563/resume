import Section from "../UI/Section";
import Experience from "./Experience";
import resume from "../../donnees";

const Experiences = (props) => {
  const classes ="experience";
  const classesEn = "traduisible en cacher " + classes;
  const classesFr = "traduisible fr afficher " + classes;

  return (
    <>
    <Section className={classesFr} heading="Expérience de travail">
       {resume.fr.experiences.map((experience) => (
          <Experience
            key={experience.id}
            poste={experience.poste}
            entreprise={experience.entreprise}
            texte={experience.texte}
            lien={experience.lien}
            annees={experience.annees}
            doc1src={experience.doc1src}
            doc2src={experience.doc2src}
            doc3src={experience.doc3src}
            />
        ))}
    </Section>
    <Section className={classesEn} heading="">
       {resume.en.experiences.map((experience) => (
          <Experience
            key={experience.id}
            poste={experience.poste}
            entreprise={experience.entreprise}
            texte={experience.texte}
            lien={experience.lien}
            annees={experience.annees}
            doc1src={experience.doc1src}
            doc2src={experience.doc2src}
            doc3src={experience.doc3src}
            />
        ))}
    </Section>
    </>
  );
};

export default Experiences;
