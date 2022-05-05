import React, {useContext, useState, useEffect} from "react";
import { CartContext } from "../context/CartContext";
import { NavLink} from 'react-router-dom';
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase/firebase";
import { Form } from "./Form";

export const Cart = () => {
    const {cart, total, removeItem} = useContext(CartContext);
    const [idVenta, setIdVenta] = useState("");
    const [state, setState] = useState(false);

    const comprador = {
        name: "jere",
        phone: 1234,
        email: "jagarcia@gmail.com"
    }


    const handlerClickDelete = (itemId) => {
        removeItem(itemId);
    }


    useEffect(() => {
        const finalizarCompra = () => {
            const ventaCollection = collection(db, "ventas");
            addDoc(ventaCollection, {
                comprador,
                items: cart,
                date: serverTimestamp(),
                total
            })
            .then(result => {
                setIdVenta(result.id);
            })
        }

        // finalizarCompra();
    }, []);

    const handlerClickContinue = (e) => {
        console.log(e.name);
        console.log(e.phone);
        console.log(e.email);
    }

    return(
        <div className="card">
            {
                (total !== 0) 
                    ? cart.map(item => <div key={item.id}><p>{item.title}: {item.quantity}</p> <button onClick={()=>handlerClickDelete(item.id)}>X</button></div>) 
                    : <><h4>Tu carrito está vacío</h4><NavLink to="/"><button>Volver al inicio</button></NavLink></>
            }
            {/* {(total !== 0 && <div><h3>Total: {total}</h3><button>Continuar compra</button></div>)} */}
            {(total !== 0 && state === false && <div><h3>Total: {total}</h3><button onClick={()=>setState(true)}>Continuar compra</button></div>)}
            {state && <Form handlerClickContinue={handlerClickContinue}/>}
        </div>
    );
};