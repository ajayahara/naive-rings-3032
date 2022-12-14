import { Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "../Cart/CartItem.css";
import { AddSubstact } from "./AddSubstact";
export const CartItem = ({ image, name, price, id }) => {
    const [quantity, setQuantity] = useState(1);
    const handleAdd = (val) => {
        setQuantity((prev) => prev + val);
    };
    const store = useSelector((store)=> store.CartReducer)

    console.log(store)
    const handleReduce = (val) => {
        setQuantity((prev) => prev - val);
    };
    return (
        <div className="CartItem">
            <div>
                <div>
                    <img src={image} alt="image1" />
                </div>
            </div>
            <div>
                <div>{name}</div>
                <div>
                    <div>
                        {name}
                    </div>
                    <div>
                        <span>{(price * 0.8).toFixed(2)}</span>
                        <span>{price}</span>
                        <span>You Save {(price * 0.2).toFixed(2)}</span>
                    </div>
                    <div>
                        <span>Sold By </span>
                        <span>Reliance Retail</span>
                    </div>
                    <div>
                        <div>SAVE FOR LATER</div>
                        <AddSubstact />
                    </div>
                </div>
            </div>
        </div>
    );
};
