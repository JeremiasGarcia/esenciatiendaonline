import "./ItemCount.css"
import React, { useState } from "react";

const ItemCount = ({stock, initial, onAdd}) => {
    
    const [count, setCount] = useState(initial);
    
    const add = () => {
       count < stock && setCount(count + 1)
    }

    const remove = () => {
        count > 0 && setCount(count - 1)
    }

    const agregarAlCarrito = () => {
        onAdd();
    }

    return(
        <div className="container-itemCount">
            <div className="count">
                <button onClick={remove}>-</button>
                <h1>{count}</h1>
                <button onClick={add}>+</button>
            </div>
            <div>
                <button onClick={agregarAlCarrito}>Agregar al carrito</button>
            </div>
            
        </div>
    );
}

export default ItemCount;