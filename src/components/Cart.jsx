import { CartContext } from "../context/CartContext";
import React, {useContext, useState} from "react";

export const Cart = () => {
    const {cart, total, removeItem} = useContext(CartContext);
    // const [state, setState] = useState(false);

    const handlerClick = (itemId) => {
        removeItem(itemId);
    }

    return(
        <div className="card">
            {/* <h4>{title}:{quantity}</h4> */}
            {cart.map(item => <div key={item.id}><p>{item.title}: {item.quantity}</p> <button onClick={()=>handlerClick(item.id)}>X</button></div>)}
            {(total !== 0 && <h3>Total: {total}</h3>)}
        </div>
    );
};