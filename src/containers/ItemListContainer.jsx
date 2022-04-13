import { useState, useEffect } from "react";
import "../css/ItemListContainer.css"
import ItemList from "../components/ItemList";
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
    
    return(
        <div className="container-itemListContainer">
            {products.length 
            ? <><h3>Bienvenido {name} {lastname}</h3> <ItemList items={products} url={url}/></> 
            : <h2>Cargando...</h2>}
        </div>
    );
}

export default ItemListContainer;