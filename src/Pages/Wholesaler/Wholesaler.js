import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import LogoSearchBar from '../../Components/LogoSearchBar/LogoSearchBar';
import Whole_sell from '../../Components/Farmer/Whole_sell';

const Wholesaler = () => {
    return (
        <div>
           <Navbar/>
           <LogoSearchBar/> 
           <Whole_sell/>
        </div>
    );
};

export default Wholesaler;