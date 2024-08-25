import React from 'react';
import './AuctionDetails.css';
import inspection from '../Farmer/images/inspection.png';
import tomato from '../Farmer/images/tomato.jpg';

const AuctionDetails = () => {
    return (
        <div className='inspection-page'>
            <div className="product-details">
                <div className="product-image">
                    <img src={tomato} alt="Tomato" />
                </div>
                <div className="product-info">
                    <h1>Tomato (টমেটো)</h1>
                    <div className="product-meta">
                        <p><strong>Categories:</strong> Vegetable</p>
                        <p><strong>Quantity:</strong> 1000 pc</p>
                        <p><strong>Current Price:</strong> 400tk</p> {/* Current Price section */}

                        {/* Place Your Bid section */}
                        <div className="place-bid">
                            <label htmlFor="bid-amount" className="bid-label">Place Your Bid:</label>
                            <input 
                                type="number" 
                                id="bid-amount" 
                                name="bid-amount" 
                                className="bid-input" 
                                placeholder="Enter your bid amount" 
                            />
                            <button type="submit" className="submit-bid-button">Submit Bid</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-logo">
                <img src={inspection} alt="Inspection Team Logo" className="inspection-logo" />
                <p>Certified by Inspection Team</p>
                <p>Expiry Date: Nov 24</p>
                <p>Rating: 4.5/5</p>
            </div>
        </div>
    );
};

export default AuctionDetails;
