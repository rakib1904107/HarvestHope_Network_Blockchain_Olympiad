import React from 'react';
import './FlashSale.css'
import f1 from '../../images/f1.jpg';
import f2 from '../../images/f2.jpg';
import f3 from '../../images/f3.jpg';
import f4 from '../../images/f4.jpg';
import f5 from '../../images/f5.jpg';
import f6 from '../../images/f6.jpg';

const FlashSale = () => {
    return (
        <div className='bg-brand'>
            
            <div className='container py-5'>
                <h2 className='fs-5'> FLASH SALE </h2>
                <div className='d-flex flex-wrap flashsale-container'>
                    <div className='col-lg-2 col-md-4 col-sm-6 p-2 card-body'>
                        <img src = {f1} className = 'img-fluid' alt = "flash-sale-product" />
                        <p className='card-title'>Buds air wireles..</p>
                        <h3 className='card-price'>400tk</h3>
                        <h4 className='card-text'>400tk<strike className='text-muted'>-33%</strike></h4>
                    </div>
                    <div className='col-lg-2 col-md-4 col-sm-6 p-2 card-body'>
                        <img src = {f2} className = 'img-fluid' alt = "flash-sale-product" />
                        <p className='card-title'>Buds air wireles..</p>
                        <h3 className='card-price'>400tk</h3>
                        <h4 className='card-text'>400tk<strike className='text-muted'>-33%</strike></h4>
                    </div>
                    <div className='col-lg-2 col-md-4 col-sm-6 p-2 card-body'>
                        <img src = {f3} className = 'img-fluid' alt = "flash-sale-product" />
                        <p className='card-title'>Buds air wireles..</p>
                        <h3 className='card-price'>400tk</h3>
                        <h4 className='card-text'>400tk<strike className='text-muted'>-33%</strike></h4>
                    </div>
                    <div className='col-lg-2 col-md-4 col-sm-6 p-2 card-body'>
                        <img src = {f4} className = 'img-fluid' alt = "flash-sale-product" />
                        <p className='card-title'>Buds air wireles..</p>
                        <h3 className='card-price'>400tk</h3>
                        <h4 className='card-text'>400tk<strike className='text-muted'>-33%</strike></h4>
                    </div>
                    <div className='col-lg-2 col-md-4 col-sm-6 p-2 card-body'>
                        <img src = {f5} className = 'img-fluid' alt = "flash-sale-product" />
                        <p className='card-title'>Buds air wireles..</p>
                        <h3 className='card-price'>400tk</h3>
                        <h4 className='card-text'>400tk<strike className='text-muted'>-33%</strike></h4>
                    </div>
                    <div className='col-lg-2 col-md-4 col-sm-6 p-2 card-body'>
                        <img src = {f6} className = 'img-fluid' alt = "flash-sale-product" />
                        <p className='card-title'>Buds air wireles..</p>
                        <h3 className='card-price'>400tk</h3>
                        <h4 className='card-text'>400tk<strike className='text-muted'>-33%</strike></h4>
                    </div>
                
                </div>
            </div>
            
        </div>
    );
};

export default FlashSale;