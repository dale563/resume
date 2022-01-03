const Paragraphe = (props) => {
  return (
    <p className={props.className}>
      {props.texte}
      {props.lien && <a href={props.lien}>{props.nomLien}</a>} 
      {props.sourceCitation && <sup><a href={props.sourceCitation} target="_blank">{" "}source</a></sup>} 
    </p>
  );
};

export default Paragraphe;
