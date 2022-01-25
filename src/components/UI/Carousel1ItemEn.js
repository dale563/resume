let compteur = 0;
const Carousel1ItemEn = (props) => {
    compteur++;
  return (
    <>
      {compteur===1 ? <div className="carousel-item active">{props.children}</div> : <div className="carousel-item">{props.children}</div>}
    </>
  );
};

export default Carousel1ItemEn;
