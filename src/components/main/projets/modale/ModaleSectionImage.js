const ModaleSectionImage = (props) => {
  const classes = props.className + " col-12 col-xl-6";
    return (
        <div className={classes} >
          <img
            className="img-fluid rounded shadow-sm text-center"
            src={props.imgSrc}
            alt={props.imgAlt}
          />
        </div>
    )
}

export default ModaleSectionImage;