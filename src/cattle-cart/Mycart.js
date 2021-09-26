import React from 'react';
import './Mycart.css'

const Mycart = (props) => {
    console.log(props.Mycart.name)
    const { name, price } = props.Mycart;
    const { Mycart } = props;
    let total = 0;
    for (const cattle of Mycart) {
        total = total + cattle.price
    }


    return (
        <div>
            <div className="cattle-cart">
                <h2>CATTLE CART</h2>
                <h3>total Cattle order: {props.Mycart.length}</h3>
                <h5>Name:{name}</h5>
                <h5>Price: {price}</h5>
                <h5>Total Price: {total}</h5>

            </div>
        </div>
    );
};

export default Mycart;