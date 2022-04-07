import { useState, useEffect } from "react";
import "./ItemListContainer.css"
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {

    let url = '';
    const [product, setProduct] = useState({});
    const {productName} = useParams();

    if(productName){
        url = `https://fakestoreapi.com/products/${productName}`
    }else{
        url = 'https://fakestoreapi.com/products'
    }
    

    useEffect(() =>{
        fetch(url)
        .then(res=>res.json())
        .then(json=>(setTimeout(()=>{
            setProduct(json);
        },2000)));
    }, [productName]);

    if (Object.keys(product).length === 0) return <h2>Cargando...</h2>;
    
    return(
        <div className="container-itemDetailContainer">
            <ItemDetail id={product.id} title={product.title} price={product.price} image={product.image}/>
        </div>
    );
}

export default ItemDetailContainer;