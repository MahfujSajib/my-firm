import React from 'react';

const Mycart = (props) => {
    const { Cart } = props;
    let total = 0;
    for (const cattle of Cart) {
        total = total + cattle.price
    }


    return (
        <div>
            <div>
                <h2>Cattle cart</h2>
                <h3>total Cattle order: {props.Cart.length}</h3>
                <h5>Name:</h5>
                <h5>Price:</h5>
                <h5>Total Price: {total}</h5>

            </div>
        </div>
    );
};

export default Mycart;