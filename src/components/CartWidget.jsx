import "../css/CartWidget.css"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { pink } from '@mui/material/colors';
import React, {useContext } from "react";
import { CartContext } from "../context/CartContext";
const CartWidget = () => {
    const {qty} = useContext(CartContext);
    return(
        <>
            <ShoppingCartIcon sx={{ color: pink[300] }} />
            {(qty !== 0) && <span className="cart-quantity">{qty}</span>}
            
        </>

    );
}

export default CartWidget;