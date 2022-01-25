import Section from "../../UI/Section";
function TechnologiesUtilisees(props) {
  const classes = "";
  const classesEn = "en cacher " + classes;
  const classesFr = "fr afficher " + classes;
  return (
    <>
    <Section className={classesFr} heading="Technologies utilisées">
      <p className="text-center">
        <span className="tech_petit"></span>{" "}
        <span className="tech_petit">Firebase</span>{" "}
        <span className="tech_petit">Google Cloud Platform</span>{" "}
        <span className="tech_moyen">Webpack</span>{" "}
        <span className="tech_moyen">React</span>{" "}
        <span className="tech_moyen">WordPress</span>{" "}
        <span className="tech_moyen">Bootstrap</span>{" "}
        <span className="tech_grand">HTML</span>{" "}
        <span className="tech_grand">Sass</span> <span className="tech_grand">CSS</span>{" "}
        <span className="tech_moyen">Git</span>{" "}
        <span className="tech_moyen">GitHub</span>{" "}
        <span className="tech_moyen">JavaScript</span>{" "}
        <span className="tech_moyen">jQuery</span>{" "}
        <span className="tech_moyen">Velocityjs</span>{" "}
        <span className="tech_petit">PHP</span>{" "}
        <span className="tech_moyen">mySQL</span>{" "}
        <span className="tech_petit">Gulp</span>{" "}
        <span className="tech_grand">Figma</span>{" "}
        <span className="tech_petit">Zoom</span>{" "}
        <span className="tech_grand">Outils de gestion Microsoft</span>{" "}
        <span className="tech_moyen">Suite Adobe</span>{" "}
        <span className="tech_moyen">cPanel</span>{" "}
        <span className="tech_moyen">Google Analytics</span>{" "}
        <span className="tech_petit">Facebook Pixel</span>{" "}
        <span className="tech_moyen">MailChimp</span>{" "}
        <span className="tech_moyen">Yoast</span>{" "}
      </p>
    </Section>
    <Section className={classesEn} heading="Techonlogies used">
      <p className="text-center">
        <span className="tech_petit"></span>{" "}
        <span className="tech_petit">Firebase</span>{" "}
        <span className="tech_petit">Google Cloud Platform</span>{" "}
        <span className="tech_moyen">Webpack</span>{" "}
        <span className="tech_moyen">React</span>{" "}
        <span className="tech_moyen">WordPress</span>{" "}
        <span className="tech_moyen">Bootstrap</span>{" "}
        <span className="tech_grand">HTML</span>{" "}
        <span className="tech_grand">Sass</span> <span className="tech_grand">CSS</span>{" "}
        <span className="tech_moyen">Git</span>{" "}
        <span className="tech_moyen">GitHub</span>{" "}
        <span className="tech_moyen">JavaScript</span>{" "}
        <span className="tech_moyen">jQuery</span>{" "}
        <span className="tech_moyen">Velocityjs</span>{" "}
        <span className="tech_petit">PHP</span>{" "}
        <span className="tech_moyen">mySQL</span>{" "}
        <span className="tech_petit">Gulp</span>{" "}
        <span className="tech_grand">Figma</span>{" "}
        <span className="tech_petit">Zoom</span>{" "}
        <span className="tech_grand">Outils de gestion Microsoft</span>{" "}
        <span className="tech_moyen">Suite Adobe</span>{" "}
        <span className="tech_moyen">cPanel</span>{" "}
        <span className="tech_moyen">Google Analytics</span>{" "}
        <span className="tech_petit">Facebook Pixel</span>{" "}
        <span className="tech_moyen">MailChimp</span>{" "}
        <span className="tech_moyen">Yoast</span>{" "}
      </p>
    </Section>
    </>
  );
}

export default TechnologiesUtilisees;
