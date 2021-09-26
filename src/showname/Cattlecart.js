import React from 'react';

const Cattlecart = (props) => {
    const { name, price } = props.cattle
    return (
        <div>
            <h5>Name: {name}</h5>
            <h5>Price: {price}</h5>
        </div>
    );
};

export default Cattlecart;