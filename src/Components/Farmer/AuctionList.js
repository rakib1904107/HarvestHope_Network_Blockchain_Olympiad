import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './AuctionList.css';
import d1 from '../Farmer/images/tomato.jpg';
import d2 from '../Farmer/images/spinach.jpg';
import d3 from '../Farmer/images/pineapple.jpg'
import d4 from '../Farmer/images/cucum.jpg';
import d5 from '../Farmer/images/carrot.jpg';
import d6 from '../Farmer/images/pepper.jpg';

const AuctionList = () => {
    const items = [
        { name: 'Tomato', price: '400tk', imgSrc: d1, id: 1 },
        { name: 'Spinach', price: '300tk', imgSrc: d2, id: 2 },
        { name: 'Pineapple', price: '500tk', imgSrc: d3, id: 3 },
        { name: 'Cucumber', price: '200tk', imgSrc: d4, id: 4 },
        { name: 'Carrot', price: '350tk', imgSrc: d5, id: 5 },
        { name: 'Pepper', price: '450tk', imgSrc: d6, id: 6 },
    ];

    return (
        <div className='bg-brand'>
            <div className='container py-5'>
                <h2 className='fs-5'>Ongoing Auction</h2>
                <div className='auction-cards'>
                    {items.map((item) => (
                        <div key={item.id} className='auction-card'>
                            <img src={item.imgSrc} className='img-fluid' alt="auction-item" />
                            <p className='card-title'>{item.name}</p>
                            <h3 className='card-price'>Current Price: {item.price}</h3>
                            <Link to={`/auctiondetails`} className='bid-now-link'>
                                <button className='bid-now-button'>Bid Now</button>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AuctionList;
