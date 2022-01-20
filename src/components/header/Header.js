import React from 'react';
import DarkModeSwitch from "./DarkModeSwitch";
import InfoProfile from "./InfoProfile";
import ModaleContact from "./ModaleContact";
import BoutonContact from "../UI/BoutonContact";
import ModaleConfirmation from './ModaleConfirmation';

const Header = () => {
    return (
        <header className="header">
                <div className="container">     
                    <div className="row align-items-center">
                        <div className="col d-lg-flex"> 
                            <InfoProfile/>
                        </div>
                        <div className="col-12 col-md-auto">
                            <BoutonContact/>
                            <ModaleContact/>
                            <ModaleConfirmation/>
                            <DarkModeSwitch/>
                            
                        </div>
                    </div>      
                </div>
            </header>
    )
}

export default Header;
    