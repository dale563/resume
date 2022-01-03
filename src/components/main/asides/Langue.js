import React from "react";
import Etoile from "./Etoile";

const Langue = (props) => {

  return (
    <li className="item">
      <span className="title">
        <strong>{props.nom} : </strong>
      </span>

      <span className="level">
        {props.commentaire}
        <br className="visible-xs" />
        {props.niveau < 2 && (
          <div>
            <Etoile />
          </div>
        )}
        {props.niveau === 2 && (
          <div>
            <Etoile />
            <Etoile />
          </div>
        )}
        {props.niveau === 3 && (
          <div>
            <Etoile />
            <Etoile />
            <Etoile />
          </div>
        )}
        {props.niveau === 4 && (
          <div>
            <Etoile />
            <Etoile />
            <Etoile />
            <Etoile />
          </div>
        )}
        {props.niveau === 5 && (
          <div>
            <Etoile />
            <Etoile />
            <Etoile />
            <Etoile />
            <Etoile />
          </div>
        )}
      </span>
    </li>
  );
};

export default Langue;
