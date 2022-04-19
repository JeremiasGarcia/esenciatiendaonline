import { CartContext } from "../context/CartContext";
import React, {useContext} from "react";

export const Cart = () => {
    const {cart} = useContext(CartContext);
    return(
        <div className="card">
            {/* <h4>{title}:{quantity}</h4> */}
            {cart.map(item => <p key={item.id}>{item.title}: {item.quantity}</p>)}
            {/* {cart.map(item => console.log(calcularTotal(item.price)))} */}
        </div>
    );
};