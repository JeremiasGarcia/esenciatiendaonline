import React, {createContext, useState} from "react";

export const CartContext = createContext();
const { Provider } = CartContext;


const CustomProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    //const [precioTotal, setPrecioTotal] = useState(0);
    //const [cantidadProductos, setCantidadProductos] = useState(0);

    const addItem = (item, quantity) => {
        const newItem = {
            ...item,
            quantity
        };
        if (isInCart(item.id)){
            const itemFind = cart.find(item => item.id === newItem.id);
            const index = cart.indexOF(itemFind);
            const aux = [...cart];
            aux[index].quantity += quantity;
            setCart(aux);
        }else{
            setCart([...cart, newItem]);
        }
    }

    const removeItem = (itemId) => {
        const aux = cart.filter(item => item.id !== itemId);
        setCart(aux);
    }

    const clear = () => {
        setCart([]);
    }

    const isInCart = (itemId) => {
        cart.find(item => item.id === itemId);
    }

    const ContextValue = {
        cart,
        addItem,
        removeItem,
        clear,
        isInCart
    }

    return(
        <Provider value={ContextValue}>{children}</Provider>
    );
}

export default CustomProvider;