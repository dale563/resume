// import { Carousel } from 'bootstrap';
import Carousel1Bouton from "./Carousel1Bouton";
import Carousel1Item from "./Carousel1Item";

const Carousel1 = (props) => {
  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <ol className="carousel-indicators">
        {props.items.map((item) => (
          <Carousel1Bouton key={item.id} dataBsTarget={props.dataBsTarget} />
        ))}
      </ol>
      <div className="carousel-inner">
        {props.items.map((item) => (
          <Carousel1Item
            key={item.id}
            dataBsTarget={props.dataBsTarget}
          ></Carousel1Item>
        ))}
      </div>
    </div>
  );
};

export default Carousel1;
