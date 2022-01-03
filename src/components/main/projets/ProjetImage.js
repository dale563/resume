const ProjetImage = (props) => {
    return (
        <img
          className="img-fluid project-image rounded shadow-sm"
          src={props.imgSrc}
          alt={props.imgAlt}
        />
    )
}

export default ProjetImage;