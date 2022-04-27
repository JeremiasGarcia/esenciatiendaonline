import "../css/ItemDetail.css";
import React, { useState, useContext } from "react";
import ItemCount from "./ItemCount";
import { CartContext } from "../context/CartContext";

const ItemDetail = ({id, title, price, image, stock}) => {
    const [state, setState] = useState(false);
    const {addItem} = useContext(CartContext);

    const onAdd = (count) => {
        count > 0 && setState(true);
        addItem({id, title, price, image, stock}, count);
    }
    
    return(
        <div className="container-datail">
            <div className="images-datail"> 
                <img src={image} alt=""></img>
            </div>
            <div className="product-datail">
                <h3>{title}</h3>
                <h1>${price}</h1>
                <ItemCount stock={stock} initial={0} onAdd={onAdd} state={state}/>
            </div>
        </div>
    );
}

export default ItemDetail;