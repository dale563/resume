// import { Carousel } from 'bootstrap';
import Carousel1Bouton from "./Carousel1Bouton";

const Carousel1 = (props) => {
  return (
    <div
      id={props.carouselId}
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        {props.items.map((item) => (
          <Carousel1Bouton key={item.id} dataBsTarget={props.dataBsTarget} />
        ))}
      </div>
      <div className="carousel-inner">
        {props.children}
      </div>
    </div>
  );
};

export default Carousel1;
