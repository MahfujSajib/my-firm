import React from 'react';
import Cattlecart from '../showname/Cattlecart';
import './Mycart.css'

const Mycart = (props) => {
    const { Mycart } = props;
    let total = 0;
    for (const cattle of Mycart) {
        total = total + cattle.price
    }

    return (
        <div>
            <div className="cattle-cart">
                <h2>CATTLE CART</h2>
                <h3>total Cattle order: {Mycart.length}</h3>
                <h5>
                    {
                        Mycart.map(cattle => <Cattlecart
                            key={cattle.id}
                            cattle={cattle}
                        ></Cattlecart>)
                    }
                </h5>
                <h5>Total Price: {total}</h5>
            </div>
        </div>
    );
};

export default Mycart;