import { useState, useEffect } from "react";
import "./ItemListContainer.css"
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = ({name, lastname}) => {
    let url = '';
    const [products, setProducts] = useState([]);
    const {categoryName} = useParams();

    if(categoryName){
        url = `https://fakestoreapi.com/products/category/${categoryName}`;
    }else{
        url = 'https://fakestoreapi.com/products/';
    }

    useEffect(() =>{
        fetch(url)
        .then(res=>res.json())
        .then(json=>(setTimeout(()=>{
            setProducts(json);
        },2000)));
    }, [categoryName]);

    if (!products.length) return <h2>Cargando...</h2>;
    
    return(
        <div className="container-itemListContainer">
            <h3>Bienvenido {name} {lastname}</h3>
            <ItemList items={products} url={url}/>
        </div>
    );
}

export default ItemListContainer;