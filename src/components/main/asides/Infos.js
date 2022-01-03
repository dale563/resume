import Section from "../../UI/Section";

const Infos = () => {
  return (
    <Section
      className="info aside"
      classNameHeader="sr-only"
      heading="Basic Information"
    >
      <ul className="list-unstyled">
      <li>
          <i className="fas fa-link"></i>
          <span className="sr-only">Website:</span>
          <a href="https://dalelimoges-iw.web.app/">
            https://dalelimoges-iw.web.app/
          </a>
        </li>
        <li>
          <i className="fas fa-envelope"></i>
          <span className="sr-only">Email:</span>
          <a href="mailto:limogesdale@outlook.com">limogesdale@outlook.com</a>
        </li>
        <li>
          <a href="https://goo.gl/maps/7kUEkoGinRiqiuAk7" target="_blank"><i className="fas fa-map-marker-alt"></i>
          <span className="sr-only">Location:</span>Terrebonne, QC</a>
        </li>
        <li>
          <i className="fas fa-phone"></i>
          <span className="sr-only">Téléphone:</span>
          <a href="tel:438-933-7785">438-933-7785</a>
        </li>
        
        
        
        
      </ul>
    </Section>
  );
};

export default Infos;
