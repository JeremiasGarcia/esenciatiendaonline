import React, {useContext, useState} from "react";
import { CartContext } from "../context/CartContext";
import { NavLink} from 'react-router-dom';
import { addDoc, collection, serverTimestamp, updateDoc, doc } from "firebase/firestore";
import { db } from "../firebase/firebase";
import { Form } from "./Form";
import "../css/Cart.css";

export const Cart = () => {
    const {cart, total, removeItem, clear} = useContext(CartContext);
    const [idVenta, setIdVenta] = useState("");
    const [state, setState] = useState(false);

    const handlerClickDelete = (itemId) => {
        removeItem(itemId);
    }

    const handlerClickContinue = (cliente) => {
        const ventaCollection = collection(db, "ventas");
        addDoc(ventaCollection, {
            cliente,
            items: cart,
            date: serverTimestamp(),
            total
        })
        .then(result => {
            setIdVenta(result.id);
        })
        // const updateCollection = doc(db, "productos", id);
        // updateDoc(updateCollection, {stock: 10})
        // cart.forEach(element => {
            
        // });
        clear();
    }

    return(
        <div className="cart">
            {
                (total !== 0 && idVenta === "") 
                    && cart.map(item => <><div className="products-cart" key={item.id}>
                                            <p>{item.title}: {item.quantity}</p>
                                            <button onClick={()=>handlerClickDelete(item.id)}>X</button>
                                        </div>
                                        <h3>Total: {total}</h3></>
                                )
            }
            {
                (total === 0 && idVenta === "") && <><h4>Tu carrito está vacío</h4><NavLink to="/"><button>Volver al inicio</button></NavLink></>
            }
            {
                (total !== 0 && !state) && <button onClick={()=>setState(true)}>Continuar compra</button>
            }
            {
                (total !== 0 && state && idVenta === "") && <Form handlerClickContinue={handlerClickContinue}/>
            }
            {
                (idVenta !== "") && <><h2>Compra realizada con exito!</h2><h4>Numero de la transaccion: {idVenta}</h4><NavLink to="/"><button>Volver al inicio</button></NavLink></>
            }
        </div>
    );
};