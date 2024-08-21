import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import LogoSearchBar from '../../Components/LogoSearchBar/LogoSearchBar';
import FarmerOption from '../../Components/Farmer/FarmerOption';
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
