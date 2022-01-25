let compteur = 0;
let className = "active";
const Carousel1Bouton = (props) => {
  
  if (compteur == props.nombreItems) {
    compteur = 1;
    return (
      
      <button
            type="button"
            data-bs-target={props.dataBsTarget}
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
    )
  } else {
    compteur++;
    let slideTo = compteur - 1;
    let ariaLabel = `Slide ${compteur}`;
    
    if (!slideTo === 0) {
      className = "";
    }
    return (
      <>
        {slideTo === 0 ? (
          <button
            type="button"
            data-bs-target={props.dataBsTarget}
            data-bs-slide-to={slideTo}
            className="active"
            aria-current="true"
            aria-label={ariaLabel}
          ></button>
        ) : (
          <button
            type="button"
            data-bs-target={props.dataBsTarget}
            data-bs-slide-to={slideTo}
            aria-label={ariaLabel}
          ></button>
        )}
      </>
    );
  }
};

export default Carousel1Bouton;
