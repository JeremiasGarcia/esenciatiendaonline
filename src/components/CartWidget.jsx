import "../css/CartWidget.css"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { pink } from '@mui/material/colors';
import React, {useContext } from "react";
import { CartContext } from "../context/CartContext";
const CartWidget = () => {
    const {cart} = useContext(CartContext);
    return(
        <>
            <ShoppingCartIcon sx={{ color: pink[300] }} />
            <span className="cart-quantity">5</span>
        </>

    );
}

export default CartWidget;