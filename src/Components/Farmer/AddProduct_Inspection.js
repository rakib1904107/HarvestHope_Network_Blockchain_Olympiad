import React from 'react';
import './AddProduct_Inspection.css';
import { Link } from 'react-router-dom';

const AddProduct_Inspection = () => {
    return (
        <div className='addproduct-inspection-page'>
            <div className="button-container">
                <Link to="/addproducttoinspection">
                    <button className="add-product-button">Add Product</button>
                </Link>
            </div>
            <div className="inspected-product">
                <h3>Inspected Product</h3>
                <ul className="product-list">
                    <li>
                        <span>Pineapple</span>
                        <Link to="/inspectedproductdetails">
                            <button>Show Certificate</button>
                        </Link>
                    </li>
                    <li>
                        <span>Capsicum</span>
                        <button>Show Certificate</button>
                    </li>
                    <li>
                        <span>Tomato</span>
                        <button>Show Certificate</button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default AddProduct_Inspection;