const ModaleSectionImage = (props) => {
    return (
        <div className="col-12 col-md-6">
          <img
            className="img-fluid rounded shadow-sm"
            src={props.imgSrc}
            alt={props.imgAlt}
          />
        </div>
    )
}

export default ModaleSectionImage;