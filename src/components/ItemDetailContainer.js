import { useState, useEffect } from "react";
import "./ItemListContainer.css"
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {

    const url = 'https://mocki.io/v1/f7ae3aaf-f585-4cab-9355-541311beaf7b';
    const [product, setProduct] = useState({});

    useEffect(() =>{
        fetch(url)
        .then(res=>res.json())
        .then(json=>(setTimeout(()=>{
            setProduct(json);
        },2000)));
    }, []);

    if (!product.length) return <h2>Cargando...</h2>;
    
    return(
        <div className="container-itemDetailContainer">
            <ItemDetail id={product[0].id} title={product[0].title} price={product[0].price} pictureUrl={product[0].pictureUrl}/>
        </div>
    );
}

export default ItemDetailContainer;