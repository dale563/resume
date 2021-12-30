const Paragraphe = (props) => {
  return (
    <p className={props.className}>
      {props.texte}
      {props.lien && <a href={props.lien}>{props.nomLien}</a>}
    </p>
  );
};

export default Paragraphe;
