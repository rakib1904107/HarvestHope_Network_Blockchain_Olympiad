import React from 'react';
import './LogoSearchBar.css';
import logo from '../../images/logo.png';

const LogoSearchBar = () => {
    return (
        <div className = 'container-fluid search-container pt-2 d-flex justify-content-center align-items-center'>
            <a href = "/"><img className = 'img-fluid' width = '150' src = {logo} alt = "logo of BARAJ"/></a>
            <input type = "text" className='search-bar' placeholder='Search in BARAJ' />
            <button className='p-3'>Search</button>
        </div>
    );
};

export default LogoSearchBar;