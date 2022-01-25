import frImg from '../../assets/images/fr.png';
import enImg from '../../assets/images/en.png';

const NavLangues = () => {
    return ( 
       <nav id="navigation-langues">
           <button className="btn-langues btn disabled" id="fr"><img src={frImg} title="Français" aria-label="Accéder au site en Français" alt="Drapeau de la France" /></button>
           <button className="btn-langues btn" id="en"><img src={enImg} title="English" aria-label="Acces to english version of the page" alt="Great Britain flag" /></button>
       </nav> 
     );
}
 
export default NavLangues;