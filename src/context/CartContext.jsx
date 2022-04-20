import React, {createContext, useState, useEffect} from "react";

export const CartContext = createContext();
const { Provider } = CartContext;


const CustomProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);
    const [qty, setQty] = useState(0);
    
    useEffect(() => {
        totalPrice();
        getQuantity();
    }, [cart]);

    const addItem = (item, quantity) => {
        const newItem = {
            ...item,
            quantity
        };
        if (isInCart(item.id)){
            const itemFind = cart.find(item => item.id === newItem.id);
            const index = cart.indexOf(itemFind);
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
        if(cart.find(item => item.id === itemId) !== undefined){
            return true;
        }else{
            return false;
        }
    }

    const totalPrice = () =>{
        let aux = 0;
        cart.forEach((item) => {
            aux += item.price * item.quantity;
        });
        setTotal(aux);
    }

    const getQuantity = () =>{
        let aux = 0;
        cart.forEach((item) => {
            aux += item.quantity;
        });
        setQty(aux);
    }

    const ContextValue = {
        cart,
        total,
        qty,
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