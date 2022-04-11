import "./ItemDetail.css";
import React, { useState } from "react";
import ItemCount from "./ItemCount";

const ItemDetail = ({id, title, price, image}) => {

    const [state, setState] = useState(false);

    const onAdd = (count) => {
        count > 0 && setState(true)
    }
    
    return(
        <div className="container-datail">
            <div className="images-datail"> 
                <img src={image} alt=""></img>
            </div>
            <div className="product-datail">
                <h3>{title}</h3>
                <h1>${price}</h1>
                <ItemCount stock={id} initial={0} onAdd={onAdd} state={state}/>
            </div>
        </div>
    );
}

export default ItemDetail;