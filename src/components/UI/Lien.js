const Lien = (props) => {
  return (
    <a href={props.href} target="_blank">
      <span
        className={props.iconeClasses}
        data-icon={props.iconeDataIcon}
      ></span>
      {" "}{props.text}
    </a>
  );
};
export default Lien;
