import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import LogoSearchBar from '../../Components/LogoSearchBar/LogoSearchBar';
import FarmerOption from './FarmerOption';
import Footer from '../../Components/Footer/Footer';
const Farmers = () => {
    return (
        <div>
            <Navbar />
            <LogoSearchBar />
            <FarmerOption />
        </div>
    );
};

export default Farmers;
