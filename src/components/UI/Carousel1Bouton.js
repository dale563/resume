
    let compteur = 0;
    let className = "active";
    const Carousel1Bouton = (props) => {
   compteur++;
   let slideTo = compteur - 1;
   let ariaLabel = `Slide ${compteur}`
   if (!slideTo===0) {className="";}
    return (
        <>
        {slideTo === 0 ?
            <button
            type="button"
            data-bs-target={props.dataBsTarget}
            data-bs-slide-to={slideTo}
            className="active"
            aria-current="true"       
            aria-label={ariaLabel}
          ></button>
        :
        <button
            type="button"
            data-bs-target={props.dataBsTarget}
            data-bs-slide-to={slideTo}
            className=""
            aria-current="false"       
            aria-label={ariaLabel}
          ></button>}
          {/* {slideTo === 0 ?
            <li
            data-bs-target={props.dataBsTarget}
            data-bs-slide-to={slideTo}
            className="active"      
            aria-label={ariaLabel}
          ></li>
        :
        <li
            data-bs-target={props.dataBsTarget}
            data-bs-slide-to={slideTo}
            className=""     
            aria-label={ariaLabel}
          ></li>} */}
        </>

    )
}

export default Carousel1Bouton;