let compteur = 0;
const Carousel1Item = (props) => {
    compteur++;
  return (
    <>
      {compteur===1 && <div className="carousel-item active">{props.children}</div>}
      {!compteur===1 && <div className="carousel-item">{props.children}</div>}
    </>
  );
};

export default Carousel1Item;
