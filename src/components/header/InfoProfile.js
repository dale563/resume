import React from 'react';
const InfoProfile = () => {
    return (
        <div className="profile-content">
            <h1 className="name">Dale Limoges</h1>
            <h2 className="desc fr afficher">Programmation et intégration web</h2>   
            <h2 className="desc en cacher">Web development and integration</h2>   
            <ul className="social list-inline">
                <li className="list-inline-item"><a target="_blank" href="https://www.linkedin.com/in/dale-limoges-86435130/"><i className="fab fa-linkedin-in"></i></a></li>
                <li className="list-inline-item"><a target="_blank" href="https://github.com/dale563"><i className="fab fa-github-alt"></i></a></li>    
                <li className="list-inline-item"><a target="_blank" href="https://stackoverflow.com/users/17503854/"><i className="fab fa-stack-overflow"></i></a></li>   
            </ul> 
        </div>
    )
}

export default InfoProfile;