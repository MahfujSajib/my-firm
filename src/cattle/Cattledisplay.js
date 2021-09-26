import React, { useEffect, useState } from 'react';
import Mycart from '../cattle-cart/Mycart';
import Cattleinfo from '../cattlesinfo/Cattleinfo';
import info from '../cattlesinfo/Cattleinfo';
import './Cattledisplay.css'

const CattleCart = () => {
    const [cattles, setCattles] = useState([]);
    const [Cart, setCart] = useState([])
    useEffect(() => {
        fetch('./cattles.JSON')
            .then(res => res.json())
            .then(data => setCattles(data))
    }, [])
    const handleCart = cattles => {
        const newCattle = [...Cart, cattles];
        setCart(newCattle)
    }
    return (
        <div className="cattle-container">
            <div className="display-cart">
                <Mycart Mycart={Cart}></Mycart>
            </div>
            <div className="display-cattle">
                {
                    cattles.map(cattle => <Cattleinfo
                        key={cattle.id}
                        handleCart={handleCart}
                        cattle={cattle}
                    ></Cattleinfo>)
                }

            </div>
        </div>
    );
};

export default CattleCart;