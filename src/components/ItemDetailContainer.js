import { useState, useEffect } from "react";
import "./ItemListContainer.css"
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {

    const url = 'https://fakestoreapi.com/products/14';
    const [product, setProduct] = useState({});

    useEffect(() =>{
        fetch(url)
        .then(res=>res.json())
        .then(json=>(setTimeout(()=>{
            setProduct(json);
        },2000)));
    }, []);

    if (Object.keys(product).length === 0) return <h2>Cargando...</h2>;
    
    return(
        <div className="container-itemDetailContainer">
            <ItemDetail id={product.id} title={product.title} price={product.price} image={product.image}/>
        </div>
    );
}

export default ItemDetailContainer;