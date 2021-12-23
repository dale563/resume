const Paragraphe = (props) => {
  return (
    <p>
      {props.texte}
      {props.lien && <a href={props.lien}>{props.nomLien}</a>}
    </p>
  );
};

export default Paragraphe;
