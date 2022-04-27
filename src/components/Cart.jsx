import { CartContext } from "../context/CartContext";
import React, {useContext} from "react";
import { NavLink} from 'react-router-dom';

export const Cart = () => {
    const {cart, total, removeItem} = useContext(CartContext);

    const handlerClick = (itemId) => {
        removeItem(itemId);
    }

    return(
        <div className="card">
            {
                (total !== 0) 
                    ? cart.map(item => <div key={item.id}><p>{item.title}: {item.quantity}</p> <button onClick={()=>handlerClick(item.id)}>X</button></div>) 
                    : <><h4>Tu carrito está vacío</h4><NavLink to="/"><button>Volver al inicio</button></NavLink></>
            }
            {(total !== 0 && <h3>Total: {total}</h3>)}
        </div>
    );
};