import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons';
import './Cattleinfo.css'

const Cattleinfo = (props) => {
    const { name, id, img, weight, price } = props.cattle;
    const cartIcon = <FontAwesomeIcon icon={faLocationArrow} />
    return (
        <div className="grid-container">
            <div className="container">
                <img src={img} alt="" />
                <h2>Name:{name}</h2>
                <h4>ID: {id}</h4>
                <h5>Weight: {weight}</h5>
                <h4>Price: {price}</h4>
                <button onClick={() => props.handleCart(props.cattle)} className="buy-btn">Buy Now</button>
                <p>Our Location:
                    <br />
                    <a className="icon" href="https://bengalmeat.com/" target="_blank">{cartIcon}</a>
                </p>
            </div>
        </div >
    );
};

export default Cattleinfo;