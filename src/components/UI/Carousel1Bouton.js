

    let compteur = 0;
    let className = "active";
const Carousel1Bouton = (props) => {
   compteur++;
   let slideTo = compteur - 1;
   let ariaLabel = `Slide ${compteur}`
   if (!slideTo===0) {className="";}
    return (
        <li
          data-bs-target={props.dataBsTarget}
          data-bs-slide-to={slideTo}
          className="active"          
          aria-label={ariaLabel}
        ></li>
    )
}

export default Carousel1Bouton;