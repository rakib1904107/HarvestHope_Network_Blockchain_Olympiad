import React from 'react';
import { Link } from 'react-router-dom';
import inspect from '../Farmer/images/inspect.jpg';
import bid from '../Farmer/images/bid.jpg';
import sale from '../Farmer/images/sale.jpg';
import history from '../Farmer/images/history.png';
import account from '../Farmer/images/account.jpg';
import './FarmerOption.css';

export default function FarmerOption() {
    return (
        <div className='bg-brand'>
            <div className='container py-5'>
                <h2 className='fs-5'></h2>
                <div className='d-flex flex-wrap flashsale-container'>
                    <div className='col-lg-2 col-md-4 col-sm-6 p-2 card-body'>
                        <img src={inspect} className='img-fluid' alt="flash-sale-product" />
                        <Link to="/inspect">
                            <button className='btn btn-primary w-100 mt-2'>Add Product For Inspection</button>
                        </Link>
                    </div>
                    <div className='col-lg-2 col-md-4 col-sm-6 p-2 card-body'>
                        <img src={bid} className='img-fluid' alt="flash-sale-product" />
                        <Link to="/inspect">
                            <button className='btn btn-primary w-100 mt-2'>Add Product For Auction</button>
                        </Link>
                    </div>
                    <div className='col-lg-2 col-md-4 col-sm-6 p-2 card-body'>
                        <img src={sale} className='img-fluid' alt="flash-sale-product" />
                        <Link to="/inspect">
                            <button className='btn btn-primary w-100 mt-2'>Add Product For Sale</button>
                        </Link>
                    </div>
                    <div className='col-lg-2 col-md-4 col-sm-6 p-2 card-body'>
                        <img src={history} className='img-fluid' alt="flash-sale-product" />
                        <Link to="/inspect">
                            <button className='btn btn-primary w-100 mt-2'>History</button>
                        </Link>
                    </div>
                    <div className='col-lg-2 col-md-4 col-sm-6 p-2 card-body'>
                        <img src={account} className='img-fluid' alt="flash-sale-product" />
                        <Link to="/accountdetails">
                            <button className='btn btn-primary w-100 mt-2'>Account Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
